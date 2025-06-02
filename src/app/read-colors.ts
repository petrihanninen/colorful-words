import fs from 'fs';
import path from 'path';

import { getHexRGB, getHexHSL, getWordHex, isValidColorWord, isValidColor } from './colors';

export const getColorWords = () => {
  const filePath = path.join(process.cwd(), 'src/words_alpha.txt')
  const content = fs.readFileSync(filePath, 'utf8').split('\r\n').filter(isValidColorWord)
  const colors = content.map(word => {
    const hex = getWordHex(word);
    return {
      word,
      hex,
      rgb: hex && getHexRGB(hex),
      hsl: hex && getHexHSL(hex),
    }
  })
  return colors.filter(isValidColor)
}

