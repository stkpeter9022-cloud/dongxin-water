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

## 分享授權前結果（歷史）

- 已推送 source commit `4621d66dd4a88e6a39dc6f5c2d0cac14b6e1dd5b`，14 個指定檔案；工作區乾淨，遠端 main 仍為原基準。
- GitHub Deployment `7049817422`，environment **Preview**，state **success**，description “Deployment has completed”；GitHub Vercel commit status 也為 success。
- Preview：<https://dongxin-water-dcmd9k46p-stkpeter9022-clouds-projects.vercel.app>
- 部署狀態頁：<https://vercel.com/stkpeter9022-clouds-projects/dongxin-water/AL2SzaEArzV33BGNdjWqYdCuhxEG>
- 本機本次 `npm run build`、`npm run lint` 及 secret pattern／指定檔案排除檢查通過。實際 Google scripts 本機載入及換頁檢查通過，報告為 audit/tags-local.json。
- Preview 的 verify 與 tags 測試已嘗試，但未通過網站驗證：HTTP 導向 vercel.com/login，頁面標題 **Login – Vercel**，沒有網站的標題或 GA4 config。返回 200 的是登入頁，不能視為網站正常回應。部署保護需要有效的登入連線；未停用或繞過既有保護。
- **Preview 畫面、電話／LINE、事件次數、Google script 次數、Lighthouse 數據及完整建置日誌仍待受保護存取完成後驗證。** 沒有把本機結果說成 Preview 結果，也沒有聲稱已檢視完整 Vercel logs。
- 目前 **不具備已驗證可發布正式站的條件**。待 Preview 實測完成、效能結果被評估，以及帳號端轉換映射核對後才能確認。沒有發布正式站。

## 分享授權後結果

測試網址：<https://dongxin-water-git-preview-m-b15c20-stkpeter9022-clouds-projects.vercel.app>。測試來源為 fd47f57，網站程式與先前修正版一致。本次只更新驗證腳本／紀錄，沒有變更網站、Google ID 或事件，也沒有發布正式站。

分享授權透過 Playwright 的 API request 建立限定 Preview 網域的 Cookie，不執行分享參數網址的頁面 JavaScript。之後所有頁面及 Lighthouse 皆使用不含分享參數的網址。Cookie 僅在臨時瀏覽器中使用，分享參數不寫入原始碼或測試報告；輸入檔在 Git 忽略的 audit/tools 內，完成後刪除。

**Preview 功能驗證通過**：13 頁 × 390×844／1440×900，161 次電話／LINE 連結、2 次 client navigation 後聯絡點擊，既有每個事件各一次，追蹤故障時不攔截原生連結。200／404 HTTP 狀態、四個 config ID、Logo、無水平溢出、Hero 無 JS 幾何一致性檢查通過，無 runtime error。首頁、頁尾、代表服務頁的手機／桌面截圖已人工檢視。

允許 Google scripts 執行、阻擋 measurement／conversion 外送的 Preview 測試也通過：GA4 G-KQMV13X0NC 與 Google 自動載入的 AW-18404348972 各下載一次，換頁後未重複；四組既有 config 各一次。測試沒有實際撥號、開啟 LINE 或送出測試轉換，也不能據此證明電話接通或 Ads 後台事件映射正確。

### Preview 效能（獨立讀數，不與本機／正式站比較）

同一 Preview、Lighthouse 13.5.0、Chrome 155、412×823、CPU 4 倍與先前相同限速參數。模擬第 1 輪使用已授權 Puppeteer page；對照輪恢復原本的 Lighthouse 自行建頁方式，授權 Cookie 仍留在同一網域，不新增全域秘密 headers。兩種頁面建立方式的讀數完整保留，不以較好的分數宣稱網站又有改善。

| 報告 | 效能 | LCP 秒 | CLS | TBT ms | 狀態 |
| --- | ---: | ---: | ---: | ---: | --- |
| preview-authorized-simulate | 48 | 4.690 | 0 | 1629 | 完成、無警告 |
| preview-authorized-simulate-control | 56 | 3.103 | 0 | 2395 | 標準建頁對照、完成、無警告 |
| preview-authorized-devtools | 31 | 10.248 | 0 | 28193 | 載入超時，可能不完整 |
| preview-authorized-devtools-repeat | 29 | 21.624 | 0 | 28694 | 重測仍超時，可能不完整 |
| preview-authorized-devtools-control | 無有效分數 | 15.979 | 0 | 無有效數據 | 標準建頁對照超時，NO_TTI_NETWORK_IDLE_PERIOD |

實際限速的高阻塞不只出現一次，但都存在超時限制；控制輪的 score 與 TBT 是 null／error，**不是 0 分或 0ms**。測量腳本已避免將 null 分數轉成 0。這些讀數只保留為診斷資料，不能當作完整穩定的效能基準。主機 benchmarkIndex 也有波動（既有本機修正版 2597.5，本次實際限速約 1299–1470），同設定不代表主機執行負載相同。

兩輪完整模擬測試的 CLS 都為 0，但 LCP 與 TBT 仍未達理想。Google scripts 有明顯 evaluation 成本（模擬約 1.3 秒），版面計算也占主執行緒時間；實際限速的 LCP 元素改為背景工程圖，延遲含資源載入及繪製等待，不能只歸因圖片大小或重複載入。原有三組 Ads 設定保留。

**發布判定：功能與 Preview 部署檢查通過，效能驗證尚未通過，不建議現在以「效能已修好」發布正式站。** 尚需改善與可靠重測 JS／版面／首屏繪製，以及核對 Ads 帳號端的主要／次要轉換與映射。此次僅完成 Preview 驗證，沒有 promote Production。
