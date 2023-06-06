import { FC } from "react";

interface ButtonPropsType {
  title: string;
}
export const Button: FC<ButtonPropsType> = ({ title }) => {
  return (
    <button className="flex p-4 max-w-xs w-full bg-main-button text-main-text-color rounded-3xl align-middle justify-center text-lg">
      {title}
    </button>
  );
};
