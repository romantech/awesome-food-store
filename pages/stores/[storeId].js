import { Modal } from 'antd';
import { useRouter } from 'next/router';
import ModalContent from '@/components/ModalContent';
import { useEffect } from 'react';
import { useMounted } from '@/hooks/useMount';
import Head from 'next/head';

export default function StoreInfo({ store }) {
  const router = useRouter();
  const isMounted = useMounted();
  // Expected server HTML to contain a matching <div> 오류 대응
  // reference : https://github.com/vercel/next.js/discussions/15021

  useEffect(() => {
    router.prefetch('/stores'); // /stores 페이지 미리 로드
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>{`AFS | ${store.name.toUpperCase()}`}</title>
      </Head>
      {isMounted && (
        <Modal
          visible={true}
          bodyStyle={{ height: '80vh' }}
          centered
          width="90%"
          footer={null}
          onCancel={() => router.push('/stores')}
        >
          <ModalContent store={store} />
        </Modal>
      )}
    </>
  );
}

// 동적 경로를 사용하는 페이지에 사용(페이지가 경로가 외부 데이터에 의존하는 경우)
// Next.js는 몇개의 페이지를 생성해야 하는지, 어떤 페이지 id가 유효한지 알 수 없음
// 따라서 getStaticPaths 를 통해 빌드 타임 때 정적으로 렌더링할 경로를 설정해줘야 함
export async function getStaticPaths() {
  const url = `${process.env.HOST}/stores`;
  const res = await fetch(url);
  const stores = await res.json();
  const storePaths = stores.map(({ id }) => ({
    params: { storeId: String(id), asPath: '/stores' },
  }));

  return {
    paths: storePaths,
    fallback: false, // 매칭하는 params 없으면 404 페이지 표시
  };
}

// 빌드 타임 때 데이터 GET - SG(Static Generation) 방식
// 한번 빌드되면 데이터는 CDN 에 저장되며, 페이지 요청을 다시 받아도 데이터 재사용
// 마케팅 / 블로그 페이지 등 데이터가 자주 바뀌지 않는 페이지에 적절
// 반면 getServerSideProps(SSR) 는 페이지를 요청할 때마다 데이터 GET
// reference via https://nextjs.org/learn/basics/data-fetching/two-forms
export async function getStaticProps({ params: { storeId } }) {
  const url = `${process.env.HOST}/stores/${storeId}`;
  const res = await fetch(url);

  if (res.status !== 200) {
    return {
      redirect: {
        destination: '/about', // data fetch 실패하면 리다이렉트
      },
    };
  }

  const store = await res.json();

  if (!store) {
    return {
      notFound: true, // 데이터 없으면 404 페이지 표시
    };
  }
  return { props: { store } };
}
