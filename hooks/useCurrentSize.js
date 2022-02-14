import { useEffect, useState } from 'react';
import { getHeight, getWidth } from '@/lib/utils';

export default function useCurrentSize() {
  // save current window width in the state object
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  useEffect(() => {
    setWindowSize({ width: getWidth(), height: getHeight() });

    // timeoutId for debounce mechanism
    let timeoutId = null;
    const resizeListener = () => {
      // prevent execution of previous setTimeout
      clearTimeout(timeoutId);
      // change width from the state object after 150 milliseconds
      timeoutId = setTimeout(
        () =>
          setWindowSize({
            width: getWidth(),
            height: getHeight(),
          }),
        150,
      );
    };

    // set resize listener
    window.addEventListener('resize', resizeListener);

    // clean up function, remove resize listener
    return () => window.removeEventListener('resize', resizeListener);
  }, []);

  return windowSize;
}
