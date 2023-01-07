import styled from "styled-components";
import { H2 } from "../pages";
import { AboutContent } from "./Contact";

export const Introduce = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 70%;
  padding: 20px;
  border-radius: 30px;
  background-color: white;
  color: #364fc7;
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
`;

const Strength = styled.div`
  width: 250px;
`;

export default function Intro() {
  return (
    <>
      <Introduce>
        <H2>Strength</H2>
        <AboutContent>
          <Strength>학습에 대한 두려움이 없고 좋아한다.</Strength>
        </AboutContent>
        <AboutContent>
          <Strength>
            다른 사람과 대화를 통해 인사이트를 넓히는 걸 좋아한다.
          </Strength>
        </AboutContent>
        <AboutContent>
          <Strength>주어진 태스크에 책임감이 강하다.</Strength>
        </AboutContent>
      </Introduce>
    </>
  );
}
