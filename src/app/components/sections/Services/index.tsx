'use client';
import { CardComment } from '../../animata/card/card-comment';
import { Container } from './styled';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <>
      <Container id="services" className="flex flex-col items-center w-full">
        <div className="mb-5">
          <h1 className="text-3xl sm:text-4xl font-bold text-whiteColor-1 mb-2">
            Nossos serviços
          </h1>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          <CardComment
            exercice="Exercícios de chão"
            descriptionExercice="Melhora a força e resistência muscular"
            result="Melhora sua flexibilidade e agilidade no dia a dia"
            descriptionResult="Aumenta a capacidade de realizar atividades diárias com mais facilidade e conforto."
            pathImg="/images/floor-exercise.jpeg"
          />
          <CardComment
            exercice="Treinamento Funcional"
            descriptionExercice="Foco em movimentos naturais do corpo"
            result="Aumenta a coordenação e equilíbrio"
            descriptionResult="Ajuda a prevenir lesões e melhora a performance em atividades cotidianas."
            pathImg="/images/functional-exercise.jpeg"
          />
          <CardComment
            exercice="Treino de Cardio"
            descriptionExercice="Exercícios aeróbicos para o coração"
            result="Melhora a saúde cardiovascular"
            descriptionResult="Reduz o risco de doenças cardíacas e melhora a resistência física."
            pathImg="/images/runner.jpeg"
          />
          <CardComment
            exercice="Treino de Força"
            descriptionExercice="Uso de pesos e resistência"
            result="Aumenta a massa muscular"
            descriptionResult="Fortalece os ossos e melhora a postura corporal."
            pathImg="/images/strenght-exercise.jpeg"
          />
          <CardComment
            exercice="Alongamento"
            descriptionExercice="Exercícios para relaxar os músculos"
            result="Melhora a flexibilidade"
            descriptionResult="Reduz tensões musculares e melhora a circulação sanguínea."
            pathImg="/images/alongamento-exercise.jpeg"
          />
        </div>
        <div className="w-full flex justify-center mt-10">
          <motion.div
            initial={{
              y: 100,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.5,
              },
            }}
          >
            <button
              className="box-border inline-block h-14 min-w-[220px] px-8 py-4 text-lg transform-gpu cursor-pointer touch-manipulation whitespace-nowrap rounded-full border-b-4 border-solid border-transparent bg-primaryColor-5 text-center font-bold uppercase leading-6 tracking-wider text-grayPrimary-5 shadow-2xl outline-none transition-all duration-200 hover:brightness-110 active:border-b-0 active:border-t-4 active:bg-none disabled:cursor-auto mb-11"
              role="button"
              onClick={() => {
                window.open('https://wa.me/351967159669', '_blank');
              }}
            >
              Agende seu treino &rarr;
              <span className="absolute inset-0 -z-10 rounded-full border-b-4 border-solid border-transparent bg-primaryColor-6" />
            </button>
          </motion.div>
        </div>
      </Container>
    </>
  );
};

export default Services;
