'use client';

import type { Color as ColorType } from '@/app/colors';

import styles from './color.module.css';

export const Color: React.FC<{ color: ColorType }> = ({ color }) => {
  const copy = (str: string) => navigator.clipboard.writeText(str)

  return (
    <button
      onClick={() => copy(color.hex)}
      className={styles.card}
    >
      <div className={styles.colorBox} style={{ backgroundColor: color.hex }}></div>
      <h3 className={styles.cardTitle} style={{ color: color.hex }}>{color.hex}</h3>
    </button>
  )
}
