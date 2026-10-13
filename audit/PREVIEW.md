# Preview 驗證與發布準備

## 已有手機效能數據

全部報告使用 Lighthouse 13.5.0、Windows Chrome 155、412×823、DPR 1.75、CPU 4 倍減速。網路設定為 RTT 150ms、throughput 1638.4Kbps；devtools 的實際限速參數為 latency 562.5ms、download 1474.56Kbps、upload 675Kbps。每列是單次測試，快取、第三方回應及主機負載不能保證相同；沒有把各模式或本機與正式站混合比較。

| 報告／環境 | 版本 | 效能 | LCP（秒） | CLS | TBT（ms） |
| --- | --- | ---: | ---: | ---: | ---: |
| baseline-local／本機 simulate | 修改前 | 50 | 13.587 | 0 | 1166 |
| after-local／本機 simulate | 修正版 | 56 | 18.012 | 0 | 788 |
| trial-lazy-local／本機 simulate | 已取消的 lazyOnload 試驗 | 49 | 18.477 | 0 | 1214 |
| baseline-throttled／本機 devtools | 修改前 | 36 | 3.966 | 0.435259 | 993 |
| after-throttled／本機 devtools | 修正版 | 65 | 2.878 | 0 | 1440 |
| baseline-live／正式站 simulate | 線上舊版，獨立參考 | 16 | 8.167 | 0.435259 | 840 |
| 使用者先前提供／環境與方法不詳 | 先前手機測試 | 25 | 7.2 | 0.434 | 未提供 |

可比較的組別是本機 simulate 前／後，以及本機 devtools 前／後。simulate 的 LCP 未改善；devtools 的首屏及 CLS 改善，但 TBT 增加。因此目前不能宣稱已完成低阻塞效能優化，也不能宣稱正式站已有任何改變。

已直接比對上述兩組 JSON 的 Lighthouse 版本、host／network user agent、form factor、screen emulation、throttling 及 throttling method，記錄的設定一致。本次最終本機重驗 13 頁 × 2 尺寸、161 次聯絡連結及 2 次換頁後聯絡點擊通過，無 runtime error。

原版 devtools 主執行緒工作 7.2 秒，修正版 5.9 秒；JS 啟動皆約 1.5 秒。修正版報告的 Google GA4／Ads script evaluation 合計約 961ms，仍是 JS 成本的明顯來源。

## Google 標籤核對

原始碼只在根 layout 引入一次 gtag loader。實際允許 Google scripts 執行並完成首頁 → /about client navigation 後，GA4 `G-KQMV13X0NC` 請求一次，Google 自動引入的 Ads `AW-18404348972` 請求一次；同一 ID 未重複下載。這兩個不同 ID 的載入不能當成同一標籤重複載入。

四組 config 各一次：G-KQMV13X0NC、AW-16737912362、AW-18052969763、AW-18404348972。三個 Ads config 保留，即使未觀察到另外兩個獨立 JS loader，也不代表設定被刪除。電話測試點擊各排入一次 conversion_event_contact 及 click_phone，未攔截原生導航。所有測試均阻擋 Google measurement／conversion 外送，不製造測試轉換。

帳號端的事件映射及主要／次要轉換尚需後台確認，程式或網路請求次數無法證明電話已接通、轉換歸因正確或後台沒有重複匯入。

## Git 與 Vercel

來源：stkpeter9022-cloud/dongxin-water；本機 main 及遠端 main 基準為 1b9cc6d4ecfedf9c14b954aae2438de02556c8ea。該 commit 的 GitHub Vercel status 為 success，連到 stkpeter9022-clouds-projects/dongxin-water，確認既有 Git 整合。

使用獨立 preview/mobile-contact-audit-20261014 分支，僅提交這次修正、忽略／測試設定及 audit 的可重跑腳本／Markdown。排除 backups、下載工具、baseline-project、報告 JSON／HTML、截圖、patch、.env、.vercel 與建置產物。沒有 merge／push main，也沒有 promote Production。

## 重跑 Preview

```powershell
node audit/verify.mjs preview https://PREVIEW_HOST
node audit/tags.mjs tags-preview https://PREVIEW_HOST
node audit/measure.mjs preview-simulate https://PREVIEW_HOST
node audit/measure.mjs preview-devtools https://PREVIEW_HOST --devtools
```

Preview 效能數據獨立列出；若需要雲端改版前／後效能結論，必須另建原版 Preview 並使用相同設定交替多次測試。測試若遇部署保護，應使用已授權 Vercel 連線或由使用者完成正常登入，不變更既有保護設定。

## 本次 Preview 結果

- 已推送 source commit `4621d66dd4a88e6a39dc6f5c2d0cac14b6e1dd5b`，14 個指定檔案；工作區乾淨，遠端 main 仍為原基準。
- GitHub Deployment `7049817422`，environment **Preview**，state **success**，description “Deployment has completed”；GitHub Vercel commit status 也為 success。
- Preview：<https://dongxin-water-dcmd9k46p-stkpeter9022-clouds-projects.vercel.app>
- 部署狀態頁：<https://vercel.com/stkpeter9022-clouds-projects/dongxin-water/AL2SzaEArzV33BGNdjWqYdCuhxEG>
- 本機本次 `npm run build`、`npm run lint` 及 secret pattern／指定檔案排除檢查通過。實際 Google scripts 本機載入及換頁檢查通過，報告為 audit/tags-local.json。
- Preview 的 verify 與 tags 測試已嘗試，但未通過網站驗證：HTTP 導向 vercel.com/login，頁面標題 **Login – Vercel**，沒有網站的標題或 GA4 config。返回 200 的是登入頁，不能視為網站正常回應。部署保護需要有效的登入連線；未停用或繞過既有保護。
- **Preview 畫面、電話／LINE、事件次數、Google script 次數、Lighthouse 數據及完整建置日誌仍待受保護存取完成後驗證。** 沒有把本機結果說成 Preview 結果，也沒有聲稱已檢視完整 Vercel logs。
- 目前 **不具備已驗證可發布正式站的條件**。待 Preview 實測完成、效能結果被評估，以及帳號端轉換映射核對後才能確認。沒有發布正式站。
