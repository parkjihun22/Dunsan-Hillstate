import React, { useState } from "react";
import styles from "./EmodelInline.module.scss";

// Emodel.jsx 에 정의된 탭과 URL을 그대로 복사합니다.
const menuContents = [
  { title: "84A", key: "84A" },
  { title: "84E1", key: "84E1" },
  // { title: "84A", key: "84A" },
  // { title: "84B", key: "84B" },
];

const vrUrls = {
  "84A": "https://hillstate.co.kr/upload/2025/09/20250908063156011398/tour.html",
  "84E1": "https://hillstate.co.kr/upload/2025/09/20250908063156011398/tour.html",
  // "84A": "https://www.prugio.com/hb/2025/onecluster/vr/84a.html",
  // "84B": "https://www.prugio.com/hb/2025/onecluster/vr/84b.html",
};

export default function EmodelInline() {
  const [selectedType, setSelectedType] = useState("84A");

  return (
    <div className={styles.inlineWrapper}>
      {/* ─── 타입 탭 메뉴 ─── */}
      <div className={styles.tabMenu}>
        {menuContents.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setSelectedType(tab.key)}
            className={`${styles.tabButton} ${
              selectedType === tab.key ? styles.activeTab : ""
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* ─── VR 뷰어 ─── */}
      <div className={styles.vrSection}>
        <iframe
          className={styles.vrIframe}
          src={vrUrls[selectedType]}
          title={`${selectedType} VR`}
          allowFullScreen
          frameBorder="0"
        />
      </div>
    </div>
  );
}
