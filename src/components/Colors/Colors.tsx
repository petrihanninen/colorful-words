'use client'

import { useState } from 'react';
import { Color } from "@/components/Color/Color";
import type { Color as ColorType } from '@/app/colors';

import { filterColors } from '@/app/colors';

import styles from './colors.module.css';

export const Colors: React.FC<{ initialColors: ColorType[] }> = ({ initialColors }) => {

  const [colors, setColors] = useState(initialColors)

  const handleInput = (v: string) => {
    setColors(filterColors(initialColors, { term: v.toLowerCase() }))
  }

  return (
    <>
      <input placeholder="Search for a color" className={styles.search} type="text" onChange={(e) => handleInput(e.currentTarget.value)} />

      <p className={styles.info}>Showing {colors.length} of {initialColors.length} colors</p>

      <div className={styles.cards}>
        {colors.map(color => <Color key={color.hex} color={color} />)}
      </div>
    </>
  )
}

