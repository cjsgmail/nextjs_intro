import styled from "styled-components";

const Stacks = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 200px;
  width: 70%;
  padding: 20px;
  border-radius: 30px;
  background-color: white;
  color: black;
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
`;

const StackLogo = styled.div`
  margin-top: 5px;
`;

const StackContainer = styled.div`
  padding: 0 20px;
  height: 80%;
  display: flex;
  flex-direction: column;
  color: black;
`;

export default function Stack() {
  return (
    <Stacks>
      <StackContainer>
        <h2>Language</h2>
        <StackLogo>
          <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white" />
        </StackLogo>
        <StackLogo>
          <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white" />
        </StackLogo>
        <StackLogo>
          <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white" />
        </StackLogo>
        <StackLogo>
          <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white" />
        </StackLogo>
      </StackContainer>
      <StackContainer>
        <h2>Framework & Library</h2>
        <StackLogo>
          <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white" />
        </StackLogo>
        <StackLogo>
          <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=Next.js&logoColor=white" />
        </StackLogo>
        <StackLogo>
          <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=flat-square&logo=styled-components&logoColor=white" />
        </StackLogo>
      </StackContainer>
      <StackContainer>
        <h2>Others</h2>
        <StackLogo>
          <img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=Git&logoColor=white" />
        </StackLogo>
        <StackLogo>
          <img src="https://img.shields.io/badge/GitHub-000000?style=flat-square&logo=GitHub&logoColor=white" />
        </StackLogo>
        <StackLogo>
          <img src="https://img.shields.io/badge/Slack-4A154B?style=flat-square&logo=Slack&logoColor=white" />
        </StackLogo>
        <StackLogo>
          <img src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=Figma&logoColor=white" />
        </StackLogo>
      </StackContainer>
    </Stacks>
  );
}
