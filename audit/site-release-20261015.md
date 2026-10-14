# 2026-10-15 整體優化：修改與驗證

## 程式已改善

- 基準為正式 main 的 2f02b8c，非前一天更早版本。初始工作目錄乾淨，已建立 optimize/site-20261015 分支及 backups/site-20261015/source-before.zip；沒有重設或覆蓋未提交工作。
- 延續原 DX 公司 Logo、深藍／金色。首頁首屏縮短並放電話、LINE、緊急維修與裝修工程兩種入口；桌機保留施工實照，手機不以滿屏背景圖占據資訊空間。
- 首頁七項維修以兩欄精簡卡片展示，四類工程分開。三件施工精選連到 /projects 的八件現有作業紀錄；工程類別、信任訊息與重複 CTA 已合併，流程縮為三步。
- 新增 /shui-dian-gong-cheng 裝修水電、/gei-pai-shui 給排水配管獨立內容。工程清楚說明台北、新北、桃園、基隆；一般維修與24小時緊急聯絡只主打雙北。未設定最低承接金額。
- 共用導覽與品牌頁尾套用所有服務頁；原九個服務頁網址、服務與 FAQ 資料陣列完整保留。補入各自費用影響因素、施工約定、案例及相關服務連結。
- 全站標題不再重複追加棟鑫水電，含室內配線頁；保留既有 canonical，新增頁面及 sitemap。統一 Organization／Plumber／Electrician graph、個別服務範圍、Breadcrumb 與可見 FAQ。未編造地址、分店、證照、年資或評分。
- 無來源 Google5.0／三段評論停止呈現，沒有用同名第三方評分冒充 Google 評論。case8 電表照片含戶別資訊，不列入案例，原圖301導到施工列表，影像優化入口拒絕回傳圖片；原檔仍保留在 Git／備份。
- 原生 FAQ 可鍵盤與無JS操作；所有重要文字、服務連結與答案都在初始 HTML，沒有等待點擊後下載。
- 固定聯絡列加入 safe-area 與頁尾留白。正文至少16px，320px也沒有水平溢出；不是靠縮小文字縮短網站。
- 首屏移除多層照片濾鏡／背景模糊，使用系統字型；沒有新增動畫套件、影片或網路字型。非首屏圖片 lazy，指定尺寸與比例，手機縮圖 sizes 對準90／110px。
- 保留並按七種寬度實測更新離屏 content-visibility 高度，減少初始排版；DOM內容與SEO文字仍完整。

電話0918808209、LINE https://line.me/ti/p/ezn_Ad6UpZ 保持不變。GA4 G-KQMV13X0NC、Ads AW-16737912362／AW-18052969763／AW-18404348972、既有 conversion_event_contact／click_phone／click_line 均保留。inline config與事件監聽程式和基準逐字相同；沒有為分數停用追蹤或延遲／攔截撥號，也沒有把點擊當成接通。未更動任何廣告預算、出價、轉換目標、語言、地區或聯播網。

## 手機與桌機瀏覽長度

同 viewport 高度844px；記錄整頁實際 scrollHeight，離屏區塊強制可見後量測，前後同方法、未把折疊答案全展開。

|寬度|修改前px|修改後px|縮短|
|---|---:|---:|---:|
|320|26664|5488|79.42%|
|360|24966|5274|78.88%|
|390|24269|5193|78.60%|
|430|23919|5014|79.04%|
|1440|12855|4444|65.43%|

390px 約從28.8個螢幕長度降為6.2個。重要資訊以精簡入口、獨立服務頁、完整施工列表及原生折疊保留。

本機截圖（測試產物不提交）：audit/site-before-390.png、site-final-390.png、site-before-1440.png、site-final-1440.png；完整長圖 site-before-full-390.png／site-final-full-390.png，其他尺寸及服務頁畫面亦留在 audit。

## 本機效能：相同設定，各三次有效

