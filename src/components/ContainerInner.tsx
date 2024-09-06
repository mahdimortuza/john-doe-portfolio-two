import { ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
  className?: string;
};

const ContainerInner = ({ children, className }: TContainerProps) => {
  return (
    <div
      className={`h-full w-full max-w-[1525px] mx-auto px-[15px] md:px-[0px] bg-red-300 ${className}`}
    >
      {children}
    </div>
  );
};

export default ContainerInner;
