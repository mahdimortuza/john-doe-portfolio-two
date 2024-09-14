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
          <div className="flex justify-center items-center">
            <div className="grid gap-[20px]">
              {/* first row */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1fr_2fr_1fr] gap-[20px]">
                {/* 1st single project card */}
                <div className="col-span-1 group cursor-pointer p-[20px] bg-[#DCDEE5] rounded-[34px] w-[342px] h-[356px] lg:w-auto lg:h-[514px] xl:w-[408px] xl:h-[425px] order-2 xl:order-1">
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
                    <div className="absolute h-[425px] inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

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

                {/* section title card */}
                <div className="relative col-span-1 bg-themeBlue overflow-hidden rounded-[34px] w-[342px] h-[356px] md:h-auto md:w-auto xl:h-[425px] px-[16px] py-[42px] lg:px-[20px] lg:py-[98px] xl:px-[80px] xl:py-[98px] order-1 xl:order-2">
                  {/* Gradient Overlay */}
                  <div className="absolute mx-auto inset-0 bg-gradient-to-t  from-white/30 via-transparent to-transparent"></div>

                  <Image
                    src={assets.bgGrid.grid}
                    alt="project image"
                    fill={true}
                    className="absolute inset-0 object-cover overflow-hidden scale-[3]"
                  />

                  <h1
                    className={`${openSans} font-openSans text-white text-center text-[28px] lg:text-[44px] font-[600] leading-[128%] md:leading-[136%] capitalize`}
                  >
                    My Recent Projects & Digital Solutions
                  </h1>

                  <p
                    className={` mt-[16px] lg:mt-[24px] ${inter.className} font-inter text-white text-center text-[16px] font-[400] leading-[162%] xl:leading-[175%] capitalize`}
                  >
                    Explore recent projects showcasing innovative design
                    solutions and successful outcomes, highlighting my expertise
                    in impactful digital experiences.
                  </p>
                </div>

                {/* 2nd single project card */}
                <div className="col-span-1 group cursor-pointer p-[20px] bg-[#DCDEE5] rounded-[34px] w-[342px] h-[356px] lg:w-auto lg:h-[514px] xl:w-[408px] xl:h-[425px] order-3">
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
              </div>

              {/* second row */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px]">
                {/* 3rd single project card */}
                <div className="col-span-1 group cursor-pointer p-[20px] bg-[#DCDEE5] rounded-[34px] w-[342px] h-[356px] lg:w-auto lg:h-[514px]">
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
                    {/* Shadow gradient */}
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

                {/* 4th single project card   */}
                <div className=" col-span-1 group cursor-pointer p-[20px] bg-[#DCDEE5] rounded-[34px] w-[342px] h-[356px] lg:w-auto lg:h-[514px]">
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
                <div className=" col-span-1 group cursor-pointer p-[20px] bg-[#DCDEE5] rounded-[34px] w-[342px] h-[356px] lg:w-auto lg:h-[514px]">
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
            </div>
          </div>
        </div>
      </ContainerInner>
    </Container>
  );
};

export default ProjectSection;
