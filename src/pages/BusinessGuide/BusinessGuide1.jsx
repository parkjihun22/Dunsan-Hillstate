import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import page1 from "../../assets/BusinessGuide/BusinessGuide1/page1.jpg";
import tableImage from "../../assets/BusinessGuide/BusinessGuide1/tableImage.jpg";
import { Helmet } from "react-helmet-async";




const projectData = [
  { label: '사업명', value: '힐스테이트 둔산 오피스텔' },
  { label: '사업위치', value: '대전광역시 서구 탄방동 591번지 일원' },
  { label: '대지면적', value: '정보 미공개' },
  { label: '건축면적', value: '정보 미공개' },
  { label: '연면적', value: '정보 미공개' },
  { label: '용적률', value: '정보 미공개' },
  { label: '건축규모', value: '지하 7층 ~ 지상 37층, 4개동' },
  { label: '세대수', value: '총 600실 오피스텔' },
];

const BusinessGuide1 = () => {
	const menuContents = [
		{ title: "사업안내", url: "/BusinessGuide/intro" },
		{ title: "분양일정", url: "/BusinessGuide/plan" },
		{ title: "공급안내", url: "/BusinessGuide/documents" }
	];
	const [isScroll, setIsScroll] = useState(false);
	const { pathname } = useLocation(); // 현재 경로를 가져옴
	const isMobile = useMediaQuery({ query: '(max-width: 900px)' }); // 모바일 여부 확인

	useEffect(() => {
		window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
	}, [pathname]); // pathname이 변경될 때마다 실행

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScroll(true);
			} else {
				setIsScroll(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={styles.container}>

			<Helmet>
				{/* 기본 문자셋 및 모바일 최적화를 위한 meta 태그 */}
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
				<meta name="theme-color" content="#ffffff" />
				<meta name="robots" content="index, follow" />

				{/* SEO 최적화를 위한 메타 태그 */}
				<title>힐스테이트둔산 - 사업안내</title>
				<meta
					name="description"
					content="힐스테이트둔산의 사업개요를 통해 프로젝트의 비전과 가치를 확인하세요. 단지 설계, 개발 목표, 주변 환경과의 조화 등을 중점적으로 설명하여 평택에서의 새로운 주거 중심지로서의 가능성을 보여드립니다."
				/>
				<meta
					name="keywords"
					content="힐스테이트둔산, 둔산힐스테이트, 사업개요"
				/>
				<link rel="canonical" href="https://www.alwatanyh.com/BusinessGuide/intro" />

				{/* Open Graph - 소셜 미디어 공유 최적화 */}
				<meta property="og:title" content="힐스테이트둔산 - 사업안내" />
				<meta
					property="og:description"
					content="힐스테이트둔산의 사업개요를 통해 프로젝트의 비전과 가치를 확인하세요. 단지 설계, 개발 목표, 주변 환경과의 조화 등을 중점적으로 설명하여 평택에서의 새로운 주거 중심지로서의 가능성을 보여드립니다."
				/>
				<meta property="og:image" content="https://www.alwatanyh.com/Main1.png" />
				<meta property="og:url" content="https://www.alwatanyh.com/BusinessGuide/intro" />
				<meta property="og:site_name" content="힐스테이트둔산" />

				{/* Twitter 카드 설정 */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="힐스테이트둔산 - 사업안내" />
				<meta
					name="twitter:description"
					content="힐스테이트둔산의 사업개요를 통해 프로젝트의 비전과 가치를 확인하세요. 단지 설계, 개발 목표, 주변 환경과의 조화 등을 중점적으로 설명하여 평택에서의 새로운 주거 중심지로서의 가능성을 보여드립니다."
				/>
				<meta name="twitter:image" content="https://www.alwatanyh.com/Main1.png" />
				<meta name="twitter:url" content="https://www.alwatanyh.com/BusinessGuide/intro" />

				{/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도 향상 */}
				<script type="application/ld+json">
					{`
					{
						"@context": "https://schema.org",
						"@type": "WebPage",
						"name": "힐스테이트둔산 - 사업안내",
						"description": "힐스테이트둔산의 사업개요를 통해 프로젝트의 비전과 가치를 확인하세요. 단지 설계, 개발 목표, 주변 환경과의 조화 등을 중점적으로 설명하여 평택에서의 새로운 주거 중심지로서의 가능성을 보여드립니다.",
						"url": "https://www.alwatanyh.com/BusinessGuide/intro"
					}
					`}
				</script>
			</Helmet>

			<Header isChanged={isScroll} />
			<FixIcon />

			<Bener title="사업개요" />

			<MenuBar contents={menuContents} />
			{/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
			<h1 className={styles.screenReaderOnly}>힐스테이트둔산 - 사업안내</h1>
			<p className={styles.screenReaderOnly}>
				힐스테이트둔산은 혁신적인 주거 환경을 제공하는 새로운 아파트 단지입니다. 이 페이지에서는 프로젝트의 전체적인 개요와 개발 계획을 상세히 소개합니다. 사업의 목적, 주요 설계 및 특징, 그리고 주변 환경을 포함한 다양한 정보를 통해 입주자들에게 더 나은 선택을 할 수 있도록 돕습니다.
			</p>

			<div className={styles.textBox}>
				<div>특별한 라이프 컬렉션</div>
				<div>힐스테이트둔산의 새로운 자부심으로 찾아옵니다.</div>
			</div>

			<img className={styles.img3} src={page1} alt="힐스테이트둔산-image1"/>

			<div className={styles.tableContainer}>
				{!isMobile && <img className={styles.tableImg} src={tableImage} />}
				<table className={styles.projectTable}>
					<tbody>
						{projectData.map((item, index) => (
							<tr key={index}>
								<td className={styles.label}>{item.label}</td>
								<td className={styles.contents}>{item.value}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			 <div className={styles.commonBox}>
				<div className={styles.notice}>
					※ 본 홈페이지에 표기된 내용은 하기의 내용을 근거로 한 내용이며, 추후 계획의 변동 등은 당사와 무관합니다.
				</div>
				<div className={styles.notice}>
					※ 첨단 시스템반도체 국가산업단지 국토교통부 승인(2024.12.26) * 국토교통부 제5차 국가철도망구축계획 경강선 연장(2024.1.22) 반영 * 용인특례시 건설정책과 반도체 고속도로 예비타당성조사 심의 통과(2024.8.23)
				</div>
				
			</div> 


			<Footer />
		</div>
	)
}

export default BusinessGuide1;
