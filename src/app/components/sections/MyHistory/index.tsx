'use client';

import { Container, Content, Picture } from './styled';
import { CheckIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function MyHistory() {
  return (
    <Container id="aboutMe" className="flex flex-col">
      <div className="flex xl:flex-row flex-col w-full justify-center items-center">
        <Content className="lg:border-r-4 border-dashed border-primaryColor-2">
          <h3 className="text-3xl sm:text-4xl font-bold text-whiteColor-1 mb-4">
            Sobre Mim
          </h3>
          <h4 className="text-1xl sm:text-2xl font-normal text-whiteColor-1 mb-4">
            Formações
          </h4>

          <div className="space-y-4 mb-6">
            <div className="flex">
              <CheckIcon className="h-6 w-6 text-whiteColor-2 inline-block me-3 self-center" />
              <div className="flex flex-col">
                <div className="mb-3">
                  <h3 className="sm:text-lg text-base font-semibold text-whiteColor-2 inline-block">
                    Minha pessoa
                  </h3>
                  <p className="text-whiteColor-2 inline-block m-auto ms-3 text-base italic px-3">
                    Sou mãe de dois filhos e carrego comigo a missão de cuidar —
                    não apenas do corpo, mas da alma, da mente e da energia
                    vital que nos move.
                  </p>
                </div>

                <div className="mb-3">
                  <h3 className="sm:text-lg text-base font-semibold text-whiteColor-2 inline-block">
                    Formação técnica
                  </h3>
                  <p className="text-whiteColor-2 inline-block m-auto ms-3 text-base italic px-3">
                    Sou formada em Personal Trainer pela Promofitness – Técnica
                    do Exercício Físico, e atuo como professora de aulas de
                    grupo como Bumbum, GAP, HIIT, Body & Mind e Yoga.
                  </p>
                </div>

                <div className="mb-3">
                  <h3 className="sm:text-lg text-base font-semibold text-whiteColor-2 inline-block">
                    Como eu enxergo meu trabalho ?
                  </h3>
                  <p className="text-whiteColor-2 inline-block m-auto ms-3 text-base italic px-3">
                    Com uma abordagem que vai além do físico, cada aula que você
                    terá é uma oportunidade de reconexão profunda: com sua força
                    interna, com o movimento consciente e com a sabedoria do seu
                    próprio corpo. Estou finalizando minha formação em Terapia
                    Holística, e isso me permite integrar o cuidado energético e
                    emocional à sua saúde integral, fundamentando todo o meu
                    trabalho na conexão com a natureza, os ciclos da vida e as
                    tradições ancestrais.
                  </p>
                  <p className="text-whiteColor-2 inline-block m-auto ms-3 text-base italic px-3">
                    Eu realmente acredito que o corpo fala, e escutá-lo é um ato
                    de amor. Minha sensibilidade foi aprimorada pela minha
                    experiência anterior em Visual Merchandising, e agora a uso
                    para guiar você no despertar do seu poder único. Faço isso
                    com técnica, intuição e presença, transformando cada treino
                    em um ritual e cada conquista em uma celebração.
                  </p>
                </div>
                <p className="text-whiteColor-2 inline-block m-auto ms-3 text-base italic px-3">
                  Cada aula é uma oportunidade de reconexão: com a força
                  interna, com o movimento consciente e com a sabedoria do
                  corpo. Minha jornada vai além do físico. Estou concluindo
                  minha formação em Terapia Holística, aprofundando-me em
                  práticas que unem o cuidado energético e emocional à saúde
                  integral. Trago na minha essência a conexão com as forças da
                  natureza, com os ciclos da vida e com as tradições ancestrais
                  que inspiram meu trabalho diário. Acredito que o corpo fala, e
                  escutá-lo é um ato de amor. Antes de entrar no mundo do
                  movimento, trabalhei durante anos com Visual Merchandising em
                  grandes lojas, sempre em contato com pessoas, criando
                  experiências através do olhar, do detalhe e da energia
                  presente nos espaços. Essa sensibilidade continua viva em tudo
                  o que faço. Acredito que cada mulher carrega dentro de si um
                  poder único. Meu trabalho é guiar esse despertar — com
                  técnica, intuição e presença. No meu espaço, cada ciclo é
                  sagrado, cada treino é ritual, e cada conquista, uma
                  celebração. Se você sente o chamado para transformar-se de
                  dentro pra fora, será um prazer caminhar ao seu lado.
                </p>
              </div>
            </div>
          </div>
        </Content>
        <Picture className="rounded-full overflow-hidden flex justify-center">
          <div
            style={{
              width: '90%',
              borderRadius: '15px',
              overflow: 'hidden',
            }}
          >
            <Image
              width={676}
              height={811}
              quality={100}
              src={'/images/img-fisiculturismo.png'}
              alt="Imagem de fisiculturismo"
              style={{
                width: '100%',
                objectFit: 'cover',
                objectPosition: 'top',
              }}
            />
          </div>
        </Picture>
      </div>
      <motion.div
        className="flex justify-center items-center m-5"
        initial={{
          x: 100,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 1.5,
          },
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.button
          onClick={() => {
            window.open('https://wa.me/351967159669', '_blank');
          }}
          className="box-border inline-block h-11 transform-gpu cursor-pointer touch-manipulation whitespace-nowrap rounded-full border-b-4 border-solid border-transparent bg-primaryColor-5 px-4 py-3 text-center text-sm font-bold uppercase leading-5 tracking-wider text-grayPrimary-5 shadow-2xl outline-none transition-all duration-200 hover:brightness-110 active:border-b-0 active:border-t-4 active:bg-none disabled:cursor-auto w-96"
          role="button"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 1,
          }}
        >
          Agende seu treino &rarr;
          <span className="absolute inset-0 -z-10 rounded-full border-b-4 border-solid border-transparent bg-primaryColor-6" />
        </motion.button>
      </motion.div>
    </Container>
  );
}
