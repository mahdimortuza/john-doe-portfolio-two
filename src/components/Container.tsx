import { ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: TContainerProps) => {
  return (
    <div
      className={`h-full w-full max-w-[1920px] px-[10px] lg:px-[20px] mx-auto bg-red-500${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
