import { Modal } from 'antd';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useContextualRouting } from 'next-use-contextual-routing';
import { useEffect } from 'react';
import FillLayoutImage from '@/components/FillLayoutImage';
import ModalContent from '@/components/ModalContent';
import db from '@/db.json';
import useCurrentSize from '@/hooks/useCurrentSize';
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
          sizes="(min-width: 1280px) 220px, (min-width: 950px) 180px, 42vw"
          roundLevel={'rounded-md'}
          priority={true}
          key={store.name}
          alt={store.name}
          src={store.image}
        />
      ))}
      <Modal
        open={!!storeIdx}
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
export async function getStaticProps() {
  const { stores } = db;
  if (stores.length === 0) {
    return {
      notFound: true, // 데이터 없으면 404 페이지 표시
    };
  }
  return { props: { stores } };
}
