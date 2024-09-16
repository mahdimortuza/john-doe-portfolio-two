import assets from "@/assets";
import Container from "@/components/Container";
import ContainerInner from "@/components/ContainerInner";
import { inter, openSans } from "@/components/ui/fonts";
import Image from "next/image";
import { FaBehanceSquare, FaDribbble, FaPinterest } from "react-icons/fa";

const AboutSection = () => {
  return (
    <Container className=" ">
      <ContainerInner className="rounded-none">
        <div
          id="about"
          className="flex flex-col md:flex-row justify-center items-center gap-[8px] xl:gap-[20px]"
        >
          {/* left side first div  */}
          <div className="w-full xl:w-1/2">
            <div className="relative ">
              {/* left side object image  */}

              <Image
                src={assets.aboutImage.objectLeft}
                alt="object image"
                className="absolute top-[30px] xl:top-[100px] left-[35px] xl:left-[140px] object-cover rounded-full h-[74px] w-[30px] xl:h-[160px] xl:w-[64px]"
              />

              {/* right side object image  */}

              <Image
                src={assets.aboutImage.objectRight}
                alt="object image"
                className="absolute top-[90px] xl:top-[240px] right-[40px] xl:right-[140px] object-cover rounded-full h-[74px] w-[30px] xl:h-[160px] xl:w-[64px]"
              />

              {/* main profile image */}
              <Image
                src={assets.aboutImage.profileImage}
                alt="profile image"
                className="absolute bottom-0  h-[90%] md:h-[80%] lg:h-[90%] w-auto left-1/2 transform -translate-x-1/2"
              />

              {/* cover image  */}
              <Image
                src={assets.aboutImage.background}
                // fill={true}
                alt="image cover"
                className="object-cover rounded-[16px] xl:rounded-[32px] h-[362px] md:h-[600px] lg:h-[600px] xl:h-[836px] w-full"
              />
            </div>
          </div>

          {/* right side second div  */}
          <div className="bg-[#fff] h-full md:h-[600px] lg:h-[600px] xl:h-[836px] w-full xl:w-1/2 rounded-[16px] xl:rounded-[32px]">
            <div className="mx-[14px] my-[10px] lg:my-[48px] xl:mx-[96px] xl:my-[100px]">
              <h1
                className={`${openSans.className} font-openSans text-[26px] xl:text-[44px] text-black font-[600] leading-[128%] xl:leading-[136%] capitalize`}
              >
                Passionate About Crafting Digital Excellence
              </h1>
              <p
                className={`${inter.className} font-inter mt-[16px] xl:mt-[24px] text-themeGray text-[16px] font-normal leading-[162%] xl:leading-[175%]`}
              >
                I&apos;m a creative professional dedicated to bringing unique
                visions to life through innovative design and development. With
                a passion for detail and a focus on results, I ensure every
                project shines and exceeds expectations.
              </p>

              <ul
                className={`${inter.className} font-inter mt-[24px] xl:mt-[32px] custom-list list-disc pl-0 text-themeGray text-[16px] font-normal leading-[162%] capitalize`}
                style={{ listStylePosition: "inside" }}
              >
                <li className="mt-[0px]" style={{ paddingLeft: "0px" }}>
                  <span style={{ position: "relative", top: "-4px" }}>
                    Transforming ideas into engaging digital experiences with
                    impact.
                  </span>
                </li>
                <li
                  className="mt-[12px] xl:mt-[8px]"
                  style={{ paddingLeft: "0px" }}
                >
                  <span style={{ position: "relative", top: "-4px" }}>
                    Delivering high-quality, user-centered solutions.
                  </span>
                </li>
              </ul>

              {/* resume button  */}
              <button
                className={`${openSans.className} font-openSans border-[6px] border-[#EFF2FF] mt-[32px] xl:mt-[55px] text-white relative bg-themeBlack  text-[16px] font-[600] leading-[150%] rounded-[18px] px-[26px] py-[10px] transition-all before:absolute before:bottom-0 before:right-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-themeBlue before:rounded-[12px] before:transition-all before:duration-500 hover:text-white  hover:before:left-0 hover:before:w-full animate-bg-slide`}
              >
                <span className="relative z-10">Download CV</span>
              </button>

              {/* statistic and social profile  */}
              <div className="flex gap-[8px] xl:gap-[20px] mt-[40px] xl:mt-[50px]">
                <div className="capitalize flex items-center justify-center rounded-[24px] gap-[12px] xl:gap-[20px] w-[175px] h-[90px] xl:w-[280px] xl:h-[136px] bg-[#EFF2FF] px-[20px] py-[14px] xl:px-[36px] xl:py-[34px]">
                  <h1
                    className={`${openSans.className} font-openSans text-black text-center text-[24px] xl:text-[54px] font-[600] leading-[118%]`}
                  >
                    12+
                  </h1>
                  <p
                    className={`${inter.className} font-inter text-[#2E2F33] text-[14px] xl:text-[16px] font-medium capitalize leading-[150%]`}
                  >
                    year of experience
                  </p>
                </div>

                {/* second element   */}
                <div className="capitalize flex flex-col items-center justify-center rounded-[24px] gap-[8px] xl:gap-[10px] w-[160px] h-[90px] xl:w-[280px] xl:h-[136px] bg-[#FFF8DF]">
                  <h1
                    className={`${inter.className} font-inter text-[#2E2F33] text-left text-[14px] xl:text-[16px] font-[400] leading-[150%] capitalize`}
                  >
                    Also Find Me On
                  </h1>

                  {/* social icons */}
                  <div className="flex  gap-[12px] items-center justify-center">
                    <a href="/">
                      <FaBehanceSquare className="text-[#005CFF] h-[22px] w-[22px] xl:h-[26px] xl:w-[26px]" />
                    </a>

                    <a href="/">
                      <FaDribbble className="text-[#B2215A] bg-[#E74D89] rounded-full h-[22px] w-[22px] xl:h-[26px] xl:w-[26px]" />
                    </a>

                    <a href="/">
                      <FaPinterest className="text-[#CB1F27] bg-[#fff] rounded-full h-[22px] w-[22px] xl:h-[26px] xl:w-[26px]" />
                    </a>

                    <a href="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="34"
                        height="16"
                        viewBox="0 0 34 16"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_278_4705)">
                          <path
                            d="M26.2777 15.337C30.3191 15.337 33.5951 12.0457 33.5951 7.98567C33.5951 3.92664 30.319 0.634644 26.2777 0.634644C22.2364 0.634644 18.9603 3.92651 18.9603 7.9858C18.9603 12.0459 22.2364 15.337 26.2778 15.337"
                            fill="#FF0084"
                          />
                          <path
                            d="M7.98413 15.337C12.0255 15.337 15.3015 12.0457 15.3015 7.98567C15.3015 3.92664 12.0254 0.634644 7.984 0.634644C3.94284 0.634644 0.666748 3.92651 0.666748 7.9858C0.666748 12.0459 3.94284 15.337 7.98413 15.337Z"
                            fill="#0063DC"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_278_4705">
                            <rect
                              width="32.9281"
                              height="14.731"
                              fill="white"
                              transform="translate(0.666748 0.634644)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
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

export default AboutSection;
