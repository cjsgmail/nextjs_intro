import Header from "../components/Header";
import styled from "styled-components";
import ProfileImg from "../images/ProfileImg.webp";
import Image from "next/image";
import Intro from "../components/Intro";
import { useEffect, useRef, useState } from "react";

const GitLink = styled.a`
  color: black;
`;

const H2 = styled.h2`
  color: #3b5bdb;
  margin-bottom: 20px;
`;

const MainCotainer = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 5rem;
`;

const MyIntroContainer = styled.section`
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #edf2ff;
  color: #3b5bdb;
`;

const ImageContainer = styled.div`
  width: 300px;
  height: 400px;
  border-radius: 20px;
  overflow: hidden;
`;

const H1 = styled.div`
  font-size: 60px;
  font-weight: 600px;
  margin-left: 30px;
`;

const ContactContainer = styled.div`
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #3b5bdb;
  overflow: hidden;
`;

const AboutContainer = styled.div`
  height: 300px;
  width: 300vw;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
`;

const SlideBox = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AboutContent = styled.div`
  border-right: 3px solid #edf2ff;
  padding: 0 20px;
`;

const PrevButton = styled.button``;

const NextButton = styled.button``;

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const TOTAL_SLIDES = 2;

  const Prev = () => {
    if (currentSlide === 0) {
      // 더 이상 넘어갈 슬라이드가 없으면
      setCurrentSlide(TOTAL_SLIDES); // 1번째 슬라이드로 넘어갑니다.
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const Next = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0); // 마지막 슬라이드로 넘어갑니다.
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 1s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00vw)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
  }, [currentSlide]);

  return (
    <div>
      <Header />
      <MainCotainer>
        <MyIntroContainer>
          <ImageContainer>
            <Image
              src={ProfileImg}
              height={400}
              width={300}
              alt="프로필 사진"
              placeholder="blur"
            ></Image>
          </ImageContainer>
          <H1>
            웹 프론트엔드 개발자 <br />
            최정석의 포트폴리오 입니다.
          </H1>
        </MyIntroContainer>
        <ContactContainer>
          <H1>About Me</H1>
          <AboutContainer ref={slideRef}>
            <SlideBox>
              <AboutContent>
                <H2>생년월일</H2>
                <div>1997.06.02</div>
              </AboutContent>
              <AboutContent>
                <H2>전화번호</H2>
                <div>010-2035-9863</div>
              </AboutContent>
              <AboutContent>
                <H2>이메일</H2>
                <div>cjs0097@gmail.com</div>
              </AboutContent>
              <AboutContent>
                <H2>깃허브</H2>
                <GitLink href="https://github.com/cjsgmail">
                  https://github.com/cjsgmail
                </GitLink>
              </AboutContent>
            </SlideBox>

            <SlideBox>
              <div>안녕하세요</div>
            </SlideBox>

            <SlideBox>
              <div>안녕히가세요</div>
            </SlideBox>
          </AboutContainer>
          <PrevButton onClick={Prev}>-</PrevButton>
          <NextButton onClick={Next}>+</NextButton>
        </ContactContainer>
      </MainCotainer>
    </div>
  );
}
