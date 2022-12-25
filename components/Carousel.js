import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import Intro from "./Intro";
import { H2 } from "../pages";

const CarouselContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 500px;
  overflow: hidden;
`;

const Content = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  top: 50%;
`;

const Slide = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  bottom: 1rem;
`;

const Title = styled.h1`
  height: 5rem;
  width: 100%;
  padding: 30px;
  color: #748ffc;
`;

const NextButton = styled.button``;
const PrevButton = styled.button``;

export default function Carousel() {
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
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
  }, [currentSlide]);

  return (
    <CarouselContainer>
      <Title>About Me</Title>
      <Content ref={slideRef}>
        <div>
          <Slide>
            <Intro />
          </Slide>
        </div>
        <div>
          <Slide>안녕하세요</Slide>
        </div>
        <div>
          <Slide>안녕히가세요</Slide>
        </div>
      </Content>
      <ButtonContainer>
        <PrevButton onClick={Prev}>이전</PrevButton>
        <NextButton onClick={Next}>다음</NextButton>
      </ButtonContainer>
    </CarouselContainer>
  );
}
