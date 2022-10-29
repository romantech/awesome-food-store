import { useEffect, useState } from 'react';
import { Spin } from 'antd';

function Loading({ loading, delay = 0 }) {
  const [delayLoading, setDelayLoading] = useState(false);

  useEffect(() => {
    // 로딩 깜박임 방지를 위해 300ms 이후에만 로딩 화면 표시
    const timer = setTimeout(() => setDelayLoading(loading), delay);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    <div
      className={
        delayLoading
          ? 'absolute top-0 z-20 flex h-full w-full items-center justify-center bg-[#0000008a]'
          : 'hidden'
      }
    >
      <Spin size="large" />
    </div>
  );
}

export default Loading;
