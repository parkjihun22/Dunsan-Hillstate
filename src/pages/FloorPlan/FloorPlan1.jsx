import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./FloorPlan.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";
import { Helmet } from "react-helmet-async";

// import page1 from "../../assets/FloorPlan/FloorPlan1/page1.jpg"

import Ready from "../../components/Ready/Ready";

const FloorPlan1 = () => {
  const menuContents = [
		{ title: "59A", url: "/FloorPlan/59A" },
		{ title: "59B", url: "/FloorPlan/59B" },
		{ title: "84A", url: "/FloorPlan/84A" },
		{ title: "84B", url: "/FloorPlan/84B" },
		{ title: "84C", url: "/FloorPlan/114A" },
		// { title: "세대안내영상", url: "/FloorPlan/videos" }, // 세대안내영상 링크
		// { title: "E-모델하우스", url: "/FloorPlan/Emodel" },
  ];

  const [isScroll, setIsScroll] = useState(false);
  const [isImage2Loaded, setIsImage2Loaded] = useState(false); // 이미지 로딩 상태 추가
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  // 이미지가 로드되면 호출되는 함수
  const handleImageLoad = () => {
    setIsImage2Loaded(true); // 이미지가 로드되면 상태 업데이트
  };

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
        <title>힐스테이트둔산 - 평면안내</title>
        <meta
          name="description"
          content="힐스테이트둔산의 평면도를 통해 세대별 구조와 공간 활용도를 확인하세요. 실용적이고 혁신적인 설계를 기반으로 한 다양한 평면 구성이 여러분의 생활을 더 편리하게 만듭니다."
        />
        <meta name="keywords" content="둔산힐스테이트, 힐스테이트둔산, 임대" />
        <link
          rel="canonical"
          href="https://www.dwbsongs.com/FloorPlan/59A"
        />

        {/* Open Graph - 소셜 미디어 공유 최적화 */}
        <meta
          property="og:title"
          content="힐스테이트둔산 - 평면안내"
        />
        <meta
          property="og:description"
          content="힐스테이트둔산의 평면도를 통해 세대별 구조와 공간 활용도를 확인하세요. 실용적이고 혁신적인 설계를 기반으로 한 다양한 평면 구성이 여러분의 생활을 더 편리하게 만듭니다."
        />
        <meta
          property="og:image"
          content="https://www.dwbsongs.com/Main1.png"
        />
        <meta
          property="og:url"
          content="https://www.dwbsongs.com/FloorPlan/59A"
        />
        <meta property="og:site_name" content="힐스테이트둔산" />

        {/* Twitter 카드 설정 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="힐스테이트둔산 - 평면안내"
        />
        <meta
          name="twitter:description"
          content="힐스테이트둔산의 평면도를 통해 세대별 구조와 공간 활용도를 확인하세요. 실용적이고 혁신적인 설계를 기반으로 한 다양한 평면 구성이 여러분의 생활을 더 편리하게 만듭니다."
        />
        <meta
          name="twitter:image"
          content="https://www.dwbsongs.com/Main1.png"
        />
        <meta
          name="twitter:url"
          content="https://www.dwbsongs.com/FloorPlan/59A"
        />

        {/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도 향상 */}
        <script type="application/ld+json">
          {`
										{
											"@context": "https://schema.org",
											"@type": "WebPage",
											"name": "힐스테이트둔산 - 평면안내",
											"description": "힐스테이트둔산의 평면도를 통해 세대별 구조와 공간 활용도를 확인하세요. 실용적이고 혁신적인 설계를 기반으로 한 다양한 평면 구성이 여러분의 생활을 더 편리하게 만듭니다.",
											"url": "https://www.dwbsongs.com/FloorPlan/59A"
										}
										`}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="세대안내" />

      <MenuBar contents={menuContents} />
      {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
      <h1 className={styles.screenReaderOnly}>
        힐스테이트둔산 - 59A평면안내
      </h1>
      <p className={styles.screenReaderOnly}>
        59타입의평면 안내 페이지는 힐스테이트둔산의 각 아파트
        평면도를 제공합니다. 고객들이 아파트의 구조를 정확히 이해하고, 자신의
        생활 스타일에 맞는 평형을 선택할 수 있도록 돕습니다. 다양한 평면 설계를
        확인하고 자신에게 맞는 최적의 공간을 찾아보세요.
      </p>

      <div className={styles.textBox}>
        <div>둔산의 눈부신 가치 위에</div>
        <div>힐스테이트의 새로운 자부심으로 찾아옵니다.</div>
      </div>

      {/* 이미지에 애니메이션 효과 추가 */}
      {/* <img
				className={`${styles.image2} ${isImage2Loaded ? styles.showImage2 : ''}`}
				src={page1}
				alt="힐스테이트둔산 평면안내이미지1"
				onLoad={handleImageLoad}  // 이미지 로드 후 애니메이션 실행
			/> */}
      
      <Ready/>

   

      <div className={styles.commonBox2}>
        <div className={styles.notice}>
          ※ 상기 이미지는 전시품목과 유상옵션이 포함된 견본주택을 촬영한 것으로
          타입별 유상옵션 적용학몽, 특화범위 및 위치는 상이하며 실제 시공시
          차이가 있을 수 있습니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FloorPlan1;
