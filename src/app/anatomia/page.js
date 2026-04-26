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
      <h1 className={styles.titlePage}> ANATOMIA</h1>
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

        <div className={styles.containerDisease}>
          <div>
            <button
              className={styles.disease}
              onClick={() =>
                setOpenLesson(openLesson === 'Aula02' ? null : 'Aula02')
              }
            >
              <span
                className={`${styles.arrow}  ${openLesson === 'Aula02' ? styles.arrowOpen : styles.arrowClosed}`}
              >
                ➡️
              </span>
              Sistemas que compoem o corpo humano
            </button>

            <div
              className={
                openLesson === 'Aula02'
                  ? styles.contentOpen
                  : styles.contentClosed
              }
            >
              <p className={styles.paragraph}>
                <span className={styles.highlight}>  </span>
                O corpo humano é composto pelos seguintes sistemas principais:
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Sistema nervoso  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Sistema músculo esquelético  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Sistema digestivo  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Sistema reprodutor masculino e feminino  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Sistema tegumentar  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Sistema imunológico  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Sistema endócrino  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Sistema urinário  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Sistema cardiovascular  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Sistema respiratório  </span>

              </p>
            </div>
          </div>
        </div>

        <div className={styles.containerDisease}>
          <div>
            <button
              className={styles.disease}
              onClick={() =>
                setOpenLesson(openLesson === 'Aula03' ? null : 'Aula03')
              }
            >
              <span
                className={`${styles.arrow}  ${openLesson === 'Aula03' ? styles.arrowOpen : styles.arrowClosed}`}
              >
                ➡️
              </span>
              Organização do corpo humano
            </button>

            <div
              className={
                openLesson === 'Aula03'
                  ? styles.contentOpen
                  : styles.contentClosed
              }
            >
              <p className={styles.paragraph}>
                <span className={styles.highlight}>  </span>
                Para a formação de um organismo, ela passa pela ordem ou formação seguinte:
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Átmos {'=>'} Moléculas {'=>'} Organelos {'=>'} Células {'=>'} Tecidos {'=>'} Órgãos {'=>'} Sistema {'=>'} Organismo  </span>

              </p>
            </div>
          </div>
          </div>

          <div className={styles.containerDisease}>
          <div>
            <button
              className={styles.disease}
              onClick={() =>
                setOpenLesson(openLesson === 'Aula04' ? null : 'Aula04')
              }
            >
              <span
                className={`${styles.arrow}  ${openLesson === 'Aula04' ? styles.arrowOpen : styles.arrowClosed}`}
              >
                ➡️
              </span>
              Homeostase e sua importância
            </button>

            <div
              className={
                openLesson === 'Aula04'
                  ? styles.contentOpen
                  : styles.contentClosed
              }
            >
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Homeostase  </span>
                é a capacidade que o corpo tem de manter o seu equilíbrio interno mesmo diante de fatores que podem alterar. EX: o nosso corpo consegue regular a temperatura, o ph no sangue, líquidos, etc.
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Feedback negativo  </span>
                é o mecanismo interno que inverte a situação, se estiver frio ajuda o corpo a se aquecer, se estiver esquentando ajuda o corpo a se esfriar.
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Feedback positivo  </span>
                é o mecanismo interno que intencifica a resposta, se estiver esquentando aumento o esquentamento. EX: Durante o parto a temperatura aumenta até o bebé nascer.
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
