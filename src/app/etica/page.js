"use client";
import { UseState } from '../statas';
import { useState } from 'react';
import styleTheme from '../page.module.css';
import stylesEtica from './page.module.css';
import styles from '../sistema-respitatorio/SistemaRespiratorio.module.css';

export default function Etica() {
  const [openLesson, setOpenLesson] = useState(null);
  const { theme } = UseState();
  return (
      <main
      className={`${styles.main} ${theme ? styleTheme.dark : styleTheme.light}`}
    >
      <h1 className={styles.titlePage}>ÉTICA NA SAÚDE</h1>
      <div className={styles.container}>
        <div className={styles.containerDisease}>
          <button
            className={styles.disease}
            onClick={() => setOpenLesson(openLesson === 'Aula01' ? null : 'Aula01')}
          >
            <span
              className={`${styles.arrow}  ${openLesson === 'Aula01' ? styles.arrowOpen : styles.arrowClosed}`}
            >
              ➡️
            </span>
            Aplicação dos princípios éticos e deontológicos
          </button>

          <div
            className={openLesson === 'Aula01' ? styles.contentOpen : styles.contentClosed}
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

            <h3 className={styles.subtitle}> Deontologia </h3>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>Deontologia </span>
              É o saber comprir regras, normas e deveres encontrados num local de trabalho.
            </p>

            <h3 className={styles.subtitle}>princípios deontológicos</h3>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>Respeito pela dignidade humana </span>
              O proficional deve tratar e atender o paciente de uma forma humana, não de uma forma desumana
            </p>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>Sigilo proficional </span>
              O proficional deve manter a confidencialidade tanto com as informações do paciente como da entidade patronal.
            </p>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>lealdade e honestidade </span>
              O proficional deve leal ao seu superior, mesmo que lhe mande fazer algo que está fora da sua formação, tambem deve ser honesto, não invendando dados falsos.
            </p>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>-Atualização contínua </span>
              O proficional deve se manter atualizada com a sua área, buscando aprender novas doenças e técnicas, não se estagnando com o conteúdo da formação.
            </p>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>Colaboração interproficional </span>
              Os proficionais devem trabalhar em equipe, não criando desentendimentos entre eles, pois isso pode dificultar o trabalho.
            </p>

            <h3 className={styles.subtitle}>Fundamentos éticos</h3>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>Respeito a privacidade </span>
              O proficional deve respeitar as crenças, valores culturaise e princípios do paciente.
              </p>
              <p className={styles.paragraph}>
              <span className={styles.highlight}>Comfiaça na relação terapeútica </span>
              O paciente deve se sentir a vontade com o proficional, sem medo ou constrangimento.
            </p>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>Autonomia </span>
              O paciente tem o direito de decidir o que deve ou não ser feito com a sua saúde.
            </p>

            <h3 className={styles.subtitle}>Fundamentos deontológicos</h3>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>Sigilo </span>
              O proficional deve manter os dados e informações do paciente em segredo, por exemplo: HIV+.
            </p>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>Determinação judicial </span>
              No caso de uma prisão o proficional deve manter informado o posto policial sobre o quadro clínico do prisioneiro.
            </p>

          </div>
          {/* 
      <div className={`${styles.containerDisease} ${styles.subtitle}`}>
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
      </div>
      </main>
  )
}