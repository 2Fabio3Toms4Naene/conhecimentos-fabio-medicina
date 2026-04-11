'use client';
import styles from './SistemaRespiratorio.module.css';
import styleTheme from '../page.module.css';
import { UseState } from '../statas';
import { useState } from 'react';
import Image from 'next/image';
import TuberculoseRHZE from '../../../public/tuberculose-RHZE.jpeg';

export default function SistemaRespiratorio() {
  const [openDisease, setOpenDisease] = useState(null);
  const { theme } = UseState();
  return (
    <main
      className={`${styles.main} ${theme ? styleTheme.dark : styleTheme.light}`}
    >
      <h1 className={styles.titlePage}>Sistema Respiratório</h1>
      <div className={styles.container}>
        <h2 className={styles.titlePage}>Donças do Sistema Respiratório</h2>
        <div className={styles.containerDisease}>
          <button
            className={styles.disease}
            onClick={() => setOpenDisease(openDisease === 'Tuberculose' ? null : 'Tuberculose')}
          >
            <span
              className={`${styles.arrow}  ${openDisease == 'Tuberculose' ? styles.arrowOpen : styles.arrowClosed}`}
            >
              ➡️
            </span>
            Tuberculose
          </button>

          <div
            className={openDisease == 'Tuberculose' ? styles.contentOpen : styles.contentClosed}
          >
            <p className={styles.paragraph}>
              A tuberculose é uma doença infecciosa causada pela bactéria
              Mycobacterium tuberculosis. Afeta principalmente os pulmões.
            </p>
            <h3 className={styles.subtitle}>Transmissão</h3>
            <p className={styles.paragraph}>
              A tuberculose é transmitida pelo ar, quando uma pessoa infectada
              tosse, espirra ou fala, liberando gotículas contendo a bactéria.
            </p>
            <h3 className={styles.subtitle}>Sintomas</h3>
            <p className={styles.paragraph}>
              Os sintomas incluem tosse persistente, febre, perda de peso,
              fadiga e suores noturnos.
            </p>
            <h3 className={styles.subtitle}>Prevenção</h3>
            <p className={styles.paragraph}>
              A prevenção inclui vacinação (BCG), evitar contato próximo com
              pessoas infectadas e manter um sistema imunológico saudável.
            </p>
            <h3 className={styles.subtitle}>Tratamento</h3>
            <p className={styles.paragraph}>
              O tratamento da tuberculose envolve o uso de antibióticos por um
              período prolongado, geralmente 6 meses.
            </p>
            <h3 className={styles.subtitle}>Medicamentos</h3>
            <Image
              src={TuberculoseRHZE}
              alt="Imagem ilustrativa dos medicamentos utilizados no tratamento da tuberculose"
              className={styles.image}
            />
            <p className={styles.paragraph}>
              Os medicamentos mais comuns utilizados no tratamento da
              tuberculose incluem isoniazida, rifampicina, etambutol e
              pirazinamida. Abreviação: RHZE
            </p>
            <h3 className={styles.subtitle}>Como tomar corretamente</h3>
            <p className={styles.paragraph}>
              Tomar em jejum (ou seja, antes de comer)
            </p>
            <p className={styles.paragraph}>
              Evitar tomar com leite ou alimentos que contenham cálcio, pois
              isso pode reduzir a absorção do medicamento.
            </p>
            <p className={styles.paragraph}>
              Sempre no mesmo horário todos os dias
            </p>
            <p className={styles.paragraph}>Engolir com água</p>
            <p className={styles.paragraph}>Não interromper o tratamento</p>

          </div>
          {/* 
      <div className={`${styles.containerDisease} ${styles.subtitle}`}>
        <div>
          <button
            className={styles.disease}
            onClick={() => setOpenDisease(openDisease === 'Aula02' ? null : 'Aula02')}
          >
            <span
              className={`${styles.arrow}  ${openDisease === 'Aula02' ? styles.arrowOpen : styles.arrowClosed}`}
            >
              ➡️
            </span>
            Planificação e gestão de tempo de trabalho
          </button>

          <div
            className={openDisease === 'Aula02' ? styles.contentOpen : styles.contentClosed}
          >
            
          </div>
        </div>
      </div>
       */}
        </div>
      </div>
    </main>
  );
}
