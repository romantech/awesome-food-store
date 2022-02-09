import { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

// (Ant Design) useLayoutEffect does nothing on the server 오류 해결
// SSR 일 때 useLayoutEffect 대신 useEffect 사용
// reference: https://stackoverflow.com/questions/58070996
if (typeof document === 'undefined') {
  React.useLayoutEffect = React.useEffect;
}

// _document.js 역할 : HTMl 문서 전체 설정(meta 태그 등) / 전체 페이지에 적용됨
// _document.js 에선 React Lifecycle Hook, Data Fetching 사용 불가
// _document.js 의 콘솔은 서버에서만 볼 수 있음

export default function Document() {
  return (
    <Html>
      <Head>
        <meta content="white" name="theme-color" />
        <meta name="theme-color" content="#28231c" />
        <meta name="description" content="NextJS 스터디 미니 프로젝트" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Awesome Food Store" />
        <meta
          property="og:image"
          content="https://user-images.githubusercontent.com/8604840/153211738-bbc70e03-c7b6-47e8-86ed-5495608f7d89.png"
        />
        <meta property="og:description" content="NextJS 스터디 미니 프로젝트" />
        <meta
          property="og:url"
          content="https://awesome-food-store.vercel.app"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body className="font-sans">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