Lighthouse13.5、Chrome155、同一Windows電腦；新 headless browser／冷快取、mobile412×823、DPR1.75、devtools CPU4倍、RTT150ms／throughput1638.4Kbps。FCP上限60秒、load90秒，FullPageScreenshot gatherer關閉；真實Google追蹤啟用、不阻擋第三方請求。前localhost:3101為未修改production build，後localhost:3102為最終production build。configSettings deepEqual確認完全相同，六次無runtimeError、warnings或audit error。沒有把本機與雲端互比。

|版本／次數|效能|LCP秒|CLS|TBT毫秒|
|---|---:|---:|---:|---:|
|前1|26|9.350|0|8507.048|
|前2|26|10.519|0|8744.788|
|前3|27|8.554|0|7741.578|
|**前中位數**|**26**|**9.350**|**0**|**8507.048**|
|最終後1|29|7.293|0|14204.537|
|最終後2|35|5.580|0|9425.330|
|最終後3|37|5.225|0.000132|11137.949|
|**後中位數**|**35**|**5.580**|**0**|**11137.949**|

LCP中位數下降約40.3%；TBT上升約30.9%，不能宣稱JavaScript阻塞已改善。main thread中位數19.31→19.43秒，近乎持平；style/layout中位數9.02→6.23秒，下降約30.9%。第三方SDK與實體主機仍有波動，benchmarkIndex前1560／2135.5／1540.5，後1423.5／1464.5／1607；設定相同不代表背景負載完全固定。

中間版（尚未修正縮圖sizes／新版離屏排版）三次為33/6.050s/0/8248.431ms、35/7.717s/0/13817.830ms、61/2.944s/0/2455.178ms；中位35/6.050s/0/8248.431ms。保留全部資料，沒有挑61分報告。

最終第一輪三張手機案例圖合計約58,017 bytes，前一版304,717 bytes，減少81%。本機Next script transfer約161.8→161.2KB，沒有靠停用追蹤降低分數。Google SDK eval/parse仍有數秒長工作，效能與TBT尚有實際限制。

## 必要驗證

- build／TypeScript及lint通過，25個靜態route（含metadata資源，不是25篇內容頁）。
- 320／360／390／430／1440，首頁、室內配線、裝修水電、配管、施工列表25組檢查通過；選單Escape與焦點、FAQ鍵盤／滑鼠／關JS、原生錨點、正文、照片解碼、無水平溢出及頁尾安全留白通過。
- 24個主要內部連結／錨點目標、robots、sitemap、canonical、單一H1、品牌標題、Breadcrumb與一致Logo核對通過。原有服務路徑保留。
- 本機16頁（含404）×兩種尺寸264個聯絡按鈕通過；每種既有事件各一次、defaultPrevented=false、analytics拋錯也不阻止導航；SPA換頁不重裝監聽。
- 真實Google loader只載入一次／ID，四組config均一次；測試beacon阻擋避免假轉換。沒有聲稱驗證後台歸因或實際接通。
- 九個原服務／FAQ陣列與原始版本AST文字比對一致；追蹤inline程式逐字比對一致。

SEO需求承接、同業研究與信任內容核對見 site-seo-20261015.md。Search Console未授權，無真實使用者INP資料；沒有捏造查詢量／排名，也沒有把TBT當INP。

## 發布與後續

依使用者授權，Preview驗證通過後依既有GitHub main→Vercel Production流程發布。正式版本與部署後記錄另存本機 backups/site-20261015/release-verification.md；這份文件記錄的是提交前已確認的程式與本機驗證，不把Preview成功當正式上線。

排名尚待累積資料：取得Search Console近三個月資料後，追蹤各承接頁曝光、點擊、CTR與排名；真實案例的完整前因、施作與驗收資料及證照需業主提供可核實來源，不能由AI補造。Google SDK成本、TBT與真實使用者體驗仍需持續觀察。
