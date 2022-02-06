import 'styles/globals.css';
// import 'antd/dist/antd.css';
require('styles/variables.less');

// Component 프롭스 : 요청한 페이지 ex) '/' GET 요청 -> /pages/index.js
// pageProps 프롭스 : getInitialProps를 통해 받은 props

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

// 렌더링 순서 via https://kyounghwan01.github.io/blog/React/next/basic/#server-side-lifecycle
// 1. 서버가 GET 요청 수신
// 2. GET 요청에 해당하는 컴포넌트를 pages 폴더에서 찾음
// 3. _app.tsx에 getInitialProps가 있다면 실행
// 4. route에 해당하는 컴포넌트(페이지)에 getInitialProps가 있다면 실행 후 pageProps 받아옴
// 5. 모든 props를 구성하고, app.tsx → 페이지 컴포넌트 순서로 렌더링
// 6. 모든 콘텐츠를 구성하고, _document.tsx를 실행해서 html 형태로 출력
