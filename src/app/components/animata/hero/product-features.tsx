'use client';

import { ReactNode } from 'react';
import Image from 'next/image';
import {
  HTMLMotionProps,
  motion,
  useSpring,
  useTransform,
} from 'framer-motion';
import Balancer from 'react-wrap-balancer';

import { cn } from '@/lib/utils';
import { Container } from './styled';

interface FeatureCardProps extends HTMLMotionProps<'div'> {
  feature: {
    title: ReactNode;
    category: string;
    imageUrl: string;
  };
  zIndexOffset?: number;
}

export function FeatureCard({
  feature,
  className,
  zIndexOffset = 0,
  ...props
}: FeatureCardProps) {
  const { title, category, imageUrl } = feature;
  const springValue = useSpring(0, {
    bounce: 0,
  });
  const zIndex = useTransform(
    springValue,
    (value) => +Math.floor(value * 10) + 10 + zIndexOffset,
  );
  const scale = useTransform(springValue, [0, 1], [1, 1.1]);

  const content = (
    <>
      <Image
        src={imageUrl}
        alt=""
        className="-z-1 absolute inset-0 h-full w-full object-cover"
        fill
      />

      <div className="z-10 flex h-full w-full flex-col gap-2 bg-gradient-to-t from-zinc-800/40 from-15% to-transparent p-3">
        <small className="inline w-fit rounded-xl bg-orange-950 bg-opacity-50 px-2 py-1 text-xs font-medium leading-none text-white">
          {category}
        </small>

        <div className="flex-1" />
        <h3 className="rounded-xl bg-blue-950 bg-opacity-30 p-3 text-base font-bold leading-none text-white backdrop-blur-sm">
          {title}
        </h3>
      </div>
    </>
  );

  const containerClassName = cn(
    'relative flex h-64 w-48 flex-col overflow-hidden rounded-2xl shadow-none transition-shadow duration-300 ease-in-out hover:shadow-xl',
    className,
  );

  return (
    <div className="mb-3 sm:mb-0">
      <motion.div
        onMouseEnter={() => springValue.set(1)}
        onMouseLeave={() => springValue.set(0)}
        style={{
          zIndex,
          scale,
        }}
        className={cn(containerClassName, 'hidden sm:flex')}
        {...props}
      >
        {content}
      </motion.div>
      <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 0, transition: { duration: 0.5 } }}
        className={cn(containerClassName, 'flex sm:hidden')}
      >
        {content}
      </motion.div>
    </div>
  );
}

export default function ProductFeatures() {
  return (
    <Container className="storybook-fix relative flex w-full flex-col items-center gap-4 bg-slate-300 py-10 mb-32">
      {/* GIF */}
      <div className="absolute inset-0 h-full w-full">
        <Image
          className="h-full w-full object-cover"
          width={800}
          height={450}
          src="/gif/ezgif-780017876d266d.gif"
          alt="Exercice animation"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      {/* FIM GIF */}

      <div className="relative z-10 flex w-full flex-col items-center gap-4">
        <motion.header
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
          className="flex max-w-md flex-col items-center gap-2 text-center"
        >
          <h1
            className="font-bold sm:text-5xl text-4xl"
            style={{ color: '#D59EC8' }}
          >
            Treinos feitos sob medida
          </h1>
          <Balancer className="text-base sm:text-lg text- mt-2 opacity-80 italic text-primaryColor-9">
            Do iniciante ao avançado, resultados que você pode ver (e sentir!)
            em semanas
          </Balancer>
        </motion.header>

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
            className="box-border inline-block h-11 transform-gpu cursor-pointer touch-manipulation whitespace-nowrap rounded-full border-b-4 border-solid border-transparent bg-primaryColor-9 px-4 py-3 text-center text-sm font-bold uppercase leading-5 tracking-wider text-white shadow-2xl outline-none transition-all duration-200 hover:brightness-110 active:border-b-0 active:border-t-4 active:bg-none disabled:cursor-auto"
            role="button"
            onClick={() => {
              window.open('https://wa.me/351967159669', '_blank');
            }}
          >
            Agende seu treino &rarr;
            <span className="absolute inset-0 -z-10 rounded-full border-b-4 border-solid border-transparent bg-primaryColor-3" />
          </button>
        </motion.div>
      </div>
    </Container>
  );
}
