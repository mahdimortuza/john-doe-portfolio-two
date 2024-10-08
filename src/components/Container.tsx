import { ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: TContainerProps) => {
  return (
    <div
      className={`h-full max-w-[1920px] px-[10px] lg:px-[8px] mx-auto ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
