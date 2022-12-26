import styled from "styled-components";

const Introduce = styled.div`
  position: absolute;
  height: 200px;
  width: 1000px;
  color: #364fc7;
  font-size: 20px;
`;

export default function Intro() {
  return (
    <>
      <Introduce>
        React 중심으로 웹 개발이 가능한 프론트엔드 개발자 최정석입니다. 직무로
        개발자를 선택하기 전에 대외활동에서 개발자와 대화할 기회가 있었습니다.
        새로운 것을 배우는 걸 좋아하기 때문에 개발자는 계속 변화하는 상황에서
        새로운 것을 공부해야 한다는 것에 매력을 느꼈습니다. 그래서 개발자 학습을
        가볍게 시작해 보았고 작성하는 코드에 따라 화면이 변화하는 것에 매력을
        느껴 프론트엔드 학습에 집중했습니다. 이후 학습하고 있는 프론트엔드
        개발을 직업으로 하기 위해 고민을 했고 24주 과정 웹 개발 부트캠프인 코드
        스테이츠를 선택하고 수료했습니다.
      </Introduce>
    </>
  );
}
