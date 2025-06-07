'use client';
import Image from 'next/image';
import React from 'react';

interface CardCommentProps {
  exercice: string;
  descriptionExercice: string;
  result: string;
  descriptionResult: string;
  pathImg?: string;
}

export const CardComment = ({
  exercice,
  result,
  descriptionExercice,
  descriptionResult,
  pathImg,
}: CardCommentProps) => {
  return (
    <div className="storybook-fix group h-48 w-full max-w-md bg-white p-4 shadow">
      <div className="relative flex h-40 flex-col space-y-4 overflow-hidden rounded-md bg-neutral-50 text-black shadow-sm hover:shadow-lg">
        <Image
          className="h-full w-full absolute object-cover brightness-50"
          src={pathImg || ''}
          width={552}
          height={379}
          alt="Sobre mim"
          priority
        />
        <div className="h-fit p-4 transition-all group-hover:-translate-y-1/3">
          <h3 className="text-sm text-whiteColor-1 font-semibold">
            {exercice}{' '}
          </h3>

          <p className="text-sm text-whiteColor-2 font-thin">
            {descriptionExercice}
          </p>
        </div>

        <div className="w-full px-4 opacity-0 transition-all group-hover:-translate-y-1/3 group-hover:opacity-100">
          <div className="h-40 w-full rounded-md bg-primaryColor-6 p-4">
            <h3 className="text-sm font-semibold text-grayColor-5">{result}</h3>
            <p className="text-sm text-grayColor-2">{descriptionResult}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
