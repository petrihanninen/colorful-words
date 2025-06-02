import fs from 'fs';
import path from 'path';

const conversionTable = {
  a: 'a',
  b: 'b',
  c: 'c',
  d: 'd',
  e: 'e',
  f: 'f',
  g: '6',
  i: '1',
  o: '0',
  r: '2',
  s: '5',
  t: '7',
}

const isConvertableChar = (c: unknown): c is keyof typeof conversionTable => typeof c === 'string' && c in conversionTable;

const isColorWord = (input: string) => {
  if (input.length !== 6 && input.length !== 3) {
    return false;
  }

  const word = input.toLowerCase();

  for (let i = 0; i < word.length; i++) {
    if (!isConvertableChar(word[i])) {
      return false
    }
  }
  return word;
}

export const getColorWords = () => {
  const filePath = path.join(process.cwd(), 'src/words_alpha.txt')
  const content = fs.readFileSync(filePath, 'utf8').split('\r\n')
  return content.filter(isColorWord);
}
