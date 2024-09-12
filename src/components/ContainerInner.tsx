import { ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
  className?: string;
};

const ContainerInner = ({ children, className }: TContainerProps) => {
  return (
    <div
      // max-w-[1530px]
      className={`h-full rounded-[32px] mb-[8px] lg:mb-[20px] ${className}`}
    >
      {children}
    </div>
  );
};

export default ContainerInner;
