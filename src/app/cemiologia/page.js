'use client';
import styles from '../sistema-respitatorio/SistemaRespiratorio.module.css';
import styleTheme from '../page.module.css';
import { UseState } from '../statas';
import { useState } from 'react';

export default function Cemiologia() {
  const [openLesson, setOpenLesson] = useState(null);
  const { theme } = UseState();
  return (
    <main
      className={`${styles.main} ${theme ? styleTheme.dark : styleTheme.light}`}
    >
      <h1 className={styles.titlePage}>CEMIOLOGIA</h1>
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
              Introdução a Cemiologia - conceitos fundamentais
            </button>

            <div
              className={
                openLesson === 'Aula01'
                  ? styles.contentOpen
                  : styles.contentClosed
              }
            >
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Cemiologia  </span>
                é uma área da medicina que estuda os sinais e sintomas das patologias, com o objetivo de ajudar na identificação de diagnóstico
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Sinal  </span>
                é o que o profissional observa.
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Sintoma  </span>
                é o que o paciente sente e diz.
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Propadiotismo/propadiótica  </span>
                é o conjunto de conhecimentos e técnicas usadas para examinar o paciente com o objetivo de identificar sinais de patologias, confirmar informações de anamnese.
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>  </span>
                Inclui métodos básicos de exame físico como:
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>anamnese  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Inspeção  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Palpação  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Percusão  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Auscutação  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Cemiotécnica  </span>
                é a parte prática da Cemiologia ou conjunto de técnicas usadas para examinar o paciente e identificar sinais e sintomas. Com o objetivo de aplicar corretamente o exame físico, detectar sinais, conpletar exames e ajudar no diagnóstico.
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>  </span>
                A Cemiotécnica involve:
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>anamnese  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Inspeção  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Palpação  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Percusão  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Auscutação  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>EX:  </span>
                Um paciente com dor no peito: o profissional usa Auscutação para ouvir o coração, e isso é Cemiologia em ação
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>História clínica  </span>
                é o registo completo organizado de todas as informações sobre o paciente, recolhidas durante o atendimento. Com o objetivo de ajudar diagnóstico, tratamento e atendimento.
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
