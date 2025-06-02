'use client';

import styles from './color.module.css';


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

const getWordColor = (input: string) => {
  const word = input.toLowerCase();

  let color = '#';
  for (let i = 0; i < word.length; i++) {
    const char = word[i] as keyof typeof conversionTable

    if (!char) return null

    const letter = conversionTable[char]

    color += letter;
  }

  return color;
}

export const Color: React.FC<{ colorWord: string }> = ({ colorWord }) => {
  const color = getWordColor(colorWord);
  if (color === null) {
    return null
  }

  const copy = (str: string) => navigator.clipboard.writeText(str)
  return (
    <button
      onClick={() => copy(color)}
      className={styles.card}
    >
      <div className={styles.colorBox} style={{ backgroundColor: color }}></div>
      <h3 className={styles.cardTitle} style={{ color: color }}>{color}</h3>
    </button>
  )
}
