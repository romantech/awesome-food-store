import { useRouter } from 'next/router';

function DetailPage() {
  const router = useRouter();
  const { storeId } = router.query;
  return <h1>The Detail Page {storeId}</h1>;
}

export default DetailPage;
