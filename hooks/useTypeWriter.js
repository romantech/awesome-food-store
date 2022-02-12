/* eslint-disable react-hooks/exhaustive-deps */
// reference : https://www.maartenhus.nl/blog/typewriter-effect/
import { useEffect, useState } from 'react';
import { textGenerator } from '@/lib/utils';

export default function useTypeWriter({
  content,
  sec = 100,
  hasBlink = false,
}) {
  const [displayedContent, setDisplayedContent] = useState('');

  useEffect(() => {
    const generator = textGenerator(content);
    const interval = setInterval(() => {
      const { value, done } = generator.next();
      if (done) {
        clearInterval(interval);
      } else {
        setDisplayedContent(value);
      }
    }, sec);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {displayedContent}
      {hasBlink && <span className="blink" />}
    </>
  );
}
