'use client';
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
            onClick={() =>
              setOpenLesson(openLesson === 'Aula01' ? null : 'Aula01')
            }
          >
            <span
              className={`${styles.arrow}  ${openLesson === 'Aula01' ? styles.arrowOpen : styles.arrowClosed}`}
            >
              ➡️
            </span>
            Aplicação dos princípios éticos e deontológicos
          </button>

          <div
            className={
              openLesson === 'Aula01'
                ? styles.contentOpen
                : styles.contentClosed
            }
          >
            <p className={styles.paragraph}>
              <span className={styles.highlight}>Ética </span>é o saber ser,
              estar e fazer
            </p>

            <h3 className={styles.subtitle}>princípios éticos</h3>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>Autonomia </span>O paciente tem
              o direito de decidir quais tratamentos de saúde prefere, e o
              proficional deve respeitar as decisões do paciente, sem deixar de
              informar o que pode acontecer se um procedimento for feito.
            </p>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>Beneficiência </span>O
              proficional deve agir em benefício do paciente, não tratamdo mal o
              paciente intencionalmente.
            </p>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>Não maleficiência </span>O
              proficional não deve causar dano ao paciente propositadamente por
              assuntos ou sentimentos pessoais.
            </p>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>Confidencialidade </span>O
              proficional não deve expor o diagnóstico, dados ou informações do
              paciente.
            </p>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>Justiça </span>O proficional
              não deve descriminar os pacientes queira pela cor da pele,
              religião, cultura ou classe social
            </p>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>Veracidade </span>O proficional
              deve ser veraz, ou seja, não esconder o diagnóstico real do
              paciente.
            </p>

            <h3 className={styles.subtitle}> Deontologia </h3>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>Deontologia </span>É o saber
              comprir regras, normas e deveres encontrados num local de
              trabalho.
            </p>

            <h3 className={styles.subtitle}>princípios deontológicos</h3>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>
                Respeito pela dignidade humana{' '}
              </span>
              O proficional deve tratar e atender o paciente de uma forma
              humana, não de uma forma desumana
            </p>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>Sigilo proficional </span>O
              proficional deve manter a confidencialidade tanto com as
              informações do paciente como da entidade patronal.
            </p>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>lealdade e honestidade </span>O
              proficional deve leal ao seu superior, mesmo que lhe mande fazer
              algo que está fora da sua formação, tambem deve ser honesto, não
              invendando dados falsos.
            </p>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>-Atualização contínua </span>O
              proficional deve se manter atualizada com a sua área, buscando
              aprender novas doenças e técnicas, não se estagnando com o
              conteúdo da formação.
            </p>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>
                Colaboração interproficional{' '}
              </span>
              Os proficionais devem trabalhar em equipe, não criando
              desentendimentos entre eles, pois isso pode dificultar o trabalho.
            </p>

            <h3 className={styles.subtitle}>Fundamentos éticos</h3>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>Respeito a privacidade </span>O
              proficional deve respeitar as crenças, valores culturaise e
              princípios do paciente.
            </p>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>
                Comfiaça na relação terapeútica{' '}
              </span>
              O paciente deve se sentir a vontade com o proficional, sem medo ou
              constrangimento.
            </p>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>Autonomia </span>O paciente tem
              o direito de decidir o que deve ou não ser feito com a sua saúde.
            </p>

            <h3 className={styles.subtitle}>Fundamentos deontológicos</h3>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>Sigilo </span>O proficional
              deve manter os dados e informações do paciente em segredo, por
              exemplo: HIV+.
            </p>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>Determinação judicial </span>
              No caso de uma prisão o proficional deve manter informado o posto
              policial sobre o quadro clínico do prisioneiro.
            </p>

            <h3 className={styles.subtitle}>
              Consequências da violação do sigilo proficional
            </h3>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>Sansões éticas </span>
              Quando as normas da instituição são violadas o proficional pode
              ser expulso ou aprisionado.
            </p>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>
                Perde de confiança e dados a reputação proficional{' '}
              </span>
              Quando o proficional faz algo que está além das suas competências,
              isto é, por usurpação ele pode ser processado.
            </p>

            <h3 className={styles.subtitle}>Valores e limites morais</h3>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>Respeito </span>O proficional
              deve respeitar os pacientes, não os estranhando ou descriminando.
            </p>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>Empatia </span>O proficional
              deve se colocar no lugar do paciente, sentir a dor do paciente se
              condoendo com ele.
            </p>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>Solidariedade </span>
              Os proficionais devem agir para o bem coletivo, criando ajuda aos
              necessitados por exemplo doando sangue.
            </p>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>Honestidade </span>O
              proficional deve ser transparênte não inventando dados ou
              falsificando de informações.
            </p>

            <h3 className={styles.subtitle}>Limites morais na saúde</h3>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>Limites morais </span>
              São fronteiras éticas que o proficional não deve ultrapasar mesmo
              diante de pressões.
            </p>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>
                Não invadir a privacidade do paciente{' '}
              </span>
            </p>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>
                Não impor valores pessoais{' '}
              </span>
            </p>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>
                Não agir por interece próprio{' '}
              </span>
            </p>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>
                Não omitir informações relevantes{' '}
              </span>
            </p>
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
                Aplicar as normas de humanização na prestação de cuidados de
                saúde
              </button>

              <div
                className={
                  openLesson === 'Aula02'
                    ? styles.contentOpen
                    : styles.contentClosed
                }
              >
                <h3 className={styles.subtitle}>
                  Humanização na prestação de cuidados de saúde
                </h3>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Humanização na saúde{' '}
                  </span>
                  São conjunto de práticas que colocam o ser humano no centro
                  dos cuidados, respeitando sua dignidade, emoções e contexto
                  social.
                </p>

                <h3 className={styles.subtitle}>princípios fundamentais</h3>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Empatia e escuta ativa{' '}
                  </span>
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Comunicação clara e personalizada{' '}
                  </span>
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Respeito a autonomia e as adversidades{' '}
                  </span>
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Ambientes acolhedores e seguros{' '}
                  </span>
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Participação do paciente e da família nos cuidados{' '}
                  </span>
                </p>

                <h3 className={styles.subtitle}>
                  Consequências do otimismo e pecimismo moral
                </h3>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>otimismo moral </span>
                  Estimula a esperançao, a resiliência e a adesão ao tratamento.
                  Também melhora a saúde cardiovascular, imunidade e bem-estar
                  do paciente.
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>Pecimismo moral </span>O
                  pecimismo moral pode gerar desmotivação, desconfiança e baixa
                  adesão ao cuidado, está associada a maior risco de depresão,
                  anciedade, e doenças crónicas, também pode dificultar a
                  relação entre proficional e paciente.
                </p>

                <h3 className={styles.subtitle}>
                  Diretrizes do plano de ação para a humanização
                </h3>
                <h3 className={styles.subtitle}>Principais diretrizes:</h3>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Personalização da comunicação{' '}
                  </span>
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Empatia e compaixão em todos atos clínicos{' '}
                  </span>
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Respeito a autonomia e autodeterminação{' '}
                  </span>
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Criação de ambientes confortáveis e seguros{' '}
                  </span>
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Integração da família no processo de cuidados{' '}
                  </span>
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Capacitação ética e clínica dos proficionais{' '}
                  </span>
                </p>
                <h3 className={styles.subtitle}>
                  Aspeto socioculturais e implicações nos cuidados de saúde
                </h3>
                <h3 className={styles.subtitle}>
                  Fatores socioculturais que influênciam o cuidado
                </h3>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    religião e espiritualidade{' '}
                  </span>
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Tradições familiares e comunitárias{' '}
                  </span>
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Idioma e comunicação{' '}
                  </span>
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Educação e acesso a informação{' '}
                  </span>
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Condições socioculturais{' '}
                  </span>
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
                Reconhecer os aspetos básicos inerentes aos direitos humanos
              </button>

              <div
                className={
                  openLesson === 'Aula03'
                    ? styles.contentOpen
                    : styles.contentClosed
                }
              >
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Os direitos humanos na saúde{' '}
                  </span>
                  garantem que toda pessoa tenha acesso a cuidados e
                  diagnósticos.
                </p>

                <h3 className={styles.subtitle}>
                  Os direitos humanos na saúde incluem:
                </h3>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Direito a vida e a saúde{' '}
                  </span>
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Acesso Universal e igualitário aos serviços da saúde{' '}
                  </span>
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Privacidade e confidencialidade{' '}
                  </span>
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Concentimento informado{' '}
                  </span>
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Tratamento respeitoso e não descriminatório{' '}
                  </span>
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Participação ativa nas decisões sobre os próprios
                    cuidados{' '}
                  </span>
                </p>

                <h3 className={styles.subtitle}>Deveres humanos na saúde</h3>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Os deveres humanos na saúde{' '}
                  </span>
                  são responsabilidades éticas e legais que garantem o
                  funciionamento justo e seguro dos sistemas da saúde.
                </p>

                <h3 className={styles.subtitle}>
                  Deveres dos proficionais na saúde
                </h3>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Prestar serviços com competências, ética e respeito{' '}
                  </span>
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Manter sigilo proficional{' '}
                  </span>
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Se atualizar continuamente{' '}
                  </span>
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Respeitar as advercidades culturais e direitos humanos{' '}
                  </span>
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Reportar situações que comprometam a segurança do
                    paciente{' '}
                  </span>
                </p>

                <h3 className={styles.subtitle}>
                  Deveres dos usuários ou pacientes
                </h3>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Fornrcer informações verdadeiras sobre sua saúde{' '}
                  </span>
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Respeitar os proficionais e os demais usuários{' '}
                  </span>
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    SEguir orientações médicas e terapeúticas{' '}
                  </span>
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Utilizar os serviços de forma responsavel{' '}
                  </span>
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
                Promover ações que visam evitar estigmatização e descriminação
              </button>

              <div
                className={
                  openLesson === 'Aula04'
                    ? styles.contentOpen
                    : styles.contentClosed
                }
              >
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>Estigmatização </span>é o
                  processo de tirar conclusões de uma pessoa por causa de suas
                  caraterísticas ou condição, EX: HIV, transtorno mental,
                  obesidade, e isso pode levar a exclusão social, vergonha e
                  isolamento.
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>Descriminação </span>É a
                  prática de negar direito ou tratar alguém de forma injusta sem
                  base e preconceituosamente. A descriminação pode ocorrer por
                  raça, etnia, orientação sexual, condição de saúde e condição
                  social.
                </p>

                <h3 className={styles.subtitle}>
                  Reconhecer os valores e dignidade humana
                </h3>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Todo ser humano tem o direito de ser tratado com repeito,
                    empatia e justiça independentimente da sua condição de
                    saúde, origem, identidade ou crença{' '}
                  </span>
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    A dignidade humana é um princípio ético legal que deve
                    influenciar e orientar todas as práticas da saúde{' '}
                  </span>
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    O reconhecimento da dignidade humana é a base para evitar
                    julgamentos, preconceito e descriminação{' '}
                  </span>
                </p>

                <h3 className={styles.subtitle}>Tipos de descriminação</h3>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Descriminação institucional{' '}
                  </span>
                  Negação de serviços ou tratamento diferenciado nos hostipais
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Descriminação interpesoal{' '}
                  </span>
                  Envolve comentários ofencivos, exclusão social e maus tratos
                </p>

                <h3 className={styles.subtitle}>Tipos de estigmatização</h3>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>Auto estigmatização </span>
                  é quando o próprio paciente é preconceituoso com sigo mesmo e
                  se
                </p>

                <h3 className={styles.subtitle}>
                  orientação do proficional quanto a estigmatização e
                  descriminação
                </h3>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}> </span>
                  Ação recomendada:
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Escuta ativa e conhecimento sem julgamento{' '}
                  </span>
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Encaminhamento para o apoio psicológico{' '}
                  </span>
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Educação de saúde sobre direitos e combate a
                    preconceito{' '}
                  </span>
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Fortalecimento da auto estima do paciente{' '}
                  </span>
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Garantia de sigilo e privacidade{' '}
                  </span>
                </p>

                <h3 className={styles.subtitle}>
                  Medidas para combater a descriminação do paciente com HIV
                  positivo
                </h3>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}> </span>
                  Boa prática:
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Capacitação contínua dos proficionais{' '}
                  </span>
                </p>
                <p className={styles.paragraph}>
                  <span className={styles.highlight}>
                    Ambientes seguros e sem julgamenmtos nos serviços de
                    saúde{' '}
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* 
          <h3 className={styles.subtitle}></h3>
            <p className={styles.paragraph}>
              <span className={styles.highlight}> </span>
              
            </p>
      <div className={styles.containerDisease}>
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
