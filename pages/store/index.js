import { Modal } from 'antd';
import Container from '@/components/Container';
import StoreGrid from '@/components/StoreGrid';

export default function Store({ stores }) {
  const showModal = idx => {
    Modal.info({
      closable: true,
      maskClosable: true,
      title: 'This is a notification message',
      content: (
        <div>
          <p>{stores[idx].name}</p>
          <p>some messages...some messages...</p>
        </div>
      ),
    });
  };

  return (
    <Container title="Store">
      <section className="max-w-[1024px] flex flex-wrap justify-center gap-4 overflow-auto p-4">
        {stores?.map((food, idx) => (
          <StoreGrid
            callback={() => showModal(idx)}
            key={food.name}
            alt={food.name}
            src={food.image}
          />
        ))}
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
