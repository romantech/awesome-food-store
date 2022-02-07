import { Head, Html, Main, NextScript } from 'next/document';

// _document.js 역할 : HTMl 문서 전체 설정(meta 태그 등) / 전체 페이지에 적용됨
// _document.js 에선 리액트 Lifecycle Hook, Data Fetching 사용 불가
// _document.js 의 콘솔은 서버에서만 볼 수 있음

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="Awesome Food Store" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Awesome Food Store" />
        <meta property="og:description" content="Awesome Food Store" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
