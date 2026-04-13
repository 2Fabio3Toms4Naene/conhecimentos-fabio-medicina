'use client';
import styles from '../sistema-respitatorio/SistemaRespiratorio.module.css';
import styleTheme from '../page.module.css';
import { UseState } from '../statas';
import { useState } from 'react';
import stylesSistemaDigestivo from './page.module.css';

export default function SistemaDigestivo() {
  const [openLesson, setOpenLesson] = useState(null);
  const { theme } = UseState();
  return (
    <main
      className={`${styles.main} ${theme ? styleTheme.dark : styleTheme.light}`}
    >
      <h1 className={styles.titlePage}>Fisiologia</h1>
      <div className={styles.container}>
        <div className={styles.containerDisease}>
          <div>
            <button
              className={styles.disease}
              onClick={() =>
                setOpenLesson(openLesson === 'Aula01' ? null : 'Aula01')
              }
            >
              <span
                className={`${styles.arrow}  ${openLesson === 'Aula01' ? styles.arrowOpen : styles.arrowClosed}`}
              >
                ➡️
              </span>
              Introdução a Fisiologia - conceitos fundamentais
            </button>

            <div
              className={
                openLesson === 'Aula01'
                  ? styles.contentOpen
                  : styles.contentClosed
              }
            ></div>
          </div>
        </div>
      </div>
    </main>
  );
}
