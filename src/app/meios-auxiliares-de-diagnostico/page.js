'use client';
import styles from '../sistema-respitatorio/SistemaRespiratorio.module.css';
import styleTheme from '../page.module.css';
import { UseState } from '../statas';
import { useState } from 'react';

export default function SistemaImunologico() {
  const [openLesson, setOpenLesson] = useState(null);
  const { theme } = UseState();
  return (
    <main
      className={`${styles.main} ${theme ? styleTheme.dark : styleTheme.light}`}
    >
      <h1 className={styles.titlePage}>Meios auxiliares de diagnóstico</h1>
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
              Introdução aos Meios auxiliares de diagnóstico
            </button>

            <div
              className={
                openLesson === 'Aula01'
                  ? styles.contentOpen
                  : styles.contentClosed
              }
            >
              <p className={styles.paragraph}>
              <span className={styles.highlight}>Meios auxiliares de diagnóstico </span>
              São exames laboratorias que consistem em ajudar na negação ou aceitação de uma hipótese de diagnóstico.
            </p>

            <h3 className={styles.subtitle}>Exemplos de Meios auxiliares de diagnóstico</h3>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>Texte rápido de Malária, HIV, Sífiles </span>
              
            </p>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>Hemograma </span>
              
            </p>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>Raio-x </span>
              
            </p>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>Urocultura </span>
              
            </p>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>Coprocultura </span>
              
            </p>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>Reçonância magnética </span>
              
            </p>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>Ecografia </span>
              
            </p>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>Topografia computadorizada </span>
              
            </p>
            </div>
          </div>
        </div>

        {/* 
          <h3 className={styles.subtitle}></h3>
            <p className={styles.paragraph}>
              <span className={styles.highlight}> </span>
              
            </p>
      <div className={styles.containerDisease}>
        <div>
          <button
            className={styles.disease}
            onClick={() => setOpenLesson(openLesson === 'Aula02' ? null : 'Aula02')}
          >
            <span
              className={`${styles.arrow}  ${openLesson === 'Aula02' ? styles.arrowOpen : styles.arrowClosed}`}
            >
              ➡️
            </span>
            Planificação e gestão de tempo de trabalho
          </button>

          <div
            className={openLesson === 'Aula02' ? styles.contentOpen : styles.contentClosed}
          >
            
          </div>
        </div>
      </div>
       */}
      </div>
    </main>
  );
}
