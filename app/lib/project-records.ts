export type VerifiedCase = {
  customerIssue?: string;
  inspection?: string;
  treatment?: string;
  materials?: string;
  district?: string;
  outcome?: string;
  evidence: string;
};
type PhotoRecord = { observation: string; assessment: string; checks: string; verifiedCase?: VerifiedCase };

// Photo observations and general assessment guidance are distinct from case facts.
// Fill verifiedCase only after receiving an attributable job record / owner confirmation.
export const projectRecords: Record<string, PhotoRecord> = {
  panel: { observation: "既有配電箱內可見開關與線路配置，呈現現場線路檢修作業。", assessment: "同類案件需先釐清故障迴路、使用設備與保護開關狀況，再評估接點或線材是否需要處理。", checks: "依工項約定核對迴路與設備使用情形；是否需要更換開關或重新配線，不能只靠照片決定。" },
  piping: { observation: "師傅於戶外設備周邊進行管路配接，照片可見作業位置與周邊空間。", assessment: "配管需確認用途、既有管材、管徑、施工路徑與設備接續位置，並確認可施工的操作空間。", checks: "依實際給水或排水用途約定接頭、通水或排水確認項目，並釐清拆除與復原範圍。" },
  submersible: { observation: "照片記錄沈水設備與排水管路周邊的現場作業。", assessment: "同類排水設備需確認水位、排放用途、馬達規格、管路與控制設備，才評估維修或選型。", checks: "依現場條件約定啟停控制及排水功能的確認方式；不從單張照片推定故障原因或抽排成果。" },
  bathroom: { observation: "照片呈現洗臉盆及相關衛浴設備安裝作業。", assessment: "設備尺寸、固定位置、給排水銜接及既有牆地面條件，會影響拆裝與配管範圍。", checks: "施工項目確認後，約定設備固定、接管與使用功能的檢查，以及周邊復原責任。" },
  drain: { observation: "現場使用疏通設備處理排水管路，呈現工具與施工入口。", assessment: "需先了解堵塞影響範圍、管路走向、管徑及疏通入口，再決定工具與是否拆裝設備。", checks: "依現場條件確認排水情形；若反覆堵塞，需再評估管況，而非僅憑照片保證不再堵塞。" },
  leak: { observation: "照片記錄管路周邊與漏水位置的現場檢視情形。", assessment: "水痕位置不必然等於漏點，需結合發生時機、管路與用水情況，區分檢測和後續修繕工項。", checks: "修繕前先確認來源及範圍，再依工項約定觀察或測試方式，不從照片推定已永久止漏。" },
  pump: { observation: "照片呈現馬達周邊配管與設備接線作業。", assessment: "應核對設備用途、電壓、流量、揚程及安裝空間，也要確認原管路與控制設備條件。", checks: "依設備與工項約定供水及啟停確認；是否更換整組設備需經現場檢查。" },
  breaker: { observation: "照片呈現損壞開關與配電設備的外觀檢查紀錄。", assessment: "開關損壞需連同接點、線路、負載與周邊狀況檢查，不能只更換元件而忽略可能成因。", checks: "先確認檢查與修繕範圍，再約定設備恢復使用前的確認項目；照片不代表已完成驗收。" },
};

export const caseFields = { customerIssue: "原始問題", inspection: "現場檢查", treatment: "施工方式", materials: "設備與材料", district: "施工地區", outcome: "完工結果" } as const;
