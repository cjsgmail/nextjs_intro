import styled from "styled-components";

export default function Project({ projectsTitle }) {
  return (
    <div>
      <div>{projectsTitle[0]}</div>
      <div>{projectsTitle[1]}</div>
      <div>{projectsTitle[2]}</div>
    </div>
  );
}
