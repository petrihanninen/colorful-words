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

export const isValidColor = (c: Record<string, unknown>): c is Color => typeof c?.hex === 'string' && typeof c?.rgb === 'string' && typeof c?.hsl === 'string' && typeof c?.word === 'string';

export const isValidColorWord = (w: string) => (w.length === 6 || w.length === 3) && getWordHex(w) !== null;

type Params = {
  term?: string;
}

export type Color = {
  hex: string;
  word: string;
  rgb: string;
  hsl: string;
};

export const isValidHex = (input: string) => {
  if (input.length !== 6 && input.length !== 3) {
    return false;
  }

  const word = input.toLowerCase();

  for (const char of word) {
    if (!isConvertableChar(char)) {
      return false
    }
  }
  return word;
}

export const filterColors = (content: Color[], { term }: Params) => {
  let colors = content

  if (term) {
    colors = colors.filter(color => color.word.includes(term.toLowerCase()))
  }

  return colors
}
export const getHexHSL = (input: string) => {
  let hex = input;

  if (input.length === 3) {
    const chars = input.split('')
    hex = `${chars[0]}${chars[0]}${chars[1]}${chars[1]}${chars[2]}${chars[2]}`
  }

  return hex;
}

export const getHexRGB = (input: string) => {
  let hex = input;

  if (input.length === 3) {
    const chars = input.split('')
    hex = `${chars[0]}${chars[0]}${chars[1]}${chars[1]}${chars[2]}${chars[2]}`
  }

  return hex;
}

export const getWordHex = (input: string) => {
  const word = input.toLowerCase();

  let color = '#';
  for (const char of word) {
    if (!char) return null
    if (!isConvertableChar(char)) return null

    const letter = conversionTable[char]

    color += letter;
  }

  return color;
}

