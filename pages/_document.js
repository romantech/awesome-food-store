import { Head, Html, Main, NextScript } from 'next/document';

// meta 태그 등을 정의하는 컴포넌트. 전체 페이지에 적용됨
export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="Purple-IO 코딩 테스트" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Purple-IO" />
        <meta property="og:description" content="Purple-IO 코딩 테스트" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
