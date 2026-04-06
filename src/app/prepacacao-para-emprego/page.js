"use client";
import { UseState } from '../statas';
import { useState } from 'react';
import styleTheme from '../page.module.css';
import stylesJob from './page.module.css';
import styles from '../sistema-respitatorio/SistemaRespiratorio.module.css';

export default function PrepacacaoParaEmprego() {
  const [openDisease, setOpenDisease] = useState(false);
  const { theme } = UseState();
  return (
    <main className={`${stylesJob.main} ${theme ? styleTheme.dark : styleTheme.light}`}>
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
            Identificar a sua área de trabalho e sua ligação com outras áreas da organização
          </button>

          <div
            className={openDisease ? styles.contentOpen : styles.contentClosed}
          >
            <p className={styles.paragraph}><span className={styles.highlight}>Área de Trabalho</span> É o setor onde o profissional exerce sua função dentro de uma instituição. No caso da emfermagem pode ser:</p>
            <p className={styles.paragraph}><span className={styles.highlight}>Unidade de internamento</span> Onde o paciente é internado e recebe cuidados médicos.</p>
            <p className={styles.paragraph}><span className={styles.highlight}>Unidade de Cuidados Intensivos</span> Onde pacientes com condições críticas recebem atendimento médico especializado.</p>
            <p className={styles.paragraph}><span className={styles.highlight}>Banco de Emergência</span> Onde pacientes em situações de emergência recebem atendimento médico imediato.</p>
            <p className={styles.paragraph}><span className={styles.highlight}>Maternidade</span> Onde mulheres grávidas e recém-nascidos recebem cuidados médicos.</p>
            <p className={styles.paragraph}><span className={styles.highlight}>Consultas externas</span> Onde pacientes com condições menos críticas recebem atendimento médico, o que inclui anamnese, prescrição de medicamentos, entre outros.</p>
            <p className={styles.paragraph}>O Enfermeiro não trabalha isoladamente, ele faz parte de um sistema integrado com várias áreas.</p>

            <h3 className={styles.subtitle}>Principais áreas ligadas</h3>
            <p className={styles.paragraph}><span className={styles.highlight}>-Corpo médico</span></p>
            <p className={styles.paragraph}><span className={styles.highlight}>-Laboratório</span> </p>
            <p className={styles.paragraph}><span className={styles.highlight}>-Farmácia</span> </p>
            <p className={styles.paragraph}><span className={styles.highlight}>-Administração</span> </p>
            <p className={styles.paragraph}><span className={styles.highlight}>-Radiologia</span> </p>
            <h3 className={styles.subtitle}>As várias atividades da sua área</h3>
            <p className={styles.paragraph}><span className={styles.highlight}></span>As atividades podem ser divididas em: </p>

            <p className={styles.paragraph}><span className={styles.highlight}>1.Assistência ao paciente (cuidado direto com o paciente)</span></p>

            <p className={styles.paragraph}><span className={styles.highlight}>-Administração de medicamentos</span> </p>
            <p className={styles.paragraph}><span className={styles.highlight}>-Higiene do paciente</span> </p>
            <p className={styles.paragraph}><span className={styles.highlight}>-Curativos</span> </p>
            <p className={styles.paragraph}><span className={styles.highlight}>-Alimentação assistida</span> </p>
            <p className={styles.paragraph}><span className={styles.highlight}>-Mobilização do paciente</span> </p>

            <p className={styles.paragraph}><span className={styles.highlight}>2.Técnicas</span> </p>

            <p className={styles.paragraph}><span className={styles.highlight}>-Inserção de sondas</span> </p>
            <p className={styles.paragraph}><span className={styles.highlight}>-Cateterismo</span> </p>
            <p className={styles.paragraph}><span className={styles.highlight}>-Coleta de amostras (sangue, urina)</span> </p>
            <p className={styles.paragraph}><span className={styles.highlight}>-Preparação para exames</span> </p>
            <p className={styles.paragraph}><span className={styles.highlight}>-Assistência em procedimentos médicos</span> </p>

            <p className={styles.paragraph}><span className={styles.highlight}>3.Administrativas</span> </p>

            <p className={styles.paragraph}><span className={styles.highlight}>-Registro de enfermagem</span> </p>
            <p className={styles.paragraph}><span className={styles.highlight}>-Organização de prontuários</span> </p>
            <p className={styles.paragraph}><span className={styles.highlight}>-Planejamento de cuidados</span> </p>
            <p className={styles.paragraph}><span className={styles.highlight}>-Gestão de medicamentos</span> </p>

            <p className={styles.paragraph}><span className={styles.highlight}>4.Educacional</span> </p>
            <p className={styles.paragraph}><span className={styles.highlight}>-Orientação ao paciente e familiares</span> </p>
            <p className={styles.paragraph}><span className={styles.highlight}>-Educação sobre doenças</span> </p>
            <p className={styles.paragraph}><span className={styles.highlight}>-Promoção de saúde</span> </p>
            <p className={styles.paragraph}><span className={styles.highlight}>-Prevenção de complicações</span> </p>

            <h3 className={styles.subtitle}>Suas actividades como TMG e sua importâcia</h3>
            <p className={styles.paragraph}><span className={styles.highlight}></span>O TMG é responsável por: </p>

            <p className={styles.paragraph}><span className={styles.highlight}>-Avaliar o estado do paciente</span> </p>
            <p className={styles.paragraph}><span className={styles.highlight}>-Identificar problemas de saúde</span> </p>
            <p className={styles.paragraph}><span className={styles.highlight}>-Planejar cuidados</span> </p>
            <p className={styles.paragraph}><span className={styles.highlight}>-Executar intervenções de enfermagem</span> </p>
            <p className={styles.paragraph}><span className={styles.highlight}>-Avaliar resultados</span> </p>

            <h3 className={styles.subtitle}>Importância do TMG</h3>
            <p className={styles.paragraph}><span className={styles.highlight}>1.Garantir a vida</span> </p>
            <p className={styles.paragraph}><span className={styles.highlight}>Identificar complicações precocentes</span> </p>
            <p className={styles.paragraph}><span className={styles.highlight}>-Atuar rapidamente em situações de emergência</span> </p>

            <p className={styles.paragraph}><span className={styles.highlight}>2.Continuidade dos cuidados</span> </p>
            <p className={styles.paragraph}><span className={styles.highlight}>-Faz ligação entre médico e paciente</span> </p>
            <p className={styles.paragraph}><span className={styles.highlight}>--Garante que o tratamento seja seguido corretamente</span> </p>

            <p className={styles.paragraph}><span className={styles.highlight}>3.Humanização no atendimento</span> </p>
            <p className={styles.paragraph}><span className={styles.highlight}>-Apoio emocional ao paciente e familiares</span> </p>
            <p className={styles.paragraph}><span className={styles.highlight}>-Estuta ativa</span> </p>
            <p className={styles.paragraph}><span className={styles.highlight}>-Redução do sofrimento</span> </p>

            <h3 className={styles.subtitle}>Prevenção de Complicações</h3>
            <p className={styles.paragraph}><span className={styles.highlight}>-Evitar infecções hospitalares</span> </p>
            <p className={styles.paragraph}><span className={styles.highlight}>-Prevenir úlcera de pressão</span> </p>
            <p className={styles.paragraph}><span className={styles.highlight}>-Controlar erros de medicação</span> </p>

            <h3 className={styles.subtitle}>Educação em Saúde</h3>
            <p className={styles.paragraph}><span className={styles.highlight}>-Ensinar o paciente a se cuidar</span> </p>
            <p className={styles.paragraph}><span className={styles.highlight}>-Reduzir reinternações</span> </p>
            <p className={styles.paragraph}><span className={styles.highlight}>-Promover qualidade de vida</span> </p>
          </div>
        </div>
    </main>
  )
}