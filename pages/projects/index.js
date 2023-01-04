import Header from "../../components/Header";
import styled from "styled-components";
import Project from "../../components/Project";
import { TOKEN, DATABASE_ID } from "../../config";

const ProjectsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 5rem;
`;

function PortfolioPage({ projectsTitle }) {
  return (
    <div>
      <Header />
      <ProjectsContainer>
        <Project projectsTitle={projectsTitle} />
      </ProjectsContainer>
    </div>
  );
}

export default PortfolioPage;

export async function getServerSideProps() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-02-22",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({ page_size: 100 }),
  };

  const projects = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  ).then((res) => res.json());

  const projectsTitle = projects.results.map((el) => {
    return el.properties.Name.title[0].plain_text;
  });

  return {
    props: { projectsTitle },
  };
}
