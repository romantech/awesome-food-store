/* eslint-disable react-hooks/exhaustive-deps */
// reference : https://www.maartenhus.nl/blog/typewriter-effect/
import { useEffect, useState } from 'react';
import { textGenerator } from '@/lib/utils';

export default function useTypeWriter({
  content,
  sec = 100,
  hasBlink = false,
  loop = false,
}) {
  const [displayedContent, setDisplayedContent] = useState('');

  useEffect(() => {
    const generator = textGenerator(content, loop);
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
    <span>
      {displayedContent}
      {hasBlink && (
        <span className="ml-1 animate-blink text-2xl font-light">|</span>
      )}
    </span>
  );
}
