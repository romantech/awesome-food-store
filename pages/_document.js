import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
        <title>Purple IO 사전과제</title>
        <meta name="description" content="Purple-IO 코딩 테스트" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Purple-IO" />
        <meta property="og:description" content="Purple-IO 코딩 테스트" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
