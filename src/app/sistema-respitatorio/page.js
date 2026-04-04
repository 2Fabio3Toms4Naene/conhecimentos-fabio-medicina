'use client';
import styles from './SistemaRespiratorio.module.css';
import styleTheme from '../page.module.css';
import { UseState } from '../statas';
import { useState } from 'react';

export default function SistemaRespiratorio() {
  const [openDisease, setOpenDisease] = useState(false);
  const { theme } = UseState();
  return (
    <main
      className={`${styles.main} ${theme ? styleTheme.dark : styleTheme.light}`}
    >
      <div className={styles.container}>
        <h1 className={styles.titleDiseases}>Donças do Sistema Respiratório</h1>
        <div className={styles.containerDisease}>
          <button
            className={styles.disease}
            onClick={() => setOpenDisease(!openDisease)}
          >
            <span
              className={`${styles.arrow}  ${openDisease ? styles.arrowOpen : styles.arrowClosed}`}
            >
              ➡️
            </span>
            Tuberculose
          </button>

          <div
            className={openDisease ? styles.contentOpen : styles.contentClosed}
          >
            <p>Aqui está o conteúdo escondido!</p>
          </div>
        </div>
      </div>
    </main>
  );
}
