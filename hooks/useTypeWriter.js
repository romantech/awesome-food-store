/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

export default function useTypeWriter({ content, sec = 100 }) {
  const [displayedContent, setDisplayedContent] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const animKey = setInterval(() => {
      setIndex(index => {
        if (index >= content.length - 1) {
          clearInterval(animKey);
          return index;
        }
        return index + 1;
      });
    }, sec);
  }, []);

  useEffect(() => {
    setDisplayedContent(displayedContent => displayedContent + content[index]);
  }, [index]);

  return displayedContent;
}
