import React, { useEffect, useState } from 'react';
import { Button, Result } from 'antd';
import { useRouter } from 'next/router';

export default function Custom404() {
  const [seconds, setSeconds] = useState(100);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => setSeconds(sec => sec - 1), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (seconds === 0) router.replace('/about'); // 홈 컴포넌트 작성안해서 /about 으로 이동
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds]);

  return (
    <Result
      status="404"
      title="페이지를 찾을 수 없어요!"
      subTitle={`${seconds}초 뒤 홈 화면으로 이동합니다`}
      extra={
        // 홈 컴포넌트 작성안해서 /about 으로 이동
        <Button type="primary" onClick={() => router.replace('/about')}>
          Back Home
        </Button>
      }
    />
  );
}
