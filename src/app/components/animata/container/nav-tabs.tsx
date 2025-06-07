'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { HomeIcon } from '@heroicons/react/24/solid';

import { cn } from '@/lib/utils';

interface TabProps {
  text: string;
  selected: boolean;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

export default function NavTabs({ tabs }: { tabs: string[] }) {
  const [selected, setSelected] = useState<string>(tabs[0]);

  return (
    <div
      // style={{
      //   left: '50%',
      //   transform: 'translateX(-50%)',
      //   top: '0',
      //   width: '80vw',
      //   marginTop: '2rem',
      // }}
      className="flex flex-col sm:flex-row bg-slate-900 rounded p-5"
    >
      <div className="flex items-center justify-center sm:w-1/5 sm:mb-0 mb-3 w-full">
        <HomeIcon
          className="h-10 w-10
          cursor-pointer text-yellow-400 hover:text-yellow-200 transition-colors duration-300"
        />
      </div>
      <div className="w-full sm:w-4/5 flex justify-center flex-col sm:flex-row">
        {tabs.map((tab) => (
          <Tab
            text={tab}
            selected={selected === tab}
            setSelected={setSelected}
            key={tab}
          />
        ))}
      </div>
    </div>
  );
}

const Tab = ({ text, selected, setSelected }: TabProps) => {
  return (
    <button
      onClick={(e) => {
        const { target } = e;

        if (target instanceof HTMLParagraphElement) {
          const text = target.innerText;
          const classSet = text.replaceAll(' ', '-').toLowerCase();
          console.log(classSet);
          const element = document.querySelector(`.${classSet}`);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }

        setSelected(text);
      }}
      className={cn(
        'relative rounded-md p-2 text-sm transition-all',
        selected ? 'text-black' : 'text-slate-300 hover:font-black',
      )}
    >
      <p className="relative z-50 min-w-20">{text}</p>
      {selected && (
        <motion.span
          layoutId="tabs"
          transition={{ type: 'spring', duration: 0.5 }}
          className="absolute inset-0 rounded-sm bg-slate-300 from-indigo-600 to-pink-600"
        />
      )}
    </button>
  );
};
