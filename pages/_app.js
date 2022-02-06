import 'styles/globals.css';
// import 'antd/dist/antd.css';
require('styles/variables.less');

// _app.js 어플리케이션의 엔트리
// Component : 요청한 페이지 ex) '/' GET 요청 -> /pages/index.js
// pageProps : getInitialProps를 통해 받은 props

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
