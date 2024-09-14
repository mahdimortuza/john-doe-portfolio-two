import assets from "@/assets";
import Container from "@/components/Container";
import ContainerInner from "@/components/ContainerInner";
import Image from "next/image";

const PortfolioSection = () => {
  return (
    <Container className=" ">
      <ContainerInner>
        <div className="grid grid-cols-[1fr_2fr_1fr] gap-4">
          {/* 1st div */}
          <div className="bg-black p-4">
            <Image src={assets.bgGrid.grid} alt="grid" />
          </div>

          {/* 2nd div, wider but stays in the middle */}
          <div className="bg-blue-200 p-4">Wider Div 2</div>

          {/* 3rd div */}
          <div className="bg-green-200 p-4">Div 3</div>
        </div>
      </ContainerInner>
    </Container>
  );
};

export default PortfolioSection;
