import React, { useEffect, useState } from 'react';
import Container from '@/components/Container';
import { Button, Result } from 'antd';
import { useRouter } from 'next/router';

export default function Custom404() {
  const [seconds, setSeconds] = useState(5);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => setSeconds(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (seconds === 0) router.replace('/');
  }, [router, seconds]);

  return (
    <Container>
      <Result
        status="404"
        title="페이지를 찾을 수 없어요!"
        subTitle={`${seconds}초 뒤 홈 화면으로 이동합니다`}
        extra={
          <Button type="primary" onClick={() => router.replace('/')}>
            Back Home
          </Button>
        }
      />
    </Container>
  );
}
