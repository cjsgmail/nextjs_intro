import Header from "../../components/Header";
import styled from "styled-components";
import Project from "../../components/Project";

const ProjectsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 5rem;
`;

function PortfolioPage() {
  return (
    <div>
      <Header />
      <ProjectsContainer>
        <Project />
      </ProjectsContainer>
    </div>
  );
}

export default PortfolioPage;
