import React from 'react';
import { Spin } from 'antd';

function Loading({ loading }) {
  return (
    <div
      className={
        loading
          ? 'absolute w-full h-[calc(100vh-70px)] z-20 flex items-center justify-center'
          : 'hidden'
      }
    >
      <Spin size="large" />
    </div>
  );
}

export default Loading;
