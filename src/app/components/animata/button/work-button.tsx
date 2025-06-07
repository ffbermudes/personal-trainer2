import { WorkButtonProps } from './types';

export default function WorkButton({ text }: WorkButtonProps) {
  return (
    <button className="group relative overflow-hidden rounded-full bg-green-700 px-14 py-4 text-lg transition-all self-center">
      <span className="absolute bottom-0 left-0 h-48 w-full origin-bottom translate-y-full transform overflow-hidden rounded-full bg-white/15 transition-all duration-300 ease-out group-hover:translate-y-14"></span>
      <span className="font-semibold text-purple-200">{text}</span>
    </button>
  );
}
