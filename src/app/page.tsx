import styles from "./index.module.css";

import { getColorWords } from "./colors";
import { Colors } from "@/components/Colors/Colors";

export default function Home() {
  const colorWords = getColorWords();

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Colorful Words
        </h1>

        <p>Choosing a nice color can be hard just by looking at the color. An objectively easier way to pick a nice color for your next design is to pick one that spells out a funny word. That I can help you with.</p>
      </div>

      <Colors colorWords={colorWords} />
    </main>
  );
}
