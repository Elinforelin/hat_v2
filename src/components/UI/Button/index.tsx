import { FC } from "react";

interface ButtonPropsType {
  title: string;
  className: string;
  onClick: () => void;
}
export const Button: FC<ButtonPropsType> = ({ title, className, onClick }) => {
  return (
    <button
      className={`flex p-4 max-w-xs w-full bg-main-color hover:bg-main-color-hover focus:bg-main-color-hover transition duration-300 ease text-main-text-color rounded-3xl align-middle justify-center text-lg ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
