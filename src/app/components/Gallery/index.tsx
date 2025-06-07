'use client';

import { motion } from 'framer-motion';
import { FeatureCard } from '../animata/hero/product-features';
import { Container } from './styled';

export default function Gallery() {
  const cardWidth = 48 * 4; // w-48 x 4
  const angle = 6;
  const yOffset = 30;
  return (
    <Container id="testimonials" className="sm:p-4 p-5">
      <div className="flex justify-start items-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-whiteColor-2 inline mr-2">
          Alguns dos nossos clientes
        </h1>
      </div>
      <div className="flex lg:flex-row flex-col items-center justify-center w-full h-full p-5 mb-5">
        <FeatureCard
          feature={{
            category: 'Plano 100% Personalizado',
            imageUrl: '/images/capa 1.png',
            title:
              'Treinos adaptados ao seu biotipo, objetivos e disponibilidade',
          }}
          initial={{
            x: cardWidth,
            y: yOffset,
            opacity: 0,
            rotate: 0,
            scale: 0.9,
          }}
          animate={{
            x: yOffset,
            y: 10,
            opacity: 1,
            scale: 0.95,
            rotate: -angle,
            transition: {
              type: 'spring',
              delay: 0.8,
            },
          }}
        />

        <FeatureCard
          feature={{
            category: 'Acompanhamento Especializado',
            title:
              'Correções de movimento + ajustes semanais para acelerar resultados',
            imageUrl: '/images/capa 2.png',
          }}
          initial={{
            y: yOffset,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              type: 'spring',
              delay: 0.4,
            },
          }}
          zIndexOffset={1}
        />

        <FeatureCard
          feature={{
            category: 'Resultados Comprovados',
            title: 'Perdi 8kg em 2 meses com o método!" - Cliente fulaninho',
            imageUrl: '/images/capa 3.png',
          }}
          initial={{
            x: -cardWidth,
            y: yOffset,
            opacity: 0,
            rotate: 0,
            scale: 0.9,
          }}
          animate={{
            x: -yOffset,
            y: 10,
            opacity: 1,
            rotate: angle,
            scale: 0.95,
            transition: {
              type: 'spring',
              delay: 0.6,
            },
          }}
        />
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
          onClick={() => {
            window.open('https://wa.me/351967159669', '_blank');
          }}
        >
          Agende seu treino &rarr;
          <span className="absolute inset-0 -z-10 rounded-full border-b-4 border-solid border-transparent bg-primaryColor-6" />
        </motion.button>
      </motion.div>
    </Container>
  );
}
