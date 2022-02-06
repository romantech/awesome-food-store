import { Modal } from 'antd';
import Container from 'components/Container';

function Store({ stores }) {
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
      <ul>
        {stores?.map((food, idx) => (
          <li className="w-fit" key={food.id} onClick={() => showModal(idx)}>
            {food.name}
          </li>
        ))}
      </ul>
    </Container>
  );
}

// 빌드 시 데이터 GET
export async function getStaticProps() {
  const res = await fetch(`${process.env.HOST}/stores`);
  const stores = await res.json();
  return { props: { stores } };
}

export default Store;
