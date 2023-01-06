import Image from "next/image";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faScrewdriverWrench,
  faCodeBranch,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { GitLink } from "../pages";

const ProjectCardContainer = styled.div`
  width: 100%;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectCard = styled.div`
  height: 410px;
  width: 1000px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 20px;
  background-color: #91a7ff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  transition: all 0.2s linear;
  &:hover {
    transform: scale(1.03);
  }
  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  height: 300px;
  width: 400px;
  border-radius: 20px;
  overflow: hidden;
`;

const ProjectIntroContainer = styled.div`
  display: flex;
  width: 100%;
`;

const TextContainer = styled.div`
  margin-left: 20px;
`;

const Title = styled.h1`
  color: white;
`;

const Intro = styled.div`
  color: white;
  font-size: 16px;
`;

const TagContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Tag = styled.div`
  padding: 3px;
  margin-left: 5px;
  border-radius: 15px;
  color: white;
  background-color: ${(props) => props.color};
`;

const PageLink = styled.a`
  color: white;
  margin-left: 5px;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-left: 5px;
`;

export default function Project({ projectsTitle, coverImage, tags }) {
  const dailyClubTags = tags[1].multi_select;
  const portfolioTags = tags[0].multi_select;
  const catMbtiTags = tags[2].multi_select;
  console.log();

  return (
    <ProjectCardContainer>
      {/* 데일리 클럽 */}
      <ProjectCard>
        <ProjectIntroContainer>
          <ImageContainer>
            <Image
              src={coverImage[1]}
              height={300}
              width={400}
              alt="데일리 클럽 이미지"
              priority={true}
            />
          </ImageContainer>
          <TextContainer>
            <Title>{projectsTitle[1]}</Title>
            <Intro>
              - 프론트엔드 팀장으로 프론트엔드 진행상황과 일정 등을 전체 팀장 및
              백엔드 팀원과 소통 <br />- form data와 base64를 이용한 전반적인
              이미지 처리 및 이미지 미리보기 구현 <br />- axios를 이용한
              프로그램 등록, 조회 및 유저 정보 수정 api 통신 <br />- 사용자의
              프로그램 신청, 삭제, 취소 요청 확인에 관한 모달 구현 <br />
              (ex: 신청을 완료 하시겠습니까?) <br />- 로그인 유저 정보에 의한
              페이지 분기 및 그에 따른 상황 유효성 체크 <br />- 페이지 네이션
              구현 <br />- Hero 페이지 (서비스 소개 페이지), 프로그램 등록
              페이지, 마이페이지 목업 <br />- 반응형 웹 구현 <br />
            </Intro>
          </TextContainer>
        </ProjectIntroContainer>
        <TagContainer>
          <FontAwesomeIcon icon={faScrewdriverWrench} />
          {dailyClubTags.map((el) => {
            return (
              <Tag key={el.id} color={el.color}>
                {el.name}
              </Tag>
            );
          })}
        </TagContainer>
        <TagContainer>
          <FontAwesomeIcon icon={faLink} />
          <PageLink href="http://dailyclub.site/">
            배포링크 {`(AWS 프리티어 4월 만료로 4월까지 접속가능)`}
          </PageLink>
          <Icon icon={faCodeBranch} />
          <PageLink href="https://github.com/cjsgmail/dailyclub">
            깃허브
          </PageLink>
        </TagContainer>
      </ProjectCard>

      {/* 포트폴리오 */}
      <ProjectCard>
        <ProjectIntroContainer>
          <ImageContainer>
            <Image
              src={coverImage[0]}
              height={300}
              width={400}
              alt="포트폴리오 이미지"
              priority={true}
            />
          </ImageContainer>
          <TextContainer>
            <Title>{projectsTitle[0]}</Title>
            <Intro>
              - Next.js를 학습하며 SSR과 CSR의 차이 이해 <br />- Next.js의
              페이지 라우팅 학습 <br />- Notion API를 이용하여 Next.js의 데이터
              fetching을 학습 <br />- 캐러셀 구현
            </Intro>
          </TextContainer>
        </ProjectIntroContainer>
        <TagContainer>
          <FontAwesomeIcon icon={faScrewdriverWrench} />
          {portfolioTags.map((el) => {
            return (
              <Tag key={el.id} color={el.color}>
                {el.name}
              </Tag>
            );
          })}
        </TagContainer>
        <TagContainer>
          <FontAwesomeIcon icon={faLink} />
          <PageLink href="https://jeongseok-potfolio.vercel.app/">
            배포링크
          </PageLink>
          <Icon icon={faCodeBranch} />
          <PageLink href="https://github.com/cjsgmail/nextjs_intro">
            깃허브
          </PageLink>
        </TagContainer>
      </ProjectCard>

      {/* 고양이MBTI */}
      <ProjectCard>
        <ProjectIntroContainer>
          <ImageContainer>
            <Image
              src={coverImage[2]}
              height={300}
              width={400}
              alt="고양이mbti 이미지"
              priority={true}
            />
          </ImageContainer>
          <TextContainer>
            <Title>{projectsTitle[2]}</Title>
            <Intro>
              - React 학습 <br />- Styled-Components 학습 <br />
              - 자바스크립트를 이용한 mbti검사 로직 구현 <br />- vercel을
              이용하여 배포
            </Intro>
          </TextContainer>
        </ProjectIntroContainer>
        <TagContainer>
          <FontAwesomeIcon icon={faScrewdriverWrench} />
          {catMbtiTags.map((el) => {
            return (
              <Tag key={el.id} color={el.color}>
                {el.name}
              </Tag>
            );
          })}
        </TagContainer>
        <TagContainer>
          <FontAwesomeIcon icon={faLink} />
          <PageLink href="https://catmbti-two.vercel.app/">배포링크</PageLink>
          <Icon icon={faCodeBranch} />
          <PageLink href="https://github.com/cjsgmail/catmbti">깃허브</PageLink>
        </TagContainer>
      </ProjectCard>
    </ProjectCardContainer>
  );
}
