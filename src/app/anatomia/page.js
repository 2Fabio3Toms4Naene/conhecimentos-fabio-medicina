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

              <h3 className={styles.subtitle}>Mecanismos da Homeostase</h3>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Feedback negativo  </span>
                é o mecanismo interno que inverte a situação, se estiver frio ajuda o corpo a se aquecer, se estiver esquentando ajuda o corpo a se esfriar.
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Feedback positivo  </span>
                é o mecanismo interno que intencifica a resposta, se estiver esquentando aumento o esquentamento. EX: Durante o parto a temperatura aumenta até o bebé nascer.
              </p>

              <h3 className={styles.subtitle}>Importância da Homeostase</h3>
               <p className={styles.paragraph}>
                <span className={styles.highlight}>A Homeostase tem a importância de garantir que o corpo se adapte a novas adversidades  </span>

              </p>
               <p className={styles.paragraph}>
                <span className={styles.highlight}>A Homeostase garante o ambiente favoravel para as atividades das células, desta forma garantindo a vida  </span>

              </p>
            </div>
          </div>
        </div>

        <div className={styles.containerDisease}>
          <div>
            <button
              className={styles.disease}
              onClick={() =>
                setOpenLesson(openLesson === 'Aula05' ? null : 'Aula05')
              }
            >
              <span
                className={`${styles.arrow}  ${openLesson === 'Aula05' ? styles.arrowOpen : styles.arrowClosed}`}
              >
                ➡️
              </span>
              Planos e eixos anatómicos
            </button>

            <div
              className={
                openLesson === 'Aula05'
                  ? styles.contentOpen
                  : styles.contentClosed
              }
            >
              <h3 className={styles.subtitle}>Planos anatómicos</h3>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Planos anatómicos  </span>
                são divisões imaginárias do corpo humano usadas para separar o corpo em partes.
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>  </span>
                Os Planos anatómicos são:
              </p>
              <table className={styles.table}>
                <thead className={styles.thead}>
                <tr className={styles.tr}>
                  <th className={styles.th}> Plano sagital/vertical </th>
                  <th className={styles.th}>Plano transversal/horizontal  </th>
                  <th className={styles.th}>Plano frontal </th>
                </tr>
                </thead>
                <tbody className={styles.tbody}>
                  <tr className={styles.tr}>
                    <td className={styles.td}> Divide o corpo em lado direito e esquerdo </td>
                    <td className={styles.td}> Divide o corpo em parte superior e parte inferior </td>
                    <td className={styles.td}> Divide o corpo em parte anterior(frente) e posterior(trás)</td>
                  </tr>
                </tbody>
              </table>

              <h3 className={styles.subtitle}>Importância dos Planos anatómicos</h3>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Facilitam a localização dos órgãos e estruturas  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Ajudam nos exames médicos como Raio-X  </span>

              </p>

              <h3 className={styles.subtitle}>Eixos anatómicos</h3>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Eixos anatómicos  </span>
                são linhas imaginárias que atravesam o corpo humano e servem como referência para descrever movimentos.
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>  </span>
                Eixos anatómicos e seus movimentos:
              </p>
              <table className={styles.table}>
                <thead className={styles.thead}>
                <tr className={styles.tr}>
                  <th className={styles.th}> Eixo transversal/horizontal </th>
                  <th className={styles.th}>Eixo sagital </th>
                  <th className={styles.th}>Eixo longitudinal/vertical </th>
                </tr>
                </thead>
                <tbody className={styles.tbody}>
                  <tr className={styles.tr}>
                    <td className={styles.td}>Flexão (EX: dobrar), Extensão (EX: esticar o braço ou a perna) </td>
                    <td className={styles.td}>Abdução (EX: afastar do corpo), Adução (EX: aproximar do corpo) </td>
                    <td className={styles.td}>Rotação (EX: virar a cabeça para os lados) </td>
                  </tr>
                </tbody>
              </table>

              <h3 className={styles.subtitle}>Importância dos eixos anatómicos</h3>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Permitem descrever movimentos com precisão  </span>

              </p>
            </div>
          </div>
        </div>

        <div className={styles.containerDisease}>
          <div>
            <button
              className={styles.disease}
              onClick={() =>
                setOpenLesson(openLesson === 'Aula06' ? null : 'Aula06')
              }
            >
              <span
                className={`${styles.arrow}  ${openLesson === 'Aula06' ? styles.arrowOpen : styles.arrowClosed}`}
              >
                ➡️
              </span>
              Estrutura da pele - Epiderme, Derme, Hipoderme
            </button>

            <div
              className={
                openLesson === 'Aula06'
                  ? styles.contentOpen
                  : styles.contentClosed
              }
            >
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Apele  </span>
                é o maior órgão do corpo e tem funções vitais para a sobrevivência
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>  </span>
                A pele tem as seguintes funções gerais:
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Proteger o corpo contra agrassores externos  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Manter o equilíbrio interno (Homeostase)  </span>

              </p>

              <h3 className={styles.subtitle}>Estrutura da pele</h3>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>  </span>
                A pele é formada por três camadas principais:
              </p>
              <h4 className={styles.subtitleh4}><div className={styles.circle}></div>Epiderme (camada mais externa)</h4>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>  </span>
                Características da epiderme
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Camada superficial  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Não tem vasos sanguíneos  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Formadas por células chamadas queratinócitos  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Rica em queratina (proteina de proteção)  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>  </span>
                Elementos ou tecidos da epiderme
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Poros, pelos, camada queratinizada e terminação nervosa  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>  </span>
                funções da epiderme
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>proteção contra microrganismos  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Evita perda de água  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>proteção contra raios solares  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>EX:  </span>
                quando a pele descasca após queimadura solar, é a epiderme que é afetada
              </p>

              <h4 className={styles.subtitleh4}><div className={styles.circle}></div>Derme</h4>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>  </span>
                Características da derme
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}> Fica abaixo da epiderme </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Rica em vasos sanguíneos  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}> Contem nersos, grândulas e folículo piloso </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>  </span>
                Tecidos da derme
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Glândulas sudoríparas e sebaceas, músculo eretor do pelo, folículo piloso  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>  </span>
                funções da derme
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Sensibilidade (dor, calor, frio)  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}> Nutrição da epiderme </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Regulação da temperatura corporal  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>EX:  </span>
                Quando sentimos dor ao tocar algo quente - os nervos da derme estm atuando
              </p>

              <h4 className={styles.subtitleh4}><div className={styles.circle}></div>Hipoderme (camada mais profunda)</h4>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>  </span>
                Características da Hipoderme
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Camada mais interna  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Rica em gordura (tecido adiposo)  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Liga a pele aos músculos e os ossos  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>  </span>
                Tecidos da Hipoderme
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Veias, artérias, tecido adiposo  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>  </span>
                funções da Hipoderme
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Reserva de energia (gordura)  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>proteção contra inpactos  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Isolamento térmico (mantem o calor do corpo)  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}> EX: </span>
                Pessoas com mais gordura corporal sentem menos frio devido a Hipoderme
              </p>

              <h3 className={styles.subtitle}>Resumo</h3>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Epiderme  </span>
                proteção
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Derme  </span>
                semsibilidade e nutrição
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Hipoderme  </span>
                reserva e proteção profunda
              </p>
            </div>
          </div>
        </div>

        <div className={styles.containerDisease}>
          <div>
            <button
              className={styles.disease}
              onClick={() =>
                setOpenLesson(openLesson === 'Aula07' ? null : 'Aula07')
              }
            >
              <span
                className={`${styles.arrow}  ${openLesson === 'Aula07' ? styles.arrowOpen : styles.arrowClosed}`}
              >
                ➡️
              </span>
              Anexos da pele - Pelos, Unhas, Glândulas
            </button>

            <div
              className={
                openLesson === 'Aula07'
                  ? styles.contentOpen
                  : styles.contentClosed
              }
            >
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Anexos da pele  </span>
                São estruturas derivadas da epiderme que desempenham funções importantes como:
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Proteção  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Termoregulação  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Lunrificação  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Sensibilidade  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Excreção  </span>

              </p>

              <p className={styles.paragraph}>
                <span className={styles.highlight}>  </span>
                Os principais anexos da pele são:
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Pelos  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Unhas  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Glândulas cutáneas  </span>

              </p>

              <h4 className={styles.subtitleh4}><div className={styles.circle}></div>Pelos</h4>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Pelos  </span>
                são estruturas queratinizadas que se desemvolvem a partir dos folículos pilosos
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>  </span>
                Estrutura dos pelos
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Haste do pelo (parte visível)  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}> Raiz (parte interna) </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Bulbo piloso  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>papila dérmica  </span>

              </p>

              <p className={styles.paragraph}>
                <span className={styles.highlight}>  </span>
                Funçoões dos pelos
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Proteção  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}> Termoregulação </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Sensibilidade tátil  </span>

              </p>

              <p className={styles.paragraph}>
                <span className={styles.highlight}>  </span>
                Fases do crescimento dos pelos
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Anágena (crescimento)  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Catágena (transcrição)  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Telógena (repouso)  </span>

              </p>

              <h4 className={styles.subtitleh4}><div className={styles.circle}></div>Unhas</h4>
              <p className={styles.paragraph}>
                <span className={styles.highlight}> Unhas </span>
                são placas de queratina dura localizadas nas extremidades dos dedos
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>  </span>
                Estrutura da Unha
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Matriz ungueal (crescimento)  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Lúnula  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Lámina ungueal  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Cutícula  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>  </span>
                Funçoões das Unhas
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}> Proteção dos dedos </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Auxílio para segurar objetos  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Função estética e sensorial  </span>

              </p>

              <h4 className={styles.subtitleh4}><div className={styles.circle}></div>Glândulas da pele</h4>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>  </span>
                Glândulas sebáceas
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Produzem sebo  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Asspciados ao folículo piloso  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}> Função: lubrificação da pele e dos pelos </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>  </span>
                Glândulas sudoríparas écrinas
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Distribuidas por quase toda pele  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Produzem suor aquoso  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Função: Termoregulação  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>  </span>
                Glândulas sudoríparas apócrinas
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}> Localizadas em axilas e região genital </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}> Produzem secresão mais espesa </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Ativas na puberdade  </span>

              </p>

              <h3 className={styles.subtitle}>Funçoões gerais dos anexos</h3>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Proteção contra agentes externos  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Regulação da temperatura corporal  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Excreção de substâncias  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Sensibilidade ao toque  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Comunicação (Odor corporal)  </span>

              </p>
            </div>
          </div>
        </div>
        {/* 
        <h3 className={styles.subtitle}></h3>
        <h4 className={styles.subtitleh4}><div className={styles.circle}></div></h4>
        <div className={styles.circle}></div>
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
