"use client";

import { FC, useState } from "react";
import { Button } from "../UI/Button";

export const WelcomePage: FC = () => {
  const [titleAnimation, setTitleAnimation] = useState(false);

  const onGoToSettingsPage = () => {
    setTitleAnimation(true);
  };

  return (
    <div className="w-full flex justify-center flex-col items-center h-screen">
      <div className="w-full flex justify-center">
        <h1
          className={`text-main-text-color text text-4xl font-bold mb-2.5 ${
            titleAnimation && "animate-expand"
          }`}
        >
          The Hat
        </h1>
      </div>
      <div className="w-full flex justify-center flex-col items-center">
        <Button
          className={`mb-2.5 relative ${
            titleAnimation && "animate-button-left"
          }`}
          onClick={onGoToSettingsPage}
          title="New game"
        />
        <Button
          className={`mb-2.5 relative ${
            titleAnimation && "animate-button-right"
          }`}
          onClick={() => {}}
          title="Rules"
        />
      </div>
    </div>
  );
};
