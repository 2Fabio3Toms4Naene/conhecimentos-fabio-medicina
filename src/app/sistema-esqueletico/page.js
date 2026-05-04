'use client';
import styles from '../sistema-respitatorio/SistemaRespiratorio.module.css';
import styleTheme from '../page.module.css';
import { UseState } from '../statas';
import { useState } from 'react';
import stylesSistemaEsqueletico from './page.module.css';

export default function SistemaEsqueletico() {
  const [openLesson, setOpenLesson] = useState(null);
  const { theme } = UseState();
  return (
    <main
      className={`${styles.main} ${theme ? styleTheme.dark : styleTheme.light}`}
    >
      <h1 className={styles.titlePage}>SISTEMA ESQUELÉTICO</h1>
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
              Estrutura e Funcionamento do sistema esquelético
            </button>

            <div
              className={
                openLesson === 'Aula01'
                  ? styles.contentOpen
                  : styles.contentClosed
              }
            >
              <p className={styles.paragraph}>
                <span className={styles.highlight}>  </span>
                O sistema esquelético é constituído por:
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Ossos  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Articulações  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>O sistema esquelético  </span>
                É responsável pelo movimento, sustentação e proteção dos órgãos.
              </p>

              <h4 className={styles.subtitleh4}>DIFERENCIAÇÃO DOS OSSOS: LONGOS, CURTOS E CHATOS</h4>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>  </span>
                Classificação:
              </p>

              <h4 className={styles.subtitleh4}>Ossos Longos</h4>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Comprimento maior que largura  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Exemplo: fémur, úmero  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Função: movimento  </span>

              </p>

              <h4 className={styles.subtitleh4}>Ossos Curtos</h4>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Forma cúbica  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Exemplo: ossos do punho (carpo)  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Função: estabilidade  </span>

              </p>

              <h4 className={styles.subtitleh4}>Ossos Chatos</h4>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Finos e largos  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Exemplo: crânio, esterno  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Função: proteção  </span>

              </p>

              <h4 className={styles.subtitleh4}>PROCESSOS FISIOLÓGICOS DOS OSSOS</h4>
              <h4 className={styles.subtitleh4}>Formação (Ossificação)</h4>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Intramembranosa  </span>
                ssos chatos
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Endocondral  </span>
                ossos longos
              </p>
              

              <h4 className={styles.subtitleh4}>Crescimento ósseo</h4>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Ocorre nas placas epifisárias  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Influenciado por: Hormonas e Nutrição (cálcio, vitamina D)  </span>

              </p>
              

              <h4 className={styles.subtitleh4}>Remodelação óssea</h4>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>  </span>
                Processo contínuo ao longo da vida, envolve:
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Osteoblastos  </span>
                formam osso
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Osteoclastos  </span>
                destroem/reabsorvem osso
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Funções:  </span>
                Reparação e Adaptação ao esforço
              </p>

              <h4 className={styles.subtitleh4}>SSOS DO ESQUELETO HUMANO E PONTOS ANATÓMICOS</h4>
              <h4 className={styles.subtitleh4}>Divisão do esqueleto:</h4>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Esqueleto axial:  </span>
                crânio, coluna, costelas
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Esqueleto apendicular:  </span>
                membros superiores e inferiores
              </p>

              <h3 className={styles.subtitle}>Pontos anatómicos principais:</h3>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Clavícula  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Escápula  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Esterno  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Vértebras  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Fémur  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Patela  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Tíbia  </span>

              </p>

              <h3 className={styles.subtitle}>DEFINIÇÃO E CLASSIFICAÇÃO DAS ARTICULAÇÕES</h3>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Articulações  </span>
                são pontos de ligação entre dois ou mais ossos.
              </p>

               <h3 className={styles.subtitle}>Classificação dos pontos anatómicos principais</h3>
               <h4 className={styles.subtitleh4}>Fibrosas</h4>
               <p className={styles.paragraph}>
                <span className={styles.highlight}>Não móveis  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Ex: suturas do crânio  </span>

              </p>

              <h4 className={styles.subtitleh4}>Cartilagíneas</h4>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Pouco móveis  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Ex: coluna vertebral  </span>

              </p>

              <h4 className={styles.subtitleh4}>Sinoviais</h4>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Muito móveis  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Ex: joelho, ombro  </span>

              </p>

              <h4 className={styles.subtitleh4}>ARTICULAÇÕES MAIS IMPORTANTES</h4>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>  </span>
                Principais articulações do corpo humano:
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Ombro  </span>
                grande mobilidade
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Cotovelo  </span>
                flexão/extensão
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Anca (quadril)  </span>
                suporte de peso
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Joelho  </span>
                locomoção
              </p>
            </div>
          </div>
        </div>

        {/* 
        <h3 className={styles.subtitle}></h3>
        <h4 className={styles.subtitleh4}></h4>
        <h4 className={styles.subtitleh4}><div className={styles.circle}></div></h4>
        <div className={styles.circle}></div>
        <h3 className={styles.subtitle}>Medicamentos</h3>
                    <Image
                      src={}
                      alt=""
                      className={styles.image}
                    />
        <p className={styles.paragraph}>
                <span className={styles.highlight}>  </span>

              </p>
              <table className={styles.table}>
                <thead className={styles.thead}>
                <tr className={styles.tr}>
                  <th className={styles.th}> </th>
                  <th className={styles.th}> </th>
                  <th className={styles.th}> </th>
                </tr>
                </thead>
                <tbody className={styles.tbody}>
                  <tr className={styles.tr}>
                    <td className={styles.td}> </td>
                    <td className={styles.td}> </td>
                    <td className={styles.td}> </td>
                  </tr>
                </tbody>
              </table>
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
