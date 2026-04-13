'use client';
import styles from '../sistema-respitatorio/SistemaRespiratorio.module.css';
import styleTheme from '../page.module.css';
import { UseState } from '../statas';
import { useState } from 'react';
import stylesAnatomia from './page.module.css';

export default function Anatomia() {
  const [openLesson, setOpenLesson] = useState(null);
  const { theme } = UseState();
  return (
    <main
      className={`${styles.main} ${theme ? styleTheme.dark : styleTheme.light}`}
    >
      <h1 className={styles.titlePage}> Anatomia</h1>
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
              Introdução a Anatomia - conceitos fundamentais
            </button>

            <div
              className={
                openLesson === 'Aula01'
                  ? styles.contentOpen
                  : styles.contentClosed
              }
            >
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Anatomia </span>é a ciência
                que estuda os componentes do corpo humano no que diz respeito a
                sua forma e localização.
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>A anatomia pode ser subdividida em:  </span>
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Anatomia microscópica  </span>
                é aquela que estuda estruturas do corpo humano invisíveis ao olho nú, isto é, não podemos ver sem a ajuda do microscópio. EX: células e tecidos, etc.
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Anatomia macroscópica  </span>
                é aquela que estuda estruturas do corpo humano visíveis ao olho nú, isto é, podemos ver-los sem ajuda do microscópio. EX: Coração, fígado, e pulmão, etc.
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Anatomia topográfica  </span>
                é aquela que se dedica ao estudo da localização dos órgãos e a relação entre eles. EX: uma dor na massa ilíaca direita sugere problema no apêndice, uma dor na região epigástrica sugere problema ao lível do estômago, etc.
              </p>
            </div>
          </div>
        </div>

        {/* 
        <h3 className={styles.subtitle}>
        <p className={styles.paragraph}>
                <span className={styles.highlight}>  </span>

              </p>
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
         */}
      </div>
    </main>
  );
}
