import FillLayoutImage from '@/components/FillLayoutImage';
import { useRouter } from 'next/router';
import { useContextualRouting } from 'next-use-contextual-routing';
import { Modal } from 'antd';
import ModalContent from '@/components/ModalContent';
import Head from 'next/head';

export default function Stores({ stores }) {
  const router = useRouter();
  const { storeIdx } = router.query;
  const { makeContextualHref, returnHref } = useContextualRouting();
  const title = stores[storeIdx]?.name.toUpperCase() || 'Stores';

  return (
    <section className="max-w-[1024px] flex flex-wrap justify-center gap-4 overflow-auto p-4">
      <Head>
        <title>{`AFS | ${title}`}</title>
      </Head>
      {stores.map((store, idx) => (
        <FillLayoutImage
          callback={() => {
            router.push(
              makeContextualHref({ storeIdx: idx }),
              `/stores/${store.id}`,
              { shallow: true }, // shallow routing(데이터 fetching 없이 URL 변경)
            );
          }}
          classNames={'w-44 h-44 lg:w-56 lg:h-56 cursor-pointer'}
          roundLevel={'rounded-md'}
          priority={true}
          key={store.name}
          alt={store.name}
          src={store.image}
        />
      ))}
      <Modal
        visible={!!router.query.storeIdx}
        bodyStyle={{ height: '80vh' }}
        width="80vw"
        footer={null}
        onCancel={() => router.push(returnHref)}
      >
        <ModalContent store={stores[storeIdx]} />
      </Modal>
    </section>
  );
}

// 빌드 시 데이터 GET
export async function getStaticProps({ params }) {
  const res = await fetch(`${process.env.HOST}/stores`);

  if (res.status !== 200) {
    return {
      redirect: {
        destination: '/about', // data fetch 실패하면 리다이렉트
      },
    };
  }

  const stores = await res.json();
  if (stores.length === 0) {
    return {
      notFound: true, // 데이터 없으면 404 페이지 표시
    };
  }
  return { props: { stores }, revalidate: 60 };
  // revalidate 옵션으로 re-generate 페이지 타임아웃(초) 설정 가능 (production 에서만 가능)
  // 타임아웃(초) 후에 요청 받으면 새로운 데이터로 페이지 re-generate
  // reference: https://reactions-demo.vercel.app/
}
