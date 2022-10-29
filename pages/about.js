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
    <section className="flex flex-col items-center px-2 text-primary-bg-footer">
      <h1 className="font-heading text-3xl font-extrabold text-primary-bg-footer lg:text-4xl">
        DIVE INTO <span className="bg-primary-red text-white">NextJS</span>
      </h1>
      <h2 className="mb-10 h-7 flex-1 text-xl font-bold text-primary-bg-footer">
        {typingText}
      </h2>
      <section className="flex flex-col gap-4 text-base lg:flex-row lg:gap-16">
        <div>
          <h3 className="w-fit border-b-4 border-primary-red py-2 px-1 font-heading text-lg font-semibold text-primary-bg-footer">
            구현 내역
          </h3>
          <ul className="ml-4 list-disc">
            <li>Static Generation (Pre-rendering)</li>
            <li>Dynamic / Shallow Routing</li>
            <li>Dynamic Title</li>
            <li>
              Route as Modal (Instagram style modal routing)
              <ul className="ml-4 list-disc">
                <li>모달 창에 동적 라우팅 적용</li>
                <li>사이트 첫 진입이 모달 경로 일 때도 동적 라우팅 적용</li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="w-fit border-b-4 border-primary-red py-2 px-1 font-heading text-lg font-semibold text-primary-bg-footer">
            사용 패키지
          </h3>
          <ul className="ml-4 list-disc">
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
