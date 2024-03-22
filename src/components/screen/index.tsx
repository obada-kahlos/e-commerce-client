import { ReactNode } from "react";

export const Screen = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={
        "w-full sm:h-[calc(100vh-80px)] h-auto dark:bg-dark_bg_color bg-light_bg_color dark:text-[#fff] text-[#000] flex items-center justify-center flex-col"
      }
    >
      {children}
    </div>
  );
};
