export function* textGenerator(sentence) {
  let text = '';

  const sentenceAsCharArray = sentence.split('');

  for (const letter of sentenceAsCharArray) {
    text += letter;
    yield text;
  }
}
