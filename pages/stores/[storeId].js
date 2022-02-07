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
          width="80vw"
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
// 빌드 타임 때 정적으로 렌더링할 경로 설정
export async function getStaticPaths() {
  const res = await fetch(`${process.env.HOST}/stores`);
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
// 한번 빌드되면 데이터는 CDN 에 저장되며, 페이지를 다시 요청하면 데이터 재사용
// 마케팅 / 블로그 페이지 등 데이터가 자주 바뀌지 않는 페이지에 적절
// 반면 getServerSideProps(SSR) 는 페이지를 요청할 때마다 데이터 GET
// reference via https://nextjs.org/learn/basics/data-fetching/two-forms
export async function getStaticProps({ params: { storeId } }) {
  const res = await fetch(`${process.env.HOST}/stores/${storeId}`);
  const store = await res.json();
  return { props: { store } };
}
