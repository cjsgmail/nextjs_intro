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
  background-color: #edf2ff;
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

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 900px;
`;

const Text = styled.div`
  margin-top: 30px;
  margin-left: 30px;
  padding: 20px;
  border-radius: 30px;
  background-color: white;
  color: black;
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
`;

const Highlight = styled.span`
  color: #364fc7;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 50%, #e7f5ff 50%);
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
          <TextContainer>
            <H1>
              웹 프론트엔드 개발자 <br />
              최정석의 포트폴리오 입니다.
            </H1>
            <Text>
              React 중심으로 웹 개발이 가능한 프론트엔드 개발자 최정석입니다.
              직무로 개발자를 선택하기 전에 대외활동에서 개발자와 대화할 기회가
              있었습니다.{" "}
              <Highlight>
                새로운 것을 배우는 걸 좋아하기 때문에 개발자는 계속 변화하는
                상황에서 새로운 것을 공부해야 한다는 것에 매력을 느꼈습니다.
              </Highlight>{" "}
              그래서 개발자 학습을 가볍게 시작해 보았고 작성하는 코드에 따라
              화면이 변화하는 것에 매력을 느껴 프론트엔드 학습에 집중했습니다.
              이후 학습하고 있는{" "}
              <Highlight>
                프론트엔드 개발을 직업으로 하기 위해 고민을 했고 24주 과정 웹
                개발 부트캠프인 코드 스테이츠를 선택하고 수료했습니다.
              </Highlight>{" "}
              수료 이후 부트캠프에서 다뤘던 프로젝트에 반응형을 구현하고
              있습니다. 그리고 제가 프로젝트 기간 중 경험해보지 못한 NextJS를
              학습하고 있습니다.
            </Text>
          </TextContainer>
        </MyIntroContainer>
        <Carousel />
      </MainCotainer>
    </div>
  );
}
