import Link from "next/link";
import styled from "styled-components";

const HeaderContainer = styled.div`
  height: 5rem;
  width: 100%;
  padding: 30px;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #edf2ff;
  color: #748ffc;
  position: fixed;
`;

const LinkContainer = styled.div`
  width: 10rem;
  display: flex;
  justify-content: space-between;
`;

function Header() {
  return (
    <HeaderContainer>
      <h1>포트폴리오의 정석</h1>
      <LinkContainer>
        <Link href="/">About Me</Link>
        <Link href="/projects">Projects</Link>
      </LinkContainer>
    </HeaderContainer>
  );
}

export default Header;
