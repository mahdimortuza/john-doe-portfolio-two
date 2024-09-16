import { ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
  className?: string;
};

const ContainerInner = ({ children, className }: TContainerProps) => {
  return (
    <div
      // max-w-[1530px]
      className={`h-full rounded-[16px] xl:rounded-[32px] mt-[8px] lg:mt-[20px] ${className}`}
    >
      {children}
    </div>
  );
};

export default ContainerInner;
