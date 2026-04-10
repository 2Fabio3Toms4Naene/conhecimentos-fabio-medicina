"use client";
import { UseState } from '../statas';
import { useState } from 'react';
import styleTheme from '../page.module.css';
import stylesEtica from './page.module.css';
import styles from '../sistema-respitatorio/SistemaRespiratorio.module.css';

export default function Etica() {
  const [openDisease, setOpenDisease] = useState(false);
  const { theme } = UseState();
  return (
      <main
      className={`${stylesEtica.main} ${theme ? styleTheme.dark : styleTheme.light}`}
    >
      <h1 className={styles.titlePage}>ÉTICA NA SAÚDE</h1>
      <div className={styles.container}>
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
            Aplicação dos princípios éticos e deontológicos
          </button>

          <div
            className={openDisease ? styles.contentOpen : styles.contentClosed}
          >
             <p className={styles.paragraph}>
              <span className={styles.highlight}>Ética </span> 
              é o saber ser, estar e fazer
            </p>

            <h3 className={styles.subtitle}>princípios éticos</h3>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>Autonomia </span> 
              O paciente tem o direito de decidir quais tratamentos de saúde prefere, e o proficional deve respeitar as decisões do paciente, sem deixar de informar o que pode acontecer se um procedimento for feito.
            </p>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>Beneficiência </span> 
              O proficional deve agir em benefício do paciente, não tratamdo mal o paciente intencionalmente.
            </p>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>Não maleficiência </span>
              O proficional não deve causar dano ao paciente propositadamente por assuntos ou sentimentos pessoais.
            </p>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>Confidencialidade </span>
              O proficional não deve expor o diagnóstico, dados ou informações do paciente.
            </p>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>Justiça </span>
              O proficional não deve descriminar os pacientes queira pela cor da pele, religião, cultura ou classe social
            </p>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>Veracidade </span>
              O proficional deve ser veraz, ou seja, não esconder o diagnóstico real do paciente.
            </p>

          </div>
        </div>
      </div>
      </main>
  )
}