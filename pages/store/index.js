import Container from '@/components/Container';
import StoreGrid from '@/components/StoreGrid';
import { useRouter } from 'next/router';
import { useContextualRouting } from 'next-use-contextual-routing';
import { Modal } from 'antd';
import ModalContent from '@/components/ModalContent';

export default function Store({ stores }) {
  const router = useRouter();
  const { storeIdx } = router.query;
  const { makeContextualHref, returnHref } = useContextualRouting();

  return (
    <Container title="Store">
      <section className="max-w-[1024px] flex flex-wrap justify-center gap-4 overflow-auto p-4">
        {stores.map((store, idx) => (
          <StoreGrid
            callback={() => {
              router.push(
                makeContextualHref({ storeIdx: idx }),
                `/store/${store.id}`,
                { shallow: true }, // shallow routing(데이터 fetching 없이 URL 변경)
              );
            }}
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
    </Container>
  );
}

// 빌드 시 데이터 GET
export async function getStaticProps({ params }) {
  const res = await fetch(`${process.env.HOST}/stores`);
  const stores = await res.json();
  return { props: { stores } };
}
