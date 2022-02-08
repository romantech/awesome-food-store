import React from 'react';

export function useMounted() {
  const [isMounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);

  return isMounted;
}
