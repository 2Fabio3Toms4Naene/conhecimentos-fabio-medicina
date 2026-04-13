'use client';
import { UseState } from '../statas';
import { useState } from 'react';
import styleTheme from '../page.module.css';
import stylesJob from './page.module.css';
import styles from '../sistema-respitatorio/SistemaRespiratorio.module.css';

export default function PrepacacaoParaEmprego() {
  const [openLesson, setOpenLesson] = useState(null);
  const { theme } = UseState();
  return (
    <main
      className={`${styles.main} ${theme ? styleTheme.dark : styleTheme.light}`}
    >
      <h1 className={styles.titlePage}>Preparação para o emprego</h1>
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
              Identificar a sua área de trabalho e sua ligação com outras áreas
              da organização
            </button>

            <div
              className={
                openLesson == 'Aula01'
                  ? styles.contentOpen
                  : styles.contentClosed
              }
            >
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Área de Trabalho</span> É o
                setor onde o profissional exerce sua função dentro de uma
                instituição. No caso da emfermagem pode ser:
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>
                  Unidade de internamento
                </span>{' '}
                Onde o paciente é internado e recebe cuidados médicos.
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>
                  Unidade de Cuidados Intensivos
                </span>{' '}
                Onde pacientes com condições críticas recebem atendimento médico
                especializado.
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Banco de Emergência</span>{' '}
                Onde pacientes em situações de emergência recebem atendimento
                médico imediato.
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Maternidade</span> Onde
                mulheres grávidas e recém-nascidos recebem cuidados médicos.
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Consultas externas</span>{' '}
                Onde pacientes com condições menos críticas recebem atendimento
                médico, o que inclui anamnese, prescrição de medicamentos, entre
                outros.
              </p>
              <p className={styles.paragraph}>
                O Enfermeiro não trabalha isoladamente, ele faz parte de um
                sistema integrado com várias áreas.
              </p>

              <h3 className={styles.subtitle}>Principais áreas ligadas</h3>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>-Corpo médico</span>
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>-Laboratório</span>{' '}
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>-Farmácia</span>{' '}
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>-Administração</span>{' '}
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>-Radiologia</span>{' '}
              </p>
              <h3 className={styles.subtitle}>
                As várias atividades da sua área
              </h3>
              <p className={styles.paragraph}>
                <span className={styles.highlight}></span>As atividades podem
                ser divididas em:{' '}
              </p>

              <p className={styles.paragraph}>
                <span className={styles.highlight}>
                  1.Assistência ao paciente (cuidado direto com o paciente)
                </span>
              </p>

              <p className={styles.paragraph}>
                <span className={styles.highlight}>
                  -Administração de medicamentos
                </span>{' '}
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>
                  -Higiene do paciente
                </span>{' '}
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>-Curativos</span>{' '}
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>
                  -Alimentação assistida
                </span>{' '}
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>
                  -Mobilização do paciente
                </span>{' '}
              </p>

              <p className={styles.paragraph}>
                <span className={styles.highlight}>2.Técnicas</span>{' '}
              </p>

              <p className={styles.paragraph}>
                <span className={styles.highlight}>
                  -Inserção de sondas
                </span>{' '}
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>-Cateterismo</span>{' '}
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>
                  -Coleta de amostras (sangue, urina)
                </span>{' '}
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>
                  -Preparação para exames
                </span>{' '}
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>
                  -Assistência em procedimentos médicos
                </span>{' '}
              </p>

              <p className={styles.paragraph}>
                <span className={styles.highlight}>3.Administrativas</span>{' '}
              </p>

              <p className={styles.paragraph}>
                <span className={styles.highlight}>
                  -Registro de enfermagem
                </span>{' '}
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>
                  -Organização de prontuários
                </span>{' '}
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>
                  -Planejamento de cuidados
                </span>{' '}
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>
                  -Gestão de medicamentos
                </span>{' '}
              </p>

              <p className={styles.paragraph}>
                <span className={styles.highlight}>4.Educacional</span>{' '}
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>
                  -Orientação ao paciente e familiares
                </span>{' '}
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>
                  -Educação sobre doenças
                </span>{' '}
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>
                  -Promoção de saúde
                </span>{' '}
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>
                  -Prevenção de complicações
                </span>{' '}
              </p>

              <h3 className={styles.subtitle}>
                Suas actividades como TMG e sua importâcia
              </h3>
              <p className={styles.paragraph}>
                <span className={styles.highlight}></span>O TMG é responsável
                por:{' '}
              </p>

              <p className={styles.paragraph}>
                <span className={styles.highlight}>
                  -Avaliar o estado do paciente
                </span>{' '}
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>
                  -Identificar problemas de saúde
                </span>{' '}
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>
                  -Planejar cuidados
                </span>{' '}
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>
                  -Executar intervenções de enfermagem
                </span>{' '}
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>
                  -Avaliar resultados
                </span>{' '}
              </p>

              <h3 className={styles.subtitle}>Importância do TMG</h3>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>1.Garantir a vida</span>{' '}
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>
                  -Identificar complicações precocentes
                </span>{' '}
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>
                  -Atuar rapidamente em situações de emergência
                </span>{' '}
              </p>

              <p className={styles.paragraph}>
                <span className={styles.highlight}>
                  2.Continuidade dos cuidados
                </span>{' '}
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>
                  -Faz ligação entre médico e paciente
                </span>{' '}
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>
                  -Garante que o tratamento seja seguido corretamente
                </span>{' '}
              </p>

              <p className={styles.paragraph}>
                <span className={styles.highlight}>
                  3.Humanização no atendimento
                </span>{' '}
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>
                  -Apoio emocional ao paciente e familiares
                </span>{' '}
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>-Estuta ativa</span>{' '}
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>
                  -Redução do sofrimento
                </span>{' '}
              </p>

              <h3 className={styles.subtitle}>Prevenção de Complicações</h3>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>
                  -Evitar infecções hospitalares
                </span>{' '}
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>
                  -Prevenir úlcera de pressão
                </span>{' '}
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>
                  -Controlar erros de medicação
                </span>{' '}
              </p>

              <h3 className={styles.subtitle}>Educação em Saúde</h3>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>
                  -Ensinar o paciente a se cuidar
                </span>{' '}
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>
                  -Reduzir reinternações
                </span>{' '}
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>
                  -Promover qualidade de vida
                </span>{' '}
              </p>
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
                Planificação e gestão de tempo de trabalho
              </button>

              <div
                className={
                  openLesson === 'Aula02'
                    ? styles.contentOpen
                    : styles.contentClosed
                }
              >
                <p className={styles.paragraph}>
                  <span className={styles.highlight}></span> A gestão do tempo é
                  uma essencial tarefa para um TMG, pois permite garantir um
                  atendimento de qualidade, evita erros clínicos, reduz o stress
                  e aumenta a eficiência nos serviços de saúde.
                </p>

                <h3 className={styles.subtitle}>
                  No contexto hospitalar ou unudade sanitária o tempo deve ser
                  bem distribuido entre:{' '}
                </h3>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    atendimento ao paciente
                  </span>{' '}
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    procedimentos clínicos
                  </span>{' '}
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>Registos</span>{' '}
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Administração de medicamentos
                  </span>{' '}
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Trabalho em equipe
                  </span>{' '}
                </p>

                <h3 className={styles.subtitle}>
                  Identificação de tarefas e Identificação de prioridades
                </h3>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}></span> O TMG deve ser
                  capaz de Identificar todas as tarefas como por exemplo:
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Realizar anamnese
                  </span>{' '}
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Avaliar sinais vitais
                  </span>{' '}
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Administrar medicamentos
                  </span>{' '}
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Preparar materias clínicos
                  </span>{' '}
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>Fazer Curativos</span>{' '}
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Registar informações do paciente
                  </span>{' '}
                </p>

                <h3 className={styles.subtitle}>
                  Clasificação das tarefas quanto a prioridade
                </h3>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}></span> As tarefas podem
                  ser clasificadas em:
                </p>

                <h3 className={styles.subtitle}>Urgentes e importantes</h3>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Atendimento de emergência
                  </span>{' '}
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Paciente em estado crítico
                  </span>{' '}
                </p>

                <h3 className={styles.subtitle}>
                  Importantes mas não Urgentes
                </h3>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Planejamento de cuidados
                  </span>{' '}
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Educação do paciente
                  </span>{' '}
                </p>

                <h3 className={styles.subtitle}>Menos importantes</h3>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Organização de materias
                  </span>{' '}
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Arquivamento de documentos
                  </span>{' '}
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>Exemplo:</span> Um paciente
                  com falta de ar deve ser atendido primeiro.
                </p>

                <h3 className={styles.subtitle}>
                  Gestão do tempo para a execução de tarefas
                </h3>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}></span> O profissional
                  deve:
                </p>

                <h3 className={styles.subtitle}>
                  Estimar o tempo para cada atividade:
                </h3>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Avaliação dos sinais vitais:
                  </span>{' '}
                  5-10 min
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Administração de medicamentos:
                  </span>{' '}
                  10-15 min
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>Curativos:</span> 15-30 min
                </p>

                <h3 className={styles.subtitle}>
                  Identificar o melhor momento do dia:
                </h3>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>Manhã:</span> Maior fluxo
                  de pacientes
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>Tarde:</span> Segmentos de
                  casos
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>Noite:</span> Monitorização
                  e emergências
                </p>

                <h3 className={styles.subtitle}>
                  Organizar o trabalho do dia:
                </h3>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Criar um plano de actividades
                  </span>{' '}
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>Evitar atrasos</span>{' '}
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Minimizar interupções
                  </span>{' '}
                </p>

                <h3 className={styles.subtitle}>
                  Priorização e organização de agendas
                </h3>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}></span> O TMG deve:
                </p>

                <h3 className={styles.subtitle}>Organizar agendas:</h3>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Listar tarefas do dia
                  </span>{' '}
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Definir horários
                  </span>{' '}
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Distribuir atividades
                  </span>{' '}
                </p>

                <h3 className={styles.subtitle}>Priorizar execução:</h3>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Atender primeiro casos mais graves
                  </span>{' '}
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Cumprir horário de medicação
                  </span>{' '}
                </p>

                <h3 className={styles.subtitle}>
                  Rezervar tempo para emprevistos:
                </h3>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Emergências médicas
                  </span>{' '}
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Chamadas de pacientes graves
                  </span>{' '}
                </p>

                <h3 className={styles.subtitle}>Manter agenda atualizada:</h3>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Registar tarefas realizadas
                  </span>{' '}
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Ajustar o plano quando necessário, por exemplo: se surgir
                    uma urgência o técnico deve reorganizar rapdamente a agenda
                  </span>{' '}
                </p>

                <h3 className={styles.subtitle}>
                  Pontualidade e cumprimento de prazos
                </h3>
                <h3 className={styles.subtitle}>
                  Importância da Pontualidade:
                </h3>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Garante continuidade dos cuidados
                  </span>{' '}
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Evita atrazos nos atendimentos
                  </span>{' '}
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Melhora a confiaça do paciente
                  </span>{' '}
                </p>

                <h3 className={styles.subtitle}>cumprimento de prazos:</h3>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Administração de medicamentos no horário correto
                  </span>{' '}
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Emtraga de relatórios
                  </span>{' '}
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Realização de procedimentos no horário previsto
                  </span>{' '}
                </p>

                <h3 className={styles.subtitle}>Razões para ser pontual:</h3>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Ética proficional
                  </span>{' '}
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Responsabilidade
                  </span>{' '}
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Segurança do paciente
                  </span>{' '}
                </p>

                <h3 className={styles.subtitle}>Possíveis causas de atrazo</h3>
                <h3 className={styles.subtitle}>Falta de organização:</h3>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Excesso de tarefas
                  </span>{' '}
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Emergências inesperadas
                  </span>{' '}
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Falta de comunicação
                  </span>{' '}
                </p>

                <h3 className={styles.subtitle}>Consequências do atrazo</h3>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Agravamento do estado do paciente
                  </span>{' '}
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>Erros clínicos</span>{' '}
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Comflitos na equipe
                  </span>{' '}
                </p>

                <h3 className={styles.subtitle}>
                  Registo e organização da informação
                </h3>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}></span> O técnico deve:
                </p>

                <h3 className={styles.subtitle}>
                  Atualizar informações importantes:
                </h3>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Dados do paciente
                  </span>{' '}
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>Sinais vitais</span>{' '}
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Medicamentos administrados
                  </span>{' '}
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Procedimentos realizados
                  </span>{' '}
                </p>

                <h3 className={styles.subtitle}>Organizar a informação</h3>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Utilizar fichas clínicas
                  </span>{' '}
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Registos eletrónicos (se Possíveis)
                  </span>{' '}
                </p>

                <h3 className={styles.subtitle}>Fazer registo em tempo útil</h3>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Evitar esquecer informações
                  </span>{' '}
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Garantir continuidade dos cuidados
                  </span>{' '}
                </p>

                <h3 className={styles.subtitle}>
                  Importância do registo e organização da informação
                </h3>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Facilita a comunicação entre profissionais
                  </span>{' '}
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Serve como prova legal
                  </span>{' '}
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Melhora a qualidade do atendimento
                  </span>{' '}
                </p>

                <h3 className={styles.subtitle}>
                  Aplicação prática no serviço de saúde
                </h3>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}></span> Situações reais:
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}></span> Um TMG inicia o
                  turno e deve:
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Verificar pacientes internados
                  </span>{' '}
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Priorizar os casos mais graves
                  </span>{' '}
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Administrar medicamentos no horário
                  </span>{' '}
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Atender novos pacientes
                  </span>{' '}
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Registar todas as suas realizações
                  </span>{' '}
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}></span> Tudo isso exige boa
                  gestão do tempo e organização.
                </p>
              </div>
            </div>
          </div>
          {/* 
      <h3 className={styles.subtitle}></h3>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>
                
              </span>{' '}

            </p>
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
  );
}
