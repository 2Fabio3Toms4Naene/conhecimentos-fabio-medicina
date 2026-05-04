'use client';
import styles from '../sistema-respitatorio/SistemaRespiratorio.module.css';
import styleTheme from '../page.module.css';
import { UseState } from '../statas';
import { useState } from 'react';
import Image from 'next/image';
import TALocaisDeVerificacao from '../../../public/TA-locais-de-verificacao.png';

export default function PrimeirosSocorros() {
  const [openLesson, setOpenLesson] = useState(null);
  const { theme } = UseState();
  return (
    <main
      className={`${styles.main} ${theme ? styleTheme.dark : styleTheme.light}`}
    >
      <h1 className={styles.titlePage}>PRIMEIROS SOCORROS</h1>
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
              Introdução aos primeiros socorros - conceitos fundamentais
            </button>

            <div
              className={
                openLesson === 'Aula01'
                  ? styles.contentOpen
                  : styles.contentClosed
              }
            >
                <p className={styles.paragraph}>
                <span className={styles.highlight}>Primeiros Socorro  </span>
                são os cuidados iniciais que devem ser prestados rapidamente a uma pessoa, vítima de acidentes ou de mal súbito, cujo estado físico põe em perigo a sua vida, com o fim de manter as funções vitais e evitar o agravamento de suas condições, aplicando medidas e procedimentos até a chegada de assistência qualificada. 
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Saúde  </span>
                amplamente adotado pela Organização Mundial da Saúde (OMS), refere-se a um estado de completo bem-estar físico, mental e social, e não apenas à ausência de doença ou enfermidade. Este conceito destaca a importância de uma abordagem integral, considerando a saúde não apenas como a ausência de problemas, mas como um estado de bem-estar em diversos aspectos da vida.
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Bem-estar físico:  </span>
                Refere-se à ausência de doenças, mas também à capacidade funcional do corpo, à energia e à disposição para realizar atividades. 
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Bem-estar mental:  </span>
                Engloba a saúde emocional, cognitiva e psicológica, incluindo a capacidade de lidar com o estresse, a capacidade de tomar decisões e a sensação de bem-estar geral. 
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Bem-estar social:  </span>
                Considera a capacidade de interagir positivamente com o ambiente social, de estabelecer relações saudáveis, de participar ativamente na sociedade e de se sentir integrado e pertencente.
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>doença  </span>
                é uma alteração no estado de saúde, geralmente com sintomas e sinais específicos que indicam um problema.
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
              Sinais Vitais
            </button>

            <div
              className={
                openLesson === 'Aula02'
                  ? styles.contentOpen
                  : styles.contentClosed
              }
            >
                <p className={styles.paragraph}>
                <span className={styles.highlight}>Sinais Vitais  </span>
                São indicadores de vitalidade de um indivíduo.
              </p>

              <h3 className={styles.subtitle}>Tipos de Sinais Vitais</h3>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Temperatura  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Pulso/ Frequência cardíaca  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Respiração/ Frequência respiratória  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Tensão/ Presão Arterial  </span>

              </p>

              <h3 className={styles.subtitle}>Situações em que torna-se indispensável a verificação de sinais</h3>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Durante a admissão do utente no serviço ou enfermaria  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>De acordo com as rotinas de cada serviço ou mediante a prescrição de um clínico;  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Antes e depois de qualquer procedimento cirúrgico e procedimentos invasivos de diagnóstico;  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Antes e depois da administração de medicamentos que afectam a função cardiovascular, respiratória ou a temperatura;  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Sempre que a condição do utente sofrer alterações (intensidade da dor, perda de consciência, etc);  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Antes de outras intervenções que possam alterar os sinais vitais (deambulação, fisioterapia, etc).  </span>

              </p>

              <h3 className={styles.subtitle}><div className={styles.circle}></div>Temperatura corporal</h3>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Temperatura corporal  </span>
                É a medida do calor do corpo.
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Termómetro  </span>
                É o instrumrnto usado para medir a temperatura
              </p>
              <p className={styles.paragraph}>
                Os tipos de termómetro mais usados são:
                <span className={styles.highlight}> digital  </span>
                e de
                <span className={styles.highlight}> mercúrio  </span>

              </p>

              <h4 className={styles.subtitleh4}>Locais de Avaliação da Temperatura</h4>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Boca (oral ou bucal),  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Axilas (é o local mais frequente de verificação)  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Inguinal  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Ouvido  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Recto  </span>

              </p>

              <h4 className={styles.subtitleh4}>Variações normais de temperatura:</h4>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Temperatura axilar:  </span>
                36ºC - 37,4ºC;
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Temperatura oral:  </span>
                36,3ºC - 37,4ºC;
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Temperatura retal:  </span>
                37ºC - 38ºC
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Temperatura Inguinal:  </span>
                36º c- 36,8º C
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Temperatura Auricular:  </span>
                36 a 37,8º C
              </p>

              <h4 className={styles.subtitleh4}>Principais alterações da temperatura:</h4>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Normotermia/Apirexia/Afebril:  </span>
                36 a 37,4º C 
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Hipotermia:  </span>
                Temperatura abaixo de 35,9º C 
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Febrícula:  </span>
                37,5 a 37,9ºC
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Febre:  </span>
                38ºC a 39ºC
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Hipertermia/Pirexia:  </span>
                39,1º a 40º C
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Hiperpirexia:  </span>
                acima de 40º C
              </p>

              <h4 className={styles.subtitleh4}>Material Necessário</h4>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>  </span>
                Tabuleiro ou bandeja para colocar:
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Termómetro  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Relógio de ponteiro  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Algodão  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Alcool a 70%  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Papel e Caneta  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Luvas de procedimento  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Covete  </span>

              </p>

              <h4 className={styles.subtitleh4}>Técnica:</h4>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>1.  </span>
                 Realizar a desinfecção da bandeja com álcool a 70%; 
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>2.  </span>
                Organizar o material necessário em uma bandeja; 
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>3.  </span>
                Realizar a higienização das mãos;
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>4.  </span>
                Explicar o procedimento ao paciente e/ou acompanhante;
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>5.  </span>
                Realizar a desinfecção do termômetro friccionando-o 3 vezes com algodão umedecido com álcool a 70%;
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>6.  </span>
                Se necessário, enxugar a axila do paciente; 
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>7.  </span>
                Colocar o termômetro na região axilar com o bulbo em contato direto na pele do paciente (comprimir o braço e colocá-lo sobre o tórax); 
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>8.  </span>
                Retirar o termômetro após emissão do sinal sonoro e realizar a leitura; 
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>9.  </span>
                Realizar a desinfecção do termômetro friccionando-o 3 vezes com algodão umedecido em álcool a 70% e guarde-o em local apropriado; 
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>10.  </span>
                Recolha o material e mantenha a unidade organizada;
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>11.  </span>
                Lave a bandeja com água e sabão, seque e passe álcool a 70%;
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>12.  </span>
                Higienize as mãos; 
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>13.  </span>
                Anotar o procedimento realizado no prontuário do paciente, registrando o valor da T (ºC). 
              </p>

              <h4 className={styles.subtitleh4}>Cuidados do enfermeiro na hipotermia</h4>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Orientar o utente sobre a importância dos procedimentos a serem realizados para elevar a temperatura;  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Aquecer o utente com agasalhos e cobertores;  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Manter o ambiente aquecido;  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Proporcionar repouso e ingestão de alimentos quentes.  </span>

              </p>

              <h4 className={styles.subtitleh4}>Cuidados do enfermeiro na hipertermia</h4>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Orientar o utente sobre a importância dos procedimentos a serem realizados para reduzir a temperatura;  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Controlar a temperatura com maior frequência até sua estabilização;  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Aumentar a ingestão líquida, se não houver contra-indicação;  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Providenciar banho morno e repouso; o banho morno provoca menos tremores e desconforto que o frio;  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Se febre muito alta, aplicar compressas de água (na temperatura ambiente) durante os calafrios, cobrir o utente e protegê-lo de correntes de ar;  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>No período de transpiração, arejar o ambiente e providenciar roupas leves;  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Fornecer medicação de acordo com a prescrição médica e registar no processo clínico.  </span>

              </p>

              <h4 className={styles.subtitleh4}>Fatores que aumentam a temperatura:</h4>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Exercícios (pelo trabalho muscular);   </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>emoções (estresse e ansiedade);   </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>O uso de agasalhos, pois reduzem a dissipação do calor.  </span>

              </p>

              <h4 className={styles.subtitleh4}>Fatores que diminuem a temperatura:</h4>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Sono e repouso, emoções, desnutrição;   </span>

              </p>

              <h4 className={styles.subtitleh4}>Outros fatores que promovem alterações transitórias da temperatura corporal:</h4>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Fator hormonal (durante o ciclo menstrual, gravidez e climatério), banhos quentes ou frios e ingestão de alimentos e bebidas quentes ou frias.  </span>

              </p>

              <h3 className={styles.subtitle}><div className={styles.circle}></div>Pulso/ Frequência cardíaca</h3>
               <p className={styles.paragraph}>
                <span className={styles.highlight}>Pulso  </span>
                É a contração e a expansão de uma artéria, correspondendo aos batimentos cardíacos.
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>  </span>
                Além da frequência, observar o ritmo e a força que o sangue exerce ao passar pela artéria.
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>  </span>
                A obtenção da frequência cardíaca dá-se através da palpação dos pulsos periféricos e centrais como (radial, poplítea, braquial, femoral, pediosa, temporal, carótida, inguinal, axilar).
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>  </span>
                A ausência do pulso pode indicar uma oclusão arterial. 
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>  </span>
                A avaliação do pulso inclui a determinação da frequência de pulso e a analise de sua qualidade, que inclui ritmo e força.
              </p>

              <h4 className={styles.subtitleh4}>Métodos para a avaliação</h4>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>  </span>
                Existem 2 métodos para a avaliação do pulso:
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Eletrónico:  </span>
                através da monitorização contínua, usado para pacientes internados com indicação.
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Manual:  </span>
                onde são avaliadas as três principais características do pulso, nomeadamente: rítmo, frequência e volume (profundidade/amplitude). 
              </p>

              <h4 className={styles.subtitleh4}>Fatores podem provocar alterações passageiras na frequência cardíaca:</h4>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Emoções, exercícios físicos e alimentação;  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}> Estado de hidratação: nas situações de hemorragia, diarreias severas e vômitos que levam o utente a desidratação o pulso acelera na tentativa de compensar o débito cardíaco; </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Ao longo do ciclo vital seus valores vão se modificando, sendo maiores em crianças e menores nos adultos.   </span>

              </p>

              <h4 className={styles.subtitleh4}>Valores de normalidade do pulso</h4>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Recém-nascido:  </span>
                é, em média, de 120 batimentos por minuto (bpm), podendo chegar aos limites de 70 a 170 bpm.
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Aos 4 anos:  </span>
                a média é de 100 bpm, variando entre 80 e 120 bpm, mantendo-se até os 6 anos; 
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}> {'>'} de 6 anos e até os 12 anos:  </span>
                a média fica em torno de 90 bpm, com variação de 70 a 110 bpm. 
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Aos 18 anos:  </span>
                a medi é de 75 bpm nas mulheres e 70 bpm nos homens, podendo ser de 60 a 100bpm.
              </p>

              <h4 className={styles.subtitleh4}>Características do pulso</h4>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>  </span>
                Quanto ao ritmo pode ser: 
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Regular ou rítmico  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Irregular ou arrítmico: intervalos de pulsações desiguais.  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>  </span>
                Quanta a frequência:
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Taquicardia: pulsações por minuto acima do limite superior normal.  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Bradicardia: pulsações por minuto abaixo do limite superior normal  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>  </span>
                Volume (profundidade):
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Forte, cheio, amplo  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Fraco, filiforme, débil: redução da força ou do volume do pulso.  </span>

              </p>

              <h4 className={styles.subtitleh4}>Principais alterações no pulso</h4>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Normocardia:  </span>
                requência regular, ou seja, o período entre os batimentos se mantém constante, com volume perceptível à pressão moderada dos dedos.
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Bradicardia:  </span>
                frequência cardíaca abaixo da normal;
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Taquicardia:  </span>
                frequência cardíaca acima da normal;
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Taquisfigmia:  </span>
                pulso fino e taquicárdico;
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Bradisfigmia:  </span>
                pulso fino e bradicárdico;
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Filiforme:  </span>
                pulso fino.
              </p>

              <h4 className={styles.subtitleh4}>Material Necessário</h4>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Alcool a 70% para fazer anttissepsia das maos  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Relógio de Ponteiro  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Papel e caneta  </span>

              </p>

              <h4 className={styles.subtitleh4}>Procedimento</h4>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Reunir o material necessário;  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Higienizar as mãos;  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Perguntar o nome completo do paciente a fim de garantir que se trata do paciente certo;  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Apresentar-se, explicar o procedimento e aguardar o consentimento do paciente;  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Orientar o paciente para deitar ou sentar;  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Observar o grau de agitação do paciente e, se for necessário, esperar de 5 a 10 minutos antes de verificar o pulso;  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Pedir que o paciente relaxe e não fale durante a verificação;  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Selecionar e palpar o local (se for o caso, com o membro estendido);  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Contar os batimentos por um minuto;  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Observar o ritmo (regular ou irregular), a frequência e a qualidade do pulso (cheio, normal ou filiforme);  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Comparar os pulsos bilateralmente (quando avaliar o pulso carotídeo palpar um de cada vez);  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Higienizar as mãos;  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Registrar o procedimento e as intercorrências, caso ocorram.  </span>

              </p>

              <h4 className={styles.subtitleh4}><div className={styles.circle}></div>Respiração / Frequência respiratória</h4>

              <p className={styles.paragraph}>
                <span className={styles.highlight}>Respiração  </span>
                É o acto de inspirar e expirar (absorção de oxigénio e eliminação do dióxido de carbono), promovendo a troca gasosa entre o organismo e o ambiente;
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>A frequência respiratória  </span>
                é o numero de ventilações ocorridas a cada minuto.
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>  </span>
                Ela pode ser contada visualmente, pela palpação, colocando-se a mão sobre o tórax do paciente ou, ainda, com a ausculta dos movimentos respiratórios no pulmão com o auxilio de um estetoscópio.
              </p>

              <h4 className={styles.subtitleh4}>Fatores que interferem na respiração</h4>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Atividade física: aumenta a frequência ventilatória;  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Quando o pH está abaixo do normal (acidose) o centro respiratório é excitado, ocorrendo aumento da frequência respiratória;  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Quando o pH está acima do normal (alcalose), o centro respiratório é deprimido, ocorrendo diminuição da frequência respiratória.  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>A ansiedade e os estados ansiosos promovem liberação de adrenalina que, frequentemente levam também à hiperventilação;  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Estresse  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Sexo  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Drogas  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Exercícios  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Quando se soube em alturas, ou em patologias como: pneumonia, tuberculose, câncer de pulmão e outras.  </span>

              </p>

              <h4 className={styles.subtitleh4}>Valores de normalidade</h4>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>RN:  </span>
                40 a 60 mpm ou cr/m (ciclos respiratórios por minuto)
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Lactentes:  </span>
                30 a 40 movimentos por minuto (mpm);
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Criança:  </span>
                20 a 25 mpm
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Adulto:  </span>
                14 a 20 mpm;  Homem: 16 a 18 mpm; Mulher: 18 a 20 mpm
              </p>

              <h4 className={styles.subtitleh4}>Termos usados na respiração</h4>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Eupneia:  </span>
                respiração normal;
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Dispnéia :  </span>
                dificuldade de respirar;
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Ortopnéia:  </span>
                é a incapacidade de respirar facilmente, exceto na posição ereta.
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Taquipnéia:  </span>
                FR rápida e regular;
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Bradipnéia :  </span>
                baixa frequência respiratória;
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Apneia :  </span>
                ausência da respiração;
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Hiperpneia:  </span>
                aumento da FR e amplitude;
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Respiração de Cheyne-Stocks:  </span>
                ritmo regular com alternância de apneia e hiperventilação;
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Respiração de Kussmaul:  </span>
                ritmo regular e profundo;
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Respiração de Biot:  </span>
                apneia por 30 segundos;
              </p>

              <h4 className={styles.subtitleh4}>Técnica de Medição</h4>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Lavar as mãos  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Explicar o procedimento e posicionar o paciente  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Simular medição do pulso  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Contar as FR por minuto, observando movimentos toraxicos e abdominais  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Anotar o valor  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Registar o valor da folha de SV  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Tomar medidas cabiveis em situações de alterações  </span>

              </p>

              <h3 className={styles.subtitle}><div className={styles.circle}></div>Pressão arterial</h3>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>A pressão arterial  </span>
                é a forca exercida sobre a parede de uma artéria pelo sangue pulsante sob a pressão do coração e é medida em milímetros de mercúrio (mmHg).
              </p>
              <p className={styles.paragraph}>
                O pico máximo de pressão no momento de uma ejeção e chamado de pressão

                <span className={styles.highlight}> sistólica.  </span>
              </p>
              <p className={styles.paragraph}>
                Quando os ventrículos relaxam, o sangue que permanece nas artérias exerce uma pressão mínima, chamada de
                <span className={styles.highlight}> diastólica.  </span>

              </p>

              <h4 className={styles.subtitleh4}>Tensão arterial</h4>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>A tensão arteria  </span>
                resulta da força que o sangue exerce sobre as paredes das artérias e depende:
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Do débito cardíaco relacionado à capacidade de o coração impulsionar sangue para as artérias e do volume de sangue circulante;  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Da resistência vascular periférica, determinada pelo lúmen (calibre), elasticidade dos vasos e viscosidade sanguínea (sua consistência resultante das proteínas e células sanguíneas), traduzindo uma força oposta ao fluxo sanguíneo.  </span>

              </p>

              <h4 className={styles.subtitleh4}>Factores que interferem com a TA</h4>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>A TA é mais baixa durante o sono e ao despertar;  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Tabagismo, ingestão de alimentos, exercícios, dor e emoções como medo, ansiedade, raiva e estresse aumentam a TA;  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Estado de hidratação: nas situações de hemorragia, diarreias severas e vômitos que levam o utente a desidratação a TA baixa pela diminuição do débito cardíaco;  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Diabetes, aumento dos níveis de triglicerídeos e colesterol (comum em obesos), a TA aumenta pelo aumento da viscosidade sanguínea e pelo aumento da resistência das artérias.  </span>

              </p>

              <h4 className={styles.subtitleh4}>Locais de verificação da TA</h4>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>A TA  </span>
                 é verificada sobre a artéria braquial; caso o utente esteja impossibilitado dos dois braços (o que é muito incomum) verificar sobre as artérias  poplítea e pediosa; 
              </p>

              <h4 className={styles.subtitleh4}>Posição do utente: Braquial, poplitea e pediosa</h4>
              <Image
                      src={TALocaisDeVerificacao}
                      alt="Locais de verificação da TA"
                      className={styles.image}
                    />

              <h4 className={styles.subtitleh4}>Tipos de aparelhos de medição da TA</h4>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Esfigmomanómetro de coluna de mercúrio, manual, e digital  </span>

              </p>

              <h4 className={styles.subtitleh4}>Valores de normalidade da TA</h4>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>  </span>
                A TA varia ao longo do ciclo vital, aumentando com a idade. 
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Pré-escolar:  </span>
                85/60mmHg;
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Escolar:  </span>
                100/65mmHg;
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>  </span>
                Nos adultos, são considerados normais os parâmetros:
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>pressão sistólica variando de 90 a 140mmHg;  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>pressão diastólica de 60 a 90mmHg.  </span>

              </p>
              <p className={styles.paragraph}>
                Quando a pressão arterial se encontra normal, dizemos que está 
                <span className={styles.highlight}> normotensa.  </span>
              </p>

              <h4 className={styles.subtitleh4}>Itens a serem confirmados antes da verificação da TA</h4>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Não estar com a bexiga cheia;  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Não ter praticado exercícios físicos;  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Não ter ingerido bebidas alcoólicas, café, alimentos, ou ter fumado até 30 minutos antes da medida;  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Ter descansado por 5 a 10 minutos, sentado em ambiente calmo e com temperatura agradável;   </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Relaxar bem o braço, mantendo-o na altura do coração;   </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Não falar durante o procedimento.  </span>

              </p>

              <h4 className={styles.subtitleh4}>Material Necessário</h4>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>  </span>
                Tabuleiro com :
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Estetoscópio  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Esfigmomanómetro  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Alcool a 70% e algodão  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Papel e Caneta  </span>

              </p>

              <h4 className={styles.subtitleh4}>Técnica de Medição</h4>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Lavar as mãos;  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Explicar o procedimento;  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Deixar o paciente descansar por 5 a 10min em ambiente calmo e com temperatura agradável;  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Localizar a artéria;  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Colocar o manguito firme cerca de 2 a 3cm acima da fossa antecubital, centralizando a bolsa de borracha sobre a arteria;  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Manter o braço do paciente na altura do curação;  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Posicionar os olhos no mesmo nível da coluna de mercúrio ou mostrador de manómetro;  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Palpar o pulso e inflar o manguito até seu desaparecimento e acrescer mais 30mmHG a este valor;  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Colocar o estetoscópio nos ouvidos;  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Pedir que o paciente não fale durante o procedimento.  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Inflar rapidamente ate o nível estimado da pressão arterial;  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Proceder a deflação com velocidade constante inicial de 2mmHg a 4mmHg/segundos;  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Determinar a pressão sistólica no momento de aparecimento do primeiro som;   </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Determinar a pressao diastolica no desaparecimento do som;  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Registar os valores;  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Esperar 1 a 2 minutos antes de realizar novas medidas;  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Informar os valores ao paciente;  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Tomar medidas em caso de alteração  </span>

              </p>

              <h4 className={styles.subtitleh4}>Hipertensão arterial</h4>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Hipertensão arterial  </span>
                É o termo usado para indicar pressão arterial acima da normal;
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Hipotensão arterial  </span>
                para indicar pressão arterial abaixo da normal. 
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>  </span>
                A hipertensão arterial é a principal causa de mortalidade materna em todo o mundo. Portanto deve ser controlada:
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Antes da gestação;  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>No pré-natal;  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>No parto;  </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>No puerpério.  </span>

              </p>

              <h4 className={styles.subtitleh4}>Cuidados na prevenção e/ou controle da hipertensão</h4>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Redução do peso corporal;   </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Redução da ingestão de sódio;   </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Maior ingestão de alimentos ricos em potássio (feijões, ervilha, vegetais   de cor verde-escuros, banana, melão, cenoura, beterraba, frutas secas, tomate, batata inglesa e laranja);   </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Redução do consumo de bebidas alcoólicas e do cigarro;   </span>

              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Exercícios físicos regulares (30 min. de caminhadas  diárias);  </span>

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
