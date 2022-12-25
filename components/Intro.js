import styled from "styled-components";
import { GitLink, H2 } from "../pages";

const AboutContent = styled.div`
  border-right: 3px solid #edf2ff;
  padding: 0 20px;
`;

export default function Intro() {
  return (
    <>
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
    </>
  );
}
