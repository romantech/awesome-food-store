import FillLayoutImage from '@/components/FillLayoutImage';
import { useRouter } from 'next/router';
import { useContextualRouting } from 'next-use-contextual-routing';
import { Modal } from 'antd';
import ModalContent from '@/components/ModalContent';
import Head from 'next/head';
import useCurrentSize from '@/hooks/useCurrentSize';
import { useEffect } from 'react';
import { bodyScrollLock } from '@/lib/utils';

export default function Stores({ stores }) {
  const router = useRouter();
  const { storeIdx } = router.query;
  const { makeContextualHref, returnHref } = useContextualRouting();
  const title = stores[storeIdx]?.name.toUpperCase() || 'Stores';
  const { width } = useCurrentSize();

  useEffect(() => {
    // 모달창이 열려있을 땐 컨테이너(body 등) scroll 잠금
    if (storeIdx) {
      bodyScrollLock('.ant-layout').enable();
    } else {
      bodyScrollLock('.ant-layout').disable();
    }
  }, [storeIdx]);

  return (
    <section className="flex max-w-[950px] flex-wrap justify-center gap-4">
      <Head>
        <title>{`AFS | ${title}`}</title>
      </Head>
      {stores.map((store, idx) => (
        <FillLayoutImage
          callback={() =>
            router.push(
              makeContextualHref({ storeIdx: idx }),
              `/stores/${store.id}`,
              { shallow: true }, // shallow routing(데이터 fetching 없이 URL 변경)
            )
          }
          classNames={
            'w-[42vw] h-[42vw] max-w-[180px] max-h-[180px] xl:max-w-[220px] xl:max-h-[220px] cursor-pointer'
          }
          roundLevel={'rounded-md'}
          priority={true}
          key={store.name}
          alt={store.name}
          src={store.image}
        />
      ))}
      <Modal
        visible={!!storeIdx}
        bodyStyle={{ height: width <= 449 ? '100vh' : '80vh' }}
        centered
        width={width <= 449 ? width : '90%'}
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
  const url = `${process.env.HOST}/stores`;
  const res = await fetch(url);

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
