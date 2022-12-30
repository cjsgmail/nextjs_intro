import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import Intro from "./Intro";
import Contact from "./Contact";
import Stack from "./Stack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

const CarouselContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 700px;
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
  display: flex;
  justify-content: center;
  width: 100%;
  position: absolute;
`;

const NextButtonContainer = styled(ButtonContainer)`
  top: 50%;
`;
const PlayButtonContainer = styled(ButtonContainer)`
  bottom: 10%;
`;

const Title = styled.h1`
  height: 5rem;
  width: 100%;
  padding: 30px;
  color: #748ffc;
`;

const Button = styled.button`
  position: absolute;
  background-color: rgba(255, 255, 255, 0);
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

const NextButton = styled(Button)`
  right: 3rem;
`;
const PrevButton = styled(Button)`
  left: 3rem;
`;
const StartButton = styled.button`
  background-color: rgba(255, 255, 255, 0);
  border: none;
  margin-left: 5px;
  &:hover {
    cursor: pointer;
  }
`;
const PauseButton = styled.button`
  background-color: rgba(255, 255, 255, 0);
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlay, setIsPlay] = useState(true);

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

  useEffect(() => {
    let timer;
    // 재생중 3초 간격으로 슬라이드 변화
    if (isPlay) {
      timer = setTimeout(() => {
        if (currentSlide >= TOTAL_SLIDES) {
          setCurrentSlide(0);
        } else {
          setCurrentSlide(currentSlide + 1);
        }
      }, 3000);
    }
    // 일시정지 버튼을 누를 경우 타이머를 제거하여 해당 이미지에 정지.
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <>
      <CarouselContainer>
        <Title>About Me</Title>
        <Content ref={slideRef}>
          <div>
            <Slide>
              <Contact />
            </Slide>
          </div>
          <div>
            <Slide>
              <Intro />
            </Slide>
          </div>
          <div>
            <Slide>
              <Stack />
            </Slide>
          </div>
        </Content>
        <NextButtonContainer>
          <PrevButton onClick={Prev}>
            <FontAwesomeIcon icon={faChevronLeft} size="lg" />
          </PrevButton>
          <NextButton onClick={Next}>
            <FontAwesomeIcon icon={faChevronRight} size="lg" />
          </NextButton>
        </NextButtonContainer>
        <PlayButtonContainer>
          {isPlay ? (
            <PauseButton onClick={() => setIsPlay(!isPlay)}>
              <FontAwesomeIcon icon={faPause} size="lg" />
            </PauseButton>
          ) : (
            <StartButton onClick={() => setIsPlay(!isPlay)}>
              <FontAwesomeIcon icon={faPlay} size="lg" />
            </StartButton>
          )}
        </PlayButtonContainer>
      </CarouselContainer>
    </>
  );
}
