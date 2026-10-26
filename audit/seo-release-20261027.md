# 2026-10-27 SEO 與動態效果調整

## 基準與備份

初始工作目錄乾淨，基準及遠端 main 均為 5ace4ad。安全分支 optimize/seo-motion-20261027；完整 Git bundle 保存在忽略的 backups/pre-seo-20261027.bundle，已驗證可讀。沒有覆蓋使用者修改。

## 改版檢查與實作

8 月版本 1b9cc6d 首頁 Title 為「雙北水電｜台北新北24小時水電維修｜棟鑫水電」，10 月版本改為「雙北水電維修・裝修水電工程｜棟鑫水電」。本次恢復明確的台北、新北、24小時急修搜尋意圖，保留工程入口及既有版面。這是可驗證的相關性調整，沒有 Search Console 資料可以判定排名下滑的原因。

- 首頁 Title：台北新北24小時水電行｜水電維修・水電工程｜棟鑫水電。
- H1：台北・新北24小時水電維修。Description 與服務 H2 自然對應維修、工程及裝潢，優先急修。
- 在地資訊明確列出中和、板橋、永和及台北各區，沒有新增虛構地址或地區頁。
- 工程頁 Title／H1 承接台北新北水電工程、水電裝潢；其他服務頁維持各自故障需求、獨立 metadata、FAQ、流程、報價與相關連結，避免首頁與服務頁互搶相同意圖。
- 既有 11 項服務路徑及 projects、about、contact 均保留；sitemap 更新修改日期。
- 依業主本次提供的事實補充乙級室內配線技術士資訊。沒有另稱已查驗證號，也未新增無來源評論、年資、固定保固期限或施工案例。
- 保留 Plumber／Electrician（屬 LocalBusiness）、Organization、服務目錄與 Breadcrumb JSON-LD；不補造實體地址或評分。
- robots 允許檢索、各頁 canonical 指向正式 www HTTPS 網域，所有主要內容均有伺服器 HTML。

## 競爭網站

來源：https://hydropower9.com/（2026-10-27）。首頁以台北水電行24小時緊急維修為 H1，導覽可直接找到服務、工程實績、證照、知識與聯絡資訊，列有服務說明、報價及保固內容。本次借鏡急修辨識、專業資訊與服務入口的清楚程度；使用棟鑫自己的照片及內容。對方各項承諾與評價沒有移植。未做對方手機效能量測，因此沒有宣稱速度超越對方。

## 動態與效能

不新增動畫套件。桌機滑鼠環境：舊頁 200ms 輕微縮小傾斜、新頁 240ms 淡入回正；卡片 220ms 浮起，離屏內容進入視窗 240ms 淡入上移。不 preventDefault、不等待動畫、不更改 Next Link 或 history、不把主內容預設隱藏。手機觸控、減少動態設定停用動畫。初次主內容不執行入場動畫，避免拖延首屏。

既有圖片已採 Next Image、固定尺寸、responsive sizes 及離屏 lazy loading；原有 content-visibility 保留。GA4／三組 Ads config、lazyOnload loader、聯絡事件程式保持原樣。沒有新增轉換、移除追蹤或修改 Ads 後台。Google SDK 仍是手機 JavaScript 工作的重要來源；本次不宣稱已解決所有 Core Web Vitals。

修改前正式站 Lighthouse mobile 單次（simulate、Chrome 冷快取、原有追蹤啟用）：72 分、LCP 1.959 秒、CLS 0、TBT 783ms。第一次沙箱測試遇到 chrome-error 錯誤頁，已排除；上列為允許連線後 valid=true 的測試。修改後正式站結果另記於發布驗證報告，避免拿本機與正式站數據混比。TBT 不是 INP，缺少真實使用者 INP。

## 發布前驗證

- npm run build、npm run lint、npx tsc --noEmit 通過；25 個靜態 route（含 metadata 資源）。
- 15 個內容頁 200、唯一 Title／Description、單一 H1、canonical、初始 HTML、服務 FAQ 全部通過。
- 320／360／390／430／1440：25 組版面驗證；24 個內部網址／錨點、robots、sitemap、404 與既有敏感照片轉址通過。
- 16 頁（含404）×手機／桌機共 264 個聯絡按鈕：正確電話及 LINE、既有事件每種一次、失敗不阻斷導航；SPA 不重複安裝追蹤。
- 桌機／觸控換頁與返回、卡片浮起、減少動態、無瀏覽器執行錯誤通過；390／1440 截圖已檢視。

## 尚待觀察

本次未取得 Search Console 權限，不能提供曝光／點擊／CTR／排名下滑歸因。發布後以首頁、各服務頁與雙北查詢分組追蹤；前三名為長期目標，不保證排名。實際 Google 商家評論及完整地區案例仍需可核實來源才能補充。正式部署狀態與上線檢查須以發布後驗證為準。
