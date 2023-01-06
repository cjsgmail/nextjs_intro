# NextJS Intro

### CSR과 SSR

- SSR 이란?
  - Server Side Rendering의 약자.
  - 말 그대로 서버쪽에서 렌더링 준비를 끝마친 상태로 클라이언트에 전달하는 방식이다.
  - 웹의 최초로딩이 CSR보다 빠르다
  - 네트워크가 느릴 때 😓 (CSR은 한번에 모든 것을 불러오지만 SSR은 각 페이지마다 나눠불러오기 때문)
  - SEO(serach engine optimization : 검색 엔진 최적화)가 필요할 때.
  - 메인 스크립트가 크고 로딩이 매우 느릴 때
  - CSR은 메인스크립트가 로딩이 끝나면 API로 데이터 요청을 보낸다. 하지만 SSR은 한번의 요청에 아예 렌더가 가능한 페이지가 돌아온다.

웹 사이트가 상호작용이 별로 없을 때.

- CSR 이란?
  - Client Side Rendering의 약자.
  - 말 그대로 SSR과 달리 렌더링이 클라이언트 쪽에서 일어난다.
  - 즉, 서버는 요청을 받으면 클라이언트에 HTML과 JS를 보내준다. 클라이언트는 그것을 받아 렌더링을 시작한다.
  - 네트워크가 빠를 때
  - 서버의 성능이 좋지 않을 때
  - 사용자에게 보여줘야 하는 데이터의 양이 많을 때. (로딩창을 띄울 수 있는 장점이 있다.)
  - 메인 스크립트가 가벼울 때
  - 웹 어플리케이션에 사용자와 상호작용할 것들이 많을 때. (아예 렌더링 되지 않아서 사용자의 행동을 막는 것이 경험에 오히려 유리함.)

### 리액트의 단점 SEO(검색 엔진 최적화)를 보완하는 Next.JS

- Next.JS의 작동원리

  1. 초기에 사용자가 서버에 페이지 접속을 요청하면 SSR방식으로 렌더링 될 HTML을 보냄.
  2. 브라우저에서 JavaScript를 다운로드하고 React를 실행함.
  3. 사용자, 페이지가 서로 상호작용하여 다른 페이지로 이동할 뗀, SSR이 아닌 CSR방식으로 브라우저에서 처리함.

- SSR은 검색 엔진 최적화(SEO)에 중요한 역할을 한다.
  - CSR로 구현하면 Client측에서 페이지 구성을 하기 전까지 HTML이 비어있다.
  - SSR로 구현하면 Server측에서 화면을 그려서 보내주는 방식이기 때문에 HTML안에 이미 컨텐츠를 포함한다.
- 따라서 Next.JS는 SSR과 CSR의 장점을 모두 가져온 프레임워크이다.

### Next.js 시작하기

- npx create-next-app

### Next.js 페이지 라우팅

- pages 폴더의 index.js => my-domain.com/
- pages 폴더의 about.js => my-domain.com/about
- pages 폴더의 하위 폴더 portfolio의 index.js => my-domain.com/portfolio
- portfolio 폴더의 [id].js => my-domain.com/portfolio/id(동적으로 변하는 id값) : 동적 페이지 라우팅
- 동적 세그먼트 값에 접근하는 방법 => useRouter 임포트, route.pathname, route.query

### 404에러 페이지

- pages 폴더 하위에 404.js 생성
- 나만의 커스텀 404 페이지 만들기

### Next.js 에서 styled-comopnents 사용하기

- 자바스크립트 코드가 적용이 되지 않은 페이지가 미리 렌더링되기 때문에 CSS-in-JS로 스타일링을 하면 스타일이 적용되지 않은 html 코드가 먼저 렌더링되는 문제가 발생하게 된다.
- babel 설정과 \_document 설정
- 레퍼런스 : https://taenami.tistory.com/69

### Next.js 에서 데이터 fetching

- 빌드 시 밀 데이터를 한번 fetching 하는 방법

```js
export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
```

- 데이터 변경이 있을 때마다 fetching 하는 방법

```js
export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
```

- 이미지를 도메인에서 받아와 사용할 때 next.config.js

```js
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["s3.us-west-2.amazonaws.com"],
  },
};
```
