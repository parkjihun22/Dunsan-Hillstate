import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import LocationSectionBox from "../../components/LocationSectionBox/LocationSectionBox";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import section2Image1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import section2Image2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import section2Image3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import section2Image4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import section2Image5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import section2Image6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";

const LocationSection = [
  {
    img: section2Image1,
    titleText: "정비사업 및 교통호재 중심지<br />탄탄한 미래가치 입지",
    contentText:
      "도마·변동 재정비촉진지구 일대 약 2만5천여 가구 신흥 주거지화<br />용문1·2·3구역 정비 추진 중으로 도시재생 기대감 높음",
  },
  {
    img: section2Image2,
    titleText: "의료 인프라 프리미엄<br />건강케어 중심 입지",
    contentText:
      "단지 반경 약 1.5 km 내 대전대학교병원, 을지대병원, 치과병원 등 종합병원 밀집<br />이외 내과·소아과·치과 의원도 다양하게 분포",
  },
  {
    img: section2Image3,
    titleText: "초역세권 + 광역철도 호재<br />광역접근성 우위 단지",
    contentText:
      "지하철 1호선 용문역 도보 약 5분 거리 초역세권<br />2026년 충청권 광역철도(도마·용두역 예정), 2028년 도시철도 2호선 트램 연계 예정",
  },
  {
    img: section2Image4,
    titleText: "생활 인프라 접근성<br />편리한 도심생활 기반",
    contentText:
      "롯데백화점, 이마트 둔산점, 홈플러스, 메가박스 등 문화·쇼핑 시설 도보권<br />관공서, 은행, 카페거리 인접 생활 편의성 우수",
  },
  {
    img: section2Image5,
    titleText: "대단지 스케일<br />600실 힐스테이트 브랜드",
    contentText:
      "총 600실 규모의 힐스테이트 둔산 오피스텔<br />브랜드 희소성 및 커뮤니티 활성화 기대",
  },
  {
    img: section2Image6,
    titleText: "자연 속 상업 인프라<br />여유롭고 쾌적한 생활환경",
    contentText:
      "유등천 수변공원·중촌시민공원 인접 도보 산책로 및 자전거 도로 확보<br />단지 주변 상권지역과 경안천 상부공원 계획도 포함된 쾌적 인프라",
  },
];

const LocationEnvironment1 = () => {
  const menuContents = [
    // { title: "입지 안내영상", url: "/FloorPlan/videos" },
    { title: "입지안내", url: "/LocationEnvironment/intro" },
    { title: "프리미엄", url: "/LocationEnvironment/primium" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  // 화면 스크롤이 탑이 아니면 isScroll 값 true로 변환
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Helmet>
        {/* 기본 문자셋 및 모바일 최적화를 위한 meta 태그 */}
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />

        {/* SEO 최적화를 위한 메타 태그 */}
        <title>힐스테이트둔산 - 입지환경</title>
        <meta
          name="description"
          content="힐스테이트둔산의 입지 정보를 확인하세요. 뛰어난 교통망, 생활 인프라, 교육 및 쇼핑 시설 등 편리한 주변 환경을 소개하며, 대전의 중심에서 누릴 수 있는 생활의 편리함과 가치를 제공합니다"
        />
        <meta
          name="keywords"
          content="힐스테이트둔산, 힐스테이트둔산, 힐스테이트둔산모델하우스"
        />
        <link
          rel="canonical"
          href="https://www.dwbsongs.com/LocationEnvironment/intro"
        />

        {/* Open Graph - 소셜 미디어 공유 최적화 */}
        <meta
          property="og:title"
          content="힐스테이트둔산 - 입지환경"
        />
        <meta
          property="og:description"
          content="힐스테이트둔산의 입지 정보를 확인하세요. 뛰어난 교통망, 생활 인프라, 교육 및 쇼핑 시설 등 편리한 주변 환경을 소개하며, 대전의 중심에서 누릴 수 있는 생활의 편리함과 가치를 제공합니다"
        />
        <meta
          property="og:image"
          content="https://www.dwbsongs.com/Main1.png"
        />
        <meta
          property="og:url"
          content="https://www.dwbsongs.com/LocationEnvironment/intro"
        />
        <meta property="og:site_name" content="힐스테이트둔산" />

        {/* Twitter 카드 설정 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="힐스테이트둔산 - 입지환경"
        />
        <meta
          name="twitter:description"
          content="힐스테이트둔산의 입지 정보를 확인하세요. 뛰어난 교통망, 생활 인프라, 교육 및 쇼핑 시설 등 편리한 주변 환경을 소개하며, 대전의 중심에서 누릴 수 있는 생활의 편리함과 가치를 제공합니다"
        />
        <meta
          name="twitter:image"
          content="https://www.dwbsongs.com/Main1.png"
        />
        <meta
          name="twitter:url"
          content="https://www.dwbsongs.com/LocationEnvironment/intro"
        />

        {/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도 향상 */}
        <script type="application/ld+json">
          {`
										{
											"@context": "https://schema.org",
											"@type": "WebPage",
											"name": "힐스테이트둔산 - 입지환경",
											"description": "힐스테이트둔산의 입지 정보를 확인하세요. 뛰어난 교통망, 생활 인프라, 교육 및 쇼핑 시설 등 편리한 주변 환경을 소개하며, 대전의 중심에서 누릴 수 있는 생활의 편리함과 가치를 제공합니다",
											"url": "https://www.dwbsongs.com/LocationEnvironment/intro"
										}
										`}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="입지환경" />

      <MenuBar contents={menuContents} />
      {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
      <h1 className={styles.screenReaderOnly}>
        힐스테이트둔산 - 입지안내
      </h1>
      <p className={styles.screenReaderOnly}>
        힐스테이트둔산의 입지 정보를 확인하세요. 뛰어난 교통망, 생활
        인프라, 교육 및 쇼핑 시설 등 편리한 주변 환경을 소개하며, 대전의
        중심에서 누릴 수 있는 생활의 편리함과 가치를 제공합니다
      </p>

      <div className={styles.textBox}>
        <div>갈수록 완벽해질 둔산</div>
        <div>살수록 높아질 힐스테이트</div>
        <div>도시를 압도할 자부심 힐스테이트</div>
      </div>

      <img
        src={page1}
        className={styles.image2}
        alt="힐스테이트둔산입지환경-image1"
      />

      <div className={styles.section2}>
        {LocationSection.map((value, idx) => (
          <LocationSectionBox
            image={value.img}
            title={value.titleText}
            text={value.contentText}
          />
        ))}
      </div>

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          ※본 홍보물의 내용과 지역도는 소비자의 이해를 돕기 위한 것으로, 개발 예정•계획 및 교통, 학교 계획 등에 관한 사항은 해당 기관의 아래 자료를 토대로 제작되었습니다. 사업계획 및 일정은 개발계획별 사업주체에 의해 변경될 수 있으며, 힐스테이트둔산 사업주체 및 시공사와 무관합니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
