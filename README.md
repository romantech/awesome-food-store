# 커먼그라운드 맛집 모음

![awesome-food-store](https://user-images.githubusercontent.com/8604840/153662986-e44c4d6a-6fe0-41a2-8848-187365048db3.gif)

> _NextJS를 이용해 만든 건대 커먼그라운드 맛집 미니 프로젝트입니다_

- Live Demo : [awesome-food-store.vercel.app](https://awesome-food-store.vercel.app)
- 작업 기간 : 4일 (리팩토링 기간 제외)

# 사용 스택 / 라이브러리

- React + NextJS
- Tailwind CSS + ClassNames
- Ant Design
- JSON 데이터 (`db.json`)
- Next Use Contextual Routing

# 프로젝트 특징

- Route as Modal (Instagram style modal routing)
  - 모달 창에 동적 라우팅 적용
  - 사이트 첫 진입이 모달 경로 일 때도 동적 라우팅 적용
- Static Generation (Pre-rendering)
- Dynamic/Shallow Routing, Dynamic Title
- Loading spinner on page transition
- Typewriter effect using Generator API on the About page

# 프로젝트 목적

- NextJS 스터디 / 실습
- 인스타그램 스타일 모달 라우팅 구현

# 로컬 실행

```bash
pnpm install
pnpm dev
```

`http://localhost:3000/stores`에서 맛집 목록을 확인합니다. 개발과 배포 모두 저장소의 `db.json`을 사용하므로 별도 데이터 서버나 `DB_URL` 환경 변수가 필요하지 않습니다.

# 배포

Vercel에서 `pnpm build`로 맛집 목록과 상세 페이지를 정적으로 생성합니다. 맛집 정보를 바꾸려면 `db.json`을 수정한 뒤 다시 배포합니다.

`pnpm db`는 JSON Server 학습용으로 남겨 둔 선택 명령이며, 사이트 실행에는 필요하지 않습니다.
