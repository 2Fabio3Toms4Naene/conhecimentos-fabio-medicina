'use client';
import styles from './page.module.css';
import { UseState } from './statas';
import ComponentIntroduction from './component-introduction/Component-introduction';
import ComponentCardBook from './component-card-book/ComponentCardBook';

export default function Home() {
  const { theme } = UseState();
  const { allbooks } = UseState();
  return (
    <div
      className={`${styles.containerPage} ${theme ? styles.dark : styles.light}`}
    >
      <main className={styles.main}>
        <ComponentIntroduction theme={theme} />
        <section className={styles.sectionBooks}>
          {allbooks.map((book) => (
            <ComponentCardBook
              key={book.id}
              image={book.image}
              title={book.title}
              link={book.link}
            />
          ))}
        </section>
      </main>
    </div>
  );
}
