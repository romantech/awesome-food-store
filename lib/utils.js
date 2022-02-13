export function calculateBackspaces(from, to) {
  // Hello World (from)
  // Hello Winter (to)
  // ------------
  // 1234567 --> 7번 위치(인덱스 6 + 1)까지 동일
  // ------------
  // 11(Hello World 길이) - 7 = 4 -> Hello World 에서 Backspace 4번
  // ------------

  let charsInCommonFromStart = 0;

  for (let i = 0; i < from.length; i++) {
    const fromChar = from[i];
    const toChar = to[i];

    if (toChar === fromChar) {
      charsInCommonFromStart += 1;
    } else {
      break;
    }
  }

  return from.length - charsInCommonFromStart;
}

export function* textGenerator(sentences, loop) {
  // sentences 는 ['Hello World', 'Hello Winter'] 라고 가정(원래 문장, 바꿀 문장)
  let text = '';

  while (true) {
    for (const sentence of sentences) {
      // (1) Backspace 횟수 계산
      const backspaces = calculateBackspaces(text, sentence);
      // (첫번째 문장) 0
      // (두번째 문장) 4

      // (2) 계산한 Backspace 횟수만큼 뒤에서 부터 글자 삭제
      // 첫번째 문장 혹은 backspaces 가 0이면 아래 반복문은 건너뜀
      for (let i = 0; i < backspaces; i++) {
        text = text.slice(0, -1);
        yield text;
        // 2번째 문장부터...
        // 'Hello Worl' -> 'Hello Wor' -> 'Hello Wo' -> 'Hello W'
      }

      // (3) 바꿀 문장 입력
      const missingChars = sentence.slice(text.length);
      // (첫번째 문장) 'Hello World'.slice(0) -> 'Hello World'
      // (두번째 문장) 'Hello Winter'.slice(7) -> 'inter'
      const missingCharsArray = missingChars.split('');
      // (첫번째 문장) ['H','e','l','l','o',' ','W','o','r','l','d']
      // (두번째 문장) ['i', 'n', 't', 'e', 'r']

      for (const missingChar of missingCharsArray) {
        text += missingChar;
        yield text;
        // (첫번째 문장) 'H' -> 'He' -> 'Hel' -> 'Hell' -> 'Hello' -> ...
        // (두번째 문장) 'Hello Wi' -> 'Hello Win' -> 'Hello Wint' -> ...
      }

      // (4) 다음 문장으로 넘어갈때 딜레이 추가
      const delay = 15;
      for (let i = 0; i < delay; i++) {
        yield text; // 설정한 타이핑 속도가 100ms라면 100 * 15 = 1500(1.5초)간 딜레이
        // (첫번째 문장) 'Hello World' 15번 렌더
        // (두번째 문장) 'Hello Winter' 15번 렌더
      }
    }

    if (loop === false) {
      return;
    }
  }
}
