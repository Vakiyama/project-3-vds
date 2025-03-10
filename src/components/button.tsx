import { twMerge } from 'tw-merge';

export function Button(props: {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactElement;
  type?: 'primary' | 'secondary';
  className?: string;
}) {
  return (
    <button
      onClick={props.onClick}
      className={twMerge(
        `px-8 py-4 bg-primary rounded-2xl hover transition-colors duration-300 cursor-pointer mr-4 shadow
       ${props.type === 'primary' || props.type === undefined ? 'text-white bg-primary hover:bg-[#b5893e]' : 'text-text bg-white border-primary border-2 hover:bg-primary hover:text-white'}
       ${props.className ? props.className : ''}`
      )}
    >
      {props.children}
    </button>
  );
}
