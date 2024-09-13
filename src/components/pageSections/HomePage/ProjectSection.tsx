import assets from "@/assets";
import Container from "@/components/Container";
import ContainerInner from "@/components/ContainerInner";
import { inter, openSans } from "@/components/ui/fonts";
import Image from "next/image";

const ProjectSection = () => {
  return (
    <Container className=" ">
      <ContainerInner className="bg-[#fff]">
        <div
          id="portfolio"
          className="max-w-[1530px] py-[48px] xl:py-[100px] px-[10px] mx-auto"
        >
          {/* left side container holder */}
          <div className="grid grid-cols-3 bg-red-200">
            {/* 1st single project card  */}
            <div className="group cursor-pointer p-[20px] bg-[#DCDEE5] rounded-[34px] w-[365px] h-[382px]">
              <div className="relative w-full h-full rounded-[20px] overflow-hidden">
                {/* Image zoom wrapper */}
                <div className="absolute inset-0 transform transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={assets.projects.project1}
                    alt="project image"
                    fill={true}
                    className="object-cover rounded-[20px]"
                  />
                </div>

                {/* Shadow gradient from bottom to top, appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Text content */}
                <div className="absolute bottom-[24px] left-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h1
                    className={`${openSans.className} font-openSans text-white text-[20px] font-[600] leading-[140%] capitalize`}
                  >
                    apps design
                  </h1>
                  <p
                    className={`${inter.className} font-inter text-white text-[16px] font-[400] leading-[150%] capitalize`}
                  >
                    john doe creative designer
                  </p>
                </div>
              </div>
            </div>

            {/* section title card goes here  */}
            <div className="group cursor-pointer p-[20px] bg-[#DCDEE5] rounded-[34px] w-[365px] h-[382px]">
              <div className="relative w-full h-full rounded-[20px] overflow-hidden">
                {/* Image zoom wrapper */}
                <div className="absolute inset-0 transform transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={assets.projects.project1}
                    alt="project image"
                    fill={true}
                    className="object-cover rounded-[20px]"
                  />
                </div>

                {/* Shadow gradient from bottom to top, appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Text content */}
                <div className="absolute bottom-[24px] left-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h1
                    className={`${openSans.className} font-openSans text-white text-[20px] font-[600] leading-[140%] capitalize`}
                  >
                    apps design
                  </h1>
                  <p
                    className={`${inter.className} font-inter text-white text-[16px] font-[400] leading-[150%] capitalize`}
                  >
                    john doe creative designer
                  </p>
                </div>
              </div>
            </div>

            {/* 2nd single project card  */}
            <div className="group cursor-pointer p-[20px] bg-[#DCDEE5] rounded-[34px] w-[365px] h-[382px]">
              <div className="relative w-full h-full rounded-[20px] overflow-hidden">
                {/* Image zoom wrapper */}
                <div className="absolute inset-0 transform transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={assets.projects.project2}
                    alt="project image"
                    fill={true}
                    className="object-cover rounded-[20px]"
                  />
                </div>

                {/* Shadow gradient from bottom to top, appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Text content */}
                <div className="absolute bottom-[24px] left-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h1
                    className={`${openSans.className} font-openSans text-white text-[20px] font-[600] leading-[140%] capitalize`}
                  >
                    apps design
                  </h1>
                  <p
                    className={`${inter.className} font-inter text-white text-[16px] font-[400] leading-[150%] capitalize`}
                  >
                    john doe creative designer
                  </p>
                </div>
              </div>
            </div>

            {/* 3rd single project card  */}
            <div className="group cursor-pointer p-[20px] bg-[#DCDEE5] rounded-[34px] w-[365px] h-[382px]">
              <div className="relative w-full h-full rounded-[20px] overflow-hidden">
                {/* Image zoom wrapper */}
                <div className="absolute inset-0 transform transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={assets.projects.project3}
                    alt="project image"
                    fill={true}
                    className="object-cover rounded-[20px]"
                  />
                </div>

                {/* Shadow gradient from bottom to top, appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Text content */}
                <div className="absolute bottom-[24px] left-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h1
                    className={`${openSans.className} font-openSans text-white text-[20px] font-[600] leading-[140%] capitalize`}
                  >
                    landing page design
                  </h1>
                  <p
                    className={`${inter.className} font-inter text-white text-[16px] font-[400] leading-[150%] capitalize`}
                  >
                    john doe creative designer
                  </p>
                </div>
              </div>
            </div>

            {/* 4th single project card  */}
            <div className="group cursor-pointer p-[20px] bg-[#DCDEE5] rounded-[34px] w-[365px] h-[382px]">
              <div className="relative w-full h-full rounded-[20px] overflow-hidden">
                {/* Image zoom wrapper */}
                <div className="absolute inset-0 transform transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={assets.projects.project4}
                    alt="project image"
                    fill={true}
                    className="object-cover rounded-[20px]"
                  />
                </div>

                {/* Shadow gradient from bottom to top, appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Text content */}
                <div className="absolute bottom-[24px] left-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h1
                    className={`${openSans.className} font-openSans text-white text-[20px] font-[600] leading-[140%] capitalize`}
                  >
                    landing page design
                  </h1>
                  <p
                    className={`${inter.className} font-inter text-white text-[16px] font-[400] leading-[150%] capitalize`}
                  >
                    john doe creative designer
                  </p>
                </div>
              </div>
            </div>

            {/* 5th single project card  */}
            <div className="group cursor-pointer p-[20px] bg-[#DCDEE5] rounded-[34px] w-[365px] h-[382px]">
              <div className="relative w-full h-full rounded-[20px] overflow-hidden">
                {/* Image zoom wrapper */}
                <div className="absolute inset-0 transform transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={assets.projects.project5}
                    alt="project image"
                    fill={true}
                    className="object-cover rounded-[20px]"
                  />
                </div>

                {/* Shadow gradient from bottom to top, appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Text content */}
                <div className="absolute bottom-[24px] left-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h1
                    className={`${openSans.className} font-openSans text-white text-[20px] font-[600] leading-[140%] capitalize`}
                  >
                    landing page design
                  </h1>
                  <p
                    className={`${inter.className} font-inter text-white text-[16px] font-[400] leading-[150%] capitalize`}
                  >
                    john doe creative designer
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* right side container holder */}
          <div></div>
        </div>
      </ContainerInner>
    </Container>
  );
};

export default ProjectSection;
