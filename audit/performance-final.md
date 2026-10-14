# 2026-10-14 效能修正與 Preview 驗證

本輪基準是 d82a10b（已包含先前 CLS、Logo、聯絡事件修正），不是最初 25 分／CLS 0.434 的版本。原始素材、電話、LINE、文案、價格、服務、canonical、結構化資料及四組 Google ID 保留。修改前原始碼 ZIP 位於忽略的 backups/before-performance-20261014-053246/source-d82a10b.zip；manifest/layout 另有 backups/performance-final 備份。

## 相同設定的本機正式建置比較

Lighthouse 13.5.0、同一台 Windows 電腦與 Chrome 155、headless、新瀏覽器／清除快取；mobile 412×823、DPR 1.75、devtools throttling、CPU 4 倍、RTT 150ms、throughput 1638.4 Kbps。FCP 上限 60 秒、load 上限 90 秒；關閉報告的 FullPageScreenshot gatherer，網站追蹤正常啟用。performance.mjs 記錄完整設定，前後 configSettings deepEqual 通過。前：隔離的 d82 production localhost:3001；後：最終 production localhost:3002。以下六次皆無 runtimeError、runWarnings 或失敗 audit。

|版本／次數|效能|LCP 秒|CLS|TBT 毫秒|
|---|---:|---:|---:|---:|
|修改前 1|25|12.097|0|13927.419|
|修改前 2|26|9.546|0|16754.309|
|修改前 3|35|7.229|0|21134.211|
|**修改前中位數**|**26**|**9.546**|**0**|**16754.309**|
|最終修改後 1|35|5.568|0|8716.444|
|最終修改後 2|30|9.288|0|15632.064|
|最終修改後 3|33|6.206|0|3539.567|
|**修改後中位數**|**33**|**6.206**|**0**|**8716.444**|

LCP 中位數減少約 35%、TBT 約 48%；main-thread 中位數 32.24 → 17.09 秒。機器 benchmarkIndex 前 1302.5–1478.5、後 1405–1795，背景負載／主機速度仍有波動，不能宣稱所有差異皆由程式造成；設定相同不代表實體執行環境完全不變。沒有把正式站與本機互比。

中間候選（離屏 CSS／原生 FAQ／小 favicon，但 Google afterInteractive、manifest 尚指向大圖）三次：31/12.580s/0/21727.236ms、26/9.886s/0/11692.031ms、29/10.855s/0/16650.405ms；中位數 29/10.855s/0/16650.405ms。此階段 LCP 未改善，因此繼續修正，沒有挑最好一次報告。

## 超時與瓶頸的證據

- 原先 45 秒 gather 上限在主機慢速執行與第三方請求仍繁忙時不足，曾出現 NO_TTI_NETWORK_IDLE_PERIOD；登入保護另由 final URL／HTTP 狀態驗證。提高相同測試上限後，上述六次均有效。這不代表原本網站速度良好。
- 前 trace 初始 document Layout 單次 9.88 秒、443 個 layout objects；layout 總計約 13.57 秒。首頁非首屏 section 使用 content-visibility:auto，按四種寬度實測高度設 intrinsic size，保留全部 HTML；不是延遲取得服務文字。
- FAQ 改為原生 details/summary，保留答案及 FAQ schema，減少 React 狀態與 hydration；滑鼠、鍵盤、關閉 JS 均可操作。
- Google SDK 有數秒的長工作；中間候選首屏圖片下載後仍有約 8.89 秒 render delay。只把外部 SDK 改為 Next lazyOnload；既有 inline config／唯一 click handler 保持 beforeInteractive，早期事件仍入原有 queue。沒有移除 ID、事件或阻止連結導航。SDK 真實載入與 SPA 去重另行驗證。
- manifest 原本下載 1,025,623 bytes 的原圖；改為同原圖靜態生成的 512px /brand-icon，最終 trace transfer 236,070 bytes，減少約 77%。32px favicon transfer 1,953 bytes。導航／頁尾與 schema 仍使用原始品牌素材，沒有新 Logo。
- Google GA4／Ads SDK 執行仍是主要成本，最終第一輪 GA SDK 約 3.74 秒、Ads SDK 約 4.15 秒。效能仍偏低，沒有宣稱達到快站或所有瓶頸已消失。

## 驗證與部署範圍

- production build 通過，22 個靜態 route。
- 本機 13 頁（含 404）×手機／桌面，161 個電話／LINE 按鈕通過：原 href、每個既有事件各一次、defaultPrevented=false；模擬 analytics 失敗也不阻止導航。電話點擊不代表接通電話。
- 真實 Google SDK 允許載入，僅阻擋測試 beacon 避免製造假轉換；四組 config 均一次，實際 GA4／Ads loader 每 ID 一次，SPA 換頁仍去重。Google 自動產生不同 ID 的 loader 不算同 ID 重複載入。
- 390／412／768／1440：首頁各 section 全文、高度、連結、title、description、canonical、JSON-LD 與基準完全相同；hash anchor、FAQ mouse／keyboard／no-JS 通過。離屏高度估計與实际捲動高度差小於 0.3%。手機與桌面截圖已檢視。
- 部署只更新 preview/mobile-contact-audit-20261014；不推 main、不發布正式站。備份、工具 dependencies、憑證、測量 JSON／HTML／截圖排除提交。

完整 raw report／trace 留在忽略的 audit/perf-before-*、perf-after-*、perf-final-*。Preview 實測另行記錄，不與以上 localhost 中位數混用。
