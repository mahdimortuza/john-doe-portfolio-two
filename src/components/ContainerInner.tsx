import { ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
  className?: string;
};

const ContainerInner = ({ children, className }: TContainerProps) => {
  return (
    <div
      // max-w-[1530px]
      className={`h-full bg-[#fff] rounded-[32px] ${className}`}
    >
      {children}
    </div>
  );
};

export default ContainerInner;
