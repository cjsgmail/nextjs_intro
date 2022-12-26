import Header from "../components/Header";
import styled from "styled-components";
import ProfileImg from "../images/ProfileImg.webp";
import Image from "next/image";
import Carousel from "../components/Carousel";

export const GitLink = styled.a`
  color: black;
`;

export const H2 = styled.h2`
  color: #3b5bdb;
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
  color: #364fc7;
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

export default function Home() {
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
        <Carousel />
      </MainCotainer>
    </div>
  );
}
