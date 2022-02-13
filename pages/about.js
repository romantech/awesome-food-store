import useTypeWriter from '@/hooks/useTypeWriter';

export default function About() {
  const typingText = useTypeWriter({
    content: [
      '약 4일간(리팩토링 제외) 작업한 NextJS 미니 프로젝트입니다',
      'NextJS를 이용해 만든 커먼그라운드 맛집 사이트입니다 ⚡️',
    ],
    hasBlink: true,
    loop: true,
  });

  return (
    <section className="px-2 text-primary-bg-footer flex flex-col items-center">
      <h1 className="font-heading text-primary-bg-footer text-3xl lg:text-4xl font-extrabold">
        DIVE INTO <span className="bg-primary-red text-white">NextJS</span>
      </h1>
      <h2 className="text-primary-bg-footer text-xl font-bold mb-10 h-7 flex-1">
        {typingText}
      </h2>
      <section className="flex flex-col lg:flex-row gap-4 lg:gap-16 text-base">
        <div>
          <h3 className="font-heading text-primary-bg-footer text-lg font-semibold border-primary-red border-b-4 py-2 px-1 w-fit">
            구현 내역
          </h3>
          <ul className="list-disc ml-4">
            <li>Static Generation (Pre-rendering)</li>
            <li>Dynamic / Shallow Routing</li>
            <li>Dynamic Title</li>
            <li>
              Route as Modal (Instagram style modal routing)
              <ul className="list-disc ml-4">
                <li>모달 창에 동적 라우팅 적용</li>
                <li>사이트 첫 진입이 모달 경로 일 때도 동적 라우팅 적용</li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-heading text-primary-bg-footer text-lg font-semibold border-primary-red border-b-4 py-2 px-1 w-fit">
            사용 패키지
          </h3>
          <ul className="list-disc ml-4">
            <li>React + Next.js</li>
            <li>ESLint + Prettier</li>
            <li>Tailwind CSS + ClassNames</li>
            <li>Ant Design</li>
            <li>JSON Server (fake REST API)</li>
            <li>Next Use Contextual Routing</li>
          </ul>
        </div>
      </section>
    </section>
  );
}
