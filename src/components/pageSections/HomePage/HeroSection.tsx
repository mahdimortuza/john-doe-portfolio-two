"use client";
import assets from "@/assets";
import Container from "@/components/Container";
import ContainerInner from "@/components/ContainerInner";
import { inter, openSans } from "@/components/ui/fonts";
import { Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Link } from "react-scroll";

const HeroSection = () => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <Container className="pt-[40px] lg:pt-[50px]">
      {/*  */}
      <ContainerInner className=" py-[50px]  lg:py-[100px] ">
        <div
          id="home"
          className="flex max-w-[1530px] px-[10px] mx-auto flex-col lg:flex-row gap-3 items-center "
        >
          {/* first div left side */}
          <div className="mx-auto lg:w-1/2 bg-red-200">
            <div className="flex flex-col gap-[32px]">
              <div className="flex flex-col gap-[10px]">
                <h1
                  className={`${openSans.className} font-openSans text-themeBlack capitalize font-[600] text-[32px] md:text-[48px] xl:text-[60px] leading-[106%]`}
                >
                  Creative Professional
                </h1>
                <div className="flex gap-[8px] items-center">
                  <div className="flex items-center justify-center overflow-hidden h-[36px] w-[72px] lg:h-[60px] lg:w-[120px] md:h-[68px] md:w-[140px] rounded-full">
                    <Image
                      className="rounded-full scale-110"
                      src={assets.heroImages.descriptionObj}
                      alt="description-image"
                      width={144}
                      height={72}
                      objectFit="cover"
                    />
                  </div>

                  <h1
                    className={`${openSans.className} font-openSans text-themeBlack capitalize font-[600] text-[36px] md:text-[48px] xl:text-[60px] leading-[106%]`}
                  >
                    to make your
                  </h1>
                </div>
                <h1
                  className={`${openSans.className} font-openSans text-themeBlack capitalize font-[600] text-[36px] md:text-[48px] xl:text-[60px] leading-[106%]`}
                >
                  next project shine
                </h1>
              </div>
              <p
                className={`${inter.className} text-[#40424D] font-inter text-[14px] md:text-[18px] font-normal leading-[150%] text-left w-[40ch] sm:w-[45ch]`}
              >
                Discover my passion for transforming ideas into impactful
                digital experiences. With expertise in design and development, I
                bring your vision to life with creativity and precision.
              </p>

              <div className="flex gap-[20px] md:gap-[32px] items-center">
                <button
                  className={`${openSans.className} font-openSans capitalize text-white relative bg-themeBlue text-[16px] font-[600] leading-[150%] rounded-[12px] px-[22px] py-[10px] transition-all before:absolute before:bottom-0 before:right-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-themeBlack before:rounded-[12px] before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full animate-bg-slide`}
                >
                  <span className="relative z-10">Hire me now</span>
                </button>

                <Link to="projects" smooth={true} spy={true}>
                  <button
                    className={`relative flex flex-col px-[10px] py-[5px] justify-center mx-auto text-[16px] font-[500] cursor-pointer ${openSans.className} font-openSans`}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                  >
                    <span
                      className={`absolute ${
                        hovered
                          ? "translate-y-[-20px] opacity-0"
                          : "translate-y-0 opacity-100"
                      } transition-all duration-300 capitalize ${
                        hovered ? "text-themeBlue" : "text-themeGray"
                      }`}
                    >
                      Explore Projects
                    </span>
                    <span
                      className={`${
                        hovered
                          ? "translate-y-0 opacity-100 text-themeBlue"
                          : "translate-y-[20px] opacity-0 text-themeGray"
                      } transition-all duration-300 capitalize`}
                    >
                      Explore Projects
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* --------------------------------------------------- */}

          {/* 2nd div right side contents */}

          <div className=" w-full xl:w-1/2 relative h-[93vh] lg:h-[80vh]">
            {/* left side content with customer images  */}
            <div className="flex absolute bottom-0 lg:bottom-auto lg:top-0 left-1/2 transform -translate-x-1/2 lg:left-auto lg:transform-none lg:right-0">
              <div className="absolute lg:static bottom-[170px] -left-[170px] z-10 mr-[10px] xl:mr-[140px] flex flex-col items-center justify-center gap-[14px] h-[127px] w-[207px] lg:h-[136px] lg:w-[296px] rounded-[24px] bg-[#EAFFEB]">
                <p
                  className={`${inter.variable} text-[12px] xl:text-[14px] font-medium text-center font-inter capitalize text-[#2E2F33]`}
                >
                  treated by 300+ worldwide <br /> brand & customers
                </p>

                {/* customer images  with plus */}
                <div className="flex">
                  <Image
                    className=" h-[30px] w-[30px] rounded-full object-cover border-[2px]  border-white"
                    src={assets.customerImages.image1}
                    alt="hero-image"
                  />
                  <Image
                    className="-ml-[12px] h-[30px] w-[30px] rounded-full object-cover border-[2px]  border-white"
                    src={assets.customerImages.image2}
                    alt="hero-image"
                  />
                  <Image
                    className="-ml-[12px] h-[30px] w-[30px] rounded-full object-cover border-[2px]  border-white"
                    src={assets.customerImages.image3}
                    alt="hero-image"
                  />
                  <Image
                    className="-ml-[12px] h-[30px] w-[30px] rounded-full object-cover border-[2px]  border-white"
                    src={assets.customerImages.image4}
                    alt="hero-image"
                  />
                  <Plus className="-ml-[12px] h-[30px] w-[30px] rounded-full object-cover border-[2px] bg-black text-white p-[5px] border-white" />
                </div>
              </div>

              {/* stars ratting here  */}
              {/* absolute lg:static bottom-[170px] -left-[70px] */}
              <div className="absolute lg:static -left-[35px] bottom-0 w-[208px] h-[127px] lg:w-[212px] lg:h-[136px] bg-[#FEEFFF] rounded-[24px] flex flex-col items-center justify-center">
                <p
                  className={`text-[#09090A] ${openSans.className} font-openSans text-[28px] xl:text-[32px] font-semibold`}
                >
                  96%{" "}
                </p>
                <div className="flex gap-[2px]">
                  <Image src={assets.star.star} alt="portfolio ratting" />
                  <Image src={assets.star.star} alt="portfolio ratting" />
                  <Image src={assets.star.star} alt="portfolio ratting" />
                  <Image src={assets.star.star} alt="portfolio ratting" />
                  <Image src={assets.star.star} alt="portfolio ratting" />
                </div>
              </div>
            </div>

            {/* Side contents here */}
            <div className="absolute flex flex-row-reverse lg:block z-10 top-[136px] lg:top-[145px] xl:top-[160px] left-1/2 transform -translate-x-1/2 lg:left-auto lg:transform-none lg:right-[350px] xl:right-[460px]">
              {/* First item */}
              <div className="absolute lg:static left-[42px] top-[260px] w-[130px] h-[166px] lg:w-[136px] lg:h-[217px] flex flex-col items-center justify-center bg-[#EFF2FF] rounded-[24px]">
                <p
                  className={`text-[#09090A] text-center ${openSans.className} font-openSans text-[28px] xl:text-[32px] font-semibold capitalize`}
                >
                  355+
                </p>
                <p
                  className={`text-[#2E2F33] ${inter.className} font-inter text-center text-[16px] font-[400] capitalize`}
                >
                  Completed Projects
                </p>
              </div>

              {/* Second item */}
              <div className="absolute -bottom-[558px] -left-[170px] z-50 lg:static w-[130px] h-[166px] lg:w-[136px] lg:h-[223px] flex flex-col items-center justify-center bg-[#FFF8DF] rounded-[24px] mt-[10px] xl:mt-[24px]">
                <p
                  className={`text-[#09090A] text-center ${openSans.className} font-openSans text-[32px] font-semibold capitalize`}
                >
                  200+
                </p>
                <p
                  className={`text-[#2E2F33] ${inter.className} font-inter text-center text-[16px] font-[400] capitalize`}
                >
                  Product Launched
                </p>
              </div>
            </div>

            {/* absolute */}
            {/* Main profile image section here */}
            <div className="absolute top-0  lg:top-[145px] xl:top-[160px] left-1/2 transform -translate-x-1/2 lg:left-auto lg:transform-none lg:right-0">
              <div className="w-[342px] h-[368px] xl:w-[433px] xl:h-[466px]  relative">
                <Image
                  src={assets.heroImages.profilePic}
                  alt="portfolio image"
                  className="h-[350px] w-[376px] xl:h-[466px] xl:w-[408px] absolute left-0 bottom-0 lg:right-0 z-30"
                />
                <Image
                  src={assets.heroImages.backgroundObj}
                  alt="image cover"
                  fill={true}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </ContainerInner>
    </Container>
  );
};

export default HeroSection;
