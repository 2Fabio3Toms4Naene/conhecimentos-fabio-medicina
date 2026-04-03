'use client';
import styles from "./page.module.css";
import ComponentIntroduction from "./component-introduction/Component-introduction";
import { useTheme } from "./themeContext";

export default function Home() {
    const { theme } = useTheme();
return (
    <div className={`${styles.containerPage} ${theme ? styles.dark : styles.light}`}>
      <main className={styles.main}>
        <ComponentIntroduction theme={theme} />
      </main>
    </div>
  );
}
