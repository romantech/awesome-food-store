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
          ? 'absolute top-0 w-full h-full bg-[#0000008a] z-20 flex items-center justify-center'
          : 'hidden'
      }
    >
      <Spin size="large" />
    </div>
  );
}

export default Loading;
