# 棟鑫水電網站檢查（2026-10-14）

修改前 Git 狀態乾淨。可還原副本在 `backups/before-audit-20261014-035740/`，包含原始 app、public、根目錄檔案及工作區／暫存區 patch。未重設 Git、未提交、未部署。備份與測試下載已排除於 Git、TypeScript 與 ESLint。

## 修正

- 首頁原本先以桌面字級輸出，hydration 後才偵測手機並切換字級、間距、按鈕排列與裝飾。正式站及直接限速的原版測試都重現 CLS 0.435，標題占約 0.435。改用初始 CSS media query，Hero 改為 Server Component，不再監聽 resize 或重繪整個首屏。手機及桌面關閉 JavaScript 時，標題位置／大小與開啟時相同。
- 導覽列樣式移入 globals.css，首屏即可取得。Hero 圖片沿用 case3.jpg，使用 Next 16 的 preload 替代已棄用的 priority。
- 移除浮動按鈕的 preventDefault、1200ms timer 與 callback 導航。它仍是原生 tel／LINE 連結。
- 根 layout 的小型初始化程式先建立 gtag 佇列及單一 capture click listener，涵蓋所有頁面、導覽列、頁尾、浮動按鈕與內容；client navigation 不會重複註冊。每次點擊各排入一次原有 conversion_event_contact 及 click_phone／click_line，附帶方法、位置、頁面及 contact_action=click。分析事件明確送至既有 GA4。追蹤失敗也不攔截導航。
- GA4 `G-KQMV13X0NC` 及 Ads `AW-16737912362`、`AW-18052969763`、`AW-18404348972` 均保留。沒有加入 Ads conversion label／ID。外部 Google script 最終維持 afterInteractive；lazyOnload 試驗未呈現穩定改善，已取消。
- 導覽列與頁尾使用原有 `/icon.png` 公司 Logo，固定尺寸並由 next/image 提供縮圖。結構化資料 logo 統一為 `https://www.dongxin24.com/icon.png`；原工程 image、其他 SEO 資料及素材保留。
- 文案、價格、服務頁、電話 `0918808209`、LINE `https://line.me/ti/p/ezn_Ad6UpZ`、sitemap、robots、網址、package.json、package-lock.json 均保留。

## 驗證方式與限制

Lighthouse 13.5.0、系統 Chrome；手機 412×823、CPU 4 倍減速及預設慢速網路。模擬（simulate）與實際限速（devtools）報告分開比較；每個報告是單次實驗，第三方網路、主機負載與快取會影響結果。線上舊版與本機新版的數字不能當作同環境比較。原版獨立測試副本位於 audit/baseline-project，原始備份未動。

原站 simulate：效能 16、LCP 8.2 秒、CLS 0.435、TBT 840ms。回應等待約 8.2 秒，後續靜態資源也有明顯等待，需要在 Vercel Preview／正式環境再測。LCP 元素為標題，不是工程背景圖。Google GA4／Ads script 是明顯的 JS 成本；保留三個 Ads 帳號的要求意味著不能逕自刪除它們。

本機 simulate 原版：50／LCP 13.6 秒／CLS 0／TBT 1170ms。第一次修正版：56／LCP 18.0 秒／CLS 0／TBT 790ms。這個模式的 LCP 並未改善，不能只挑較好的效能分數作結論。採用另外的實際限速前後比較以確認首屏行為。lazyOnload 試驗報告保留供稽核，但不是最終程式。

本機正式建置、相同 devtools 實際限速：

| 指標 | 修改前 | 修改後 |
| --- | ---: | ---: |
| 效能 | 36 | 65 |
| FCP／LCP | 4.0 秒 | 2.9 秒 |
| CLS | 0.435 | 0 |
| TBT | 990ms | 1440ms |
| 主執行緒工作 | 7.2 秒 | 5.9 秒 |
| JS 啟動 | 1.5 秒 | 1.5 秒 |

首屏、CLS 與總主執行緒時間改善，但 TBT 這次增加，沒有達到低阻塞的效能目標。TBT 計算首屏後的長任務，仍受 Google scripts 與環境影響；不能宣稱 JS 阻塞已全面改善。這次後測 GA4／Ads script evaluation 約 961ms。保留所有 Ads 設定與 afterInteractive 策略；後續應在 Vercel Preview 重測並由帳號管理者確認三組 Ads 的用途，再決定是否可減少不需要的標籤。

瀏覽器測試阻擋 Google 外送並於測試端取消實際撥號／開啟 LINE，驗證網站在取消之前沒有阻止連結。這證明程式的事件次數及導航行為，不代表真實電話接通、Google 後台已收到或歸因成功。

## 重跑

```powershell
npm run build
npm run start -- --port 3000
# 另一個 terminal：
npm install --prefix audit/tools --no-save --package-lock=false lighthouse playwright
node audit/measure.mjs after-throttled http://localhost:3000/ --devtools
node audit/verify.mjs after
npm run lint
```

verify 涵蓋首頁、關於我們、聯絡我們、九個服務頁及 404，390×844／1440×900，逐一檢查聯絡連結、config IDs、Logo、無水平溢出、追蹤故障、client navigation 及 Hero 在無 JS 時的幾何一致性。首頁／頁尾／服務頁截圖與 HTML／JSON 報告保存在 audit，報告及下載工具不提交。

最終 `npm run build`、`npm run lint`、`git diff --check` 通過；13 頁 × 2 尺寸、161 次逐連結測試與 2 次 client navigation 後的聯絡點擊通過，沒有瀏覽器 runtime error。首頁、頁尾及代表服務頁的手機／桌面截圖已人工檢視。

## Vercel 發布前後

1. 檢視本機 diff，再提交所需原始碼、設定及 audit 腳本／說明；不要提交 backups、audit/tools、audit/baseline-project 或測試產物。
2. 推送至已連接 Vercel 的儲存庫分支，先建立 Preview。沿用既有 Build Command `npm run build`、網域與其他專案設定，不需新增追蹤 ID。
3. 在 Preview 重新量測手機 Lighthouse／真機畫面，核對 HTML、Logo、sitemap／canonical，確認標籤與事件。
4. 在 GA4／Ads 後台或 Tag Assistant 核對 conversion_event_contact 的現有映射、三個 Ads 帳號用途及主要／次要轉換。避免同時將聯絡事件及 click_phone 匯入為同一主要轉換。電話點擊應標為點擊聯絡；實際接通需要獨立電話回報／通話轉換設定，這次未新增。
5. Preview 驗證後部署／promote 至 Production，確認 www.dongxin24.com 指向新部署，再重測正式站。這次僅完成本機修正，沒有發布。
