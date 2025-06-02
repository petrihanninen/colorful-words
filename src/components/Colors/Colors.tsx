'use client'
import { useState } from 'react';
import { Color } from "@/components/Color/Color";

import styles from './colors.module.css';

type Params = {
  term?: string;
}

export const filterColors = (content: string[], { term }: Params) => {
  let words = content
  if (term) {
    words = words.filter(word => word.includes(term))
  }

  return words
}

export const Colors: React.FC<{ colorWords: string[] }> = ({ colorWords }) => {

  const [colors, setColors] = useState(colorWords)

  const handleInput = (v: string) => {
    setColors(filterColors(colorWords, { term: v.toLowerCase() }))
  }

  return (
    <>
      <input placeholder="Search for a color" className={styles.search} type="text" onChange={(e) => handleInput(e.currentTarget.value)} />

      <p className={styles.info}>Showing {colors.length} of {colorWords.length} colors</p>

      <div className={styles.cards}>
        {colors.map(color => <Color key={color} colorWord={color} />)}
      </div>
    </>
  )
}

