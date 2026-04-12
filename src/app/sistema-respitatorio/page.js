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

            <h3 className={styles.subtitle}>Efeitos colaterais do uso do composto HRZE</h3>
            <p className={styles.paragraph}> <span className={styles.highlight}>Hepatotoxicidade (Lesão no Fígado): </span>
              É o efeito grave mais preocupante. Os sintomas incluem icterícia (pele ou olhos amarelados), urina escura, náuseas/vômitos persistentes e dor abdominal intensa.
            </p>
            <p className={styles.paragraph}> <span className={styles.highlight}>Neuropatia Periférica: </span>
              Formigamento, dormência ou queimação nas mãos e nos pés (frequentemente associado à isoniazida).
            </p>
            <p className={styles.paragraph}> <span className={styles.highlight}>Toxicidade Ocular: </span>
              Alterações na visão, como visão turva ou dificuldade em distinguir cores (efeito do Etambutol).
            </p>
            <p className={styles.paragraph}> <span className={styles.highlight}>Reações de Hipersensibilidade: </span>
               Febre, erupções cutâneas graves ou inchaço do rosto.
            </p>
          </div>

          <div className={styles.containerDisease}>
        <div>
          <button
            className={styles.disease}
            onClick={() => setOpenDisease(openDisease === 'tosse' ? null : 'tosse')}
          >
            <span
              className={`${styles.arrow}  ${openDisease === 'tosse' ? styles.arrowOpen : styles.arrowClosed}`}
            >
              ➡️
            </span>
            Tosse
          </button>

          <div
            className={openDisease === 'tosse' ? styles.contentOpen : styles.contentClosed}
          >
            <p className={styles.paragraph}> <span className={styles.highlight}>Tosse </span>
              é um reflexo natural do corpo que serve para limpar as vias respiratórias (como garganta e pulmões). Ela acontece quando algo irrita essas vias — por exemplo, poeira, muco ou microrganismos.
            </p>
            <p className={styles.paragraph}> <span className={styles.highlight}>Tosse bactérias </span>
               é aquela causada por uma infecção bacteriana nas vias respiratórias, como garganta, brônquios ou pulmões.
            </p>

            <h3 className={styles.subtitle}>Características da tosse bacteriana:</h3>
            <p className={styles.paragraph}> <span className={styles.highlight}>Geralmente com escarro (amarelo, verde ou até com sangue), ou tosse seca </span>
              
            </p>
            <p className={styles.paragraph}> <span className={styles.highlight}>Pode vir com febre alta </span>
              
            </p>
            <p className={styles.paragraph}> <span className={styles.highlight}>Dor no peito ao tossir </span>
              
            </p>
            <p className={styles.paragraph}> <span className={styles.highlight}>Sensação de cansaço ou fraqueza </span>
              
            </p>
            <p className={styles.paragraph}> <span className={styles.highlight}>Tosse mais de 3 dias </span>
              
            </p>

            <h3 className={styles.subtitle}>Antibióticos mais usados</h3>
            <p className={styles.paragraph}> <span className={styles.highlight}>Amoxilina </span>
              
            </p>
            <p className={styles.paragraph}> <span className={styles.highlight}>Azitromicina </span>
              (Geralmente quando o Amoxilina não é eficaz ou em casos de alergia.)
            </p>
            <p className={styles.paragraph}> <span className={styles.highlight}>Eritromicina </span>
              (Geralmente quando o Amoxilina não é eficaz ou em casos de alergia.)
            </p>

            <h3 className={styles.subtitle}>Tosagem para adultos</h3>
            <p className={styles.paragraph}> <span className={styles.highlight}>3 vezes ao dia, de 8 em 8 horas, 500 mg por dose (total de 1500 mg por dia) para Amoxilina. A duração do tratamento geralmente é de 5 a 7 dias, mas pode variar dependendo da gravidade da infecção e da resposta ao tratamento. </span>
              
            </p>
            <p className={styles.paragraph}> <span className={styles.highlight}>Deve se tomas após as refeições, para reduzir o risco de irritação gástrica. É importante completar todo o curso do antibiótico, mesmo que os sintomas melhorem antes do término do tratamento, para garantir a erradicação completa da infecção e prevenir a resistência bacteriana. </span>
              
            </p>
          </div>
        </div>
      </div>
          {/* 
          <h3 className={styles.subtitle}></h3>
            <p className={styles.paragraph}> <span className={styles.highlight}> </span>
              
            </p>
      <div className={{styles.containerDisease}>
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
