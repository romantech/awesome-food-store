export default function About() {
  return (
    <section className="text-primary-bg-footer overflow-y-auto px-6 py-12">
      <h1 className="text-primary-bg-footer text-4xl font-extrabold">
        Next.js 미니 프로젝트
      </h1>
      <h2 className="text-primary-bg-footer text-xl font-bold mb-12">
        Next.js를 이용해 정적 생성 페이지를 구현한 맛집 사이트입니다
      </h2>
      <section className="flex flex-col lg:flex-row gap-8 lg:gap-16 text-base">
        <div>
          <h3 className="text-primary-bg-footer text-lg font-semibold">
            구현 내역
          </h3>
          <ul className="list-disc ml-4">
            <li>Static Generation (Pre-rendering)</li>
            <li>Dynamic / Shallow Routing</li>
            <li>Dynamic Title</li>
            <li>
              Route as Modal 구현 (Instagram style modal routing)
              <ul className="list-disc ml-4">
                <li>모달 창에 동적 라우팅 적용</li>
                <li>사이트 첫 진입이 모달 창 경로 일 때도 동적 라우팅 적용</li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-primary-bg-footer text-lg font-semibold">
            사용 패키지
          </h3>
          <ul className="list-disc ml-4">
            <li>React + Next.js</li>
            <li>Tailwind CSS + ClassNames</li>
            <li>Ant Design</li>
            <li>JSON Server(fake REST API)</li>
            <li>ESLint + Prettier</li>
          </ul>
        </div>
      </section>
    </section>
  );
}
