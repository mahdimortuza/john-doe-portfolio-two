"use client";
import Container from "@/components/Container";
import ContainerInner from "@/components/ContainerInner";
import { inter, openSans, outfit } from "@/components/ui/fonts";
import { SubmitHandler, useForm } from "react-hook-form";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaLocationDot, FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <Container className=" ">
      <ContainerInner className="bg-[#fff]">
        <div className="flex max-w-[1530px] px-[10px] py-[120px] mx-auto flex-col md:flex-row justify-between ">
          {/* left side container  div  */}

          <div className="w-[65ch]">
            <div>
              <h1
                className={`${openSans.className} font-openSans text-[#09090A text-[44px] font-[600] leading-[136%] capitalize`}
              >
                Reach Out—Let&lsquo;s Make It Happen
              </h1>
              <p
                className={` mt-[24px] ${inter.className} font-inter text-[#40424D] text-[16px] font-[400] leading-[175%]`}
              >
                Get in touch to discuss your project. I&lsquo;m here to help you
                achieve your goals with creative, effective digital solutions.
              </p>
            </div>

            {/* contact info  */}
            <div className="flex flex-col gap-[20px] mt-[48px]">
              {/* first contact item  */}
              <div className="flex gap-[16px] items-center">
                <BiSolidPhoneCall className="w-[40px] h-[40px] p-[8px] bg-themeBlue text-white rounded-full" />
                <div>
                  <p
                    className={`${inter.className} font-inter text-[#474C4B] capitalize text-[16px] font-[400] leading-[150%]`}
                  >
                    phone
                  </p>
                  <span
                    className={`${openSans.className} mt-[2px] font-openSans text-[#000] text-[16px] font-[600] leading-[150%] capitalize`}
                  >
                    +(123)231-54689
                  </span>
                </div>
              </div>

              {/* second contact item  */}
              <div className="flex gap-[16px] items-center">
                <MdEmail className="w-[40px] h-[40px] p-[8px] bg-themeBlue text-white rounded-full" />
                <div>
                  <p
                    className={`${inter.className} font-inter text-[#474C4B] capitalize text-[16px] font-[400] leading-[150%]`}
                  >
                    Email
                  </p>
                  <span
                    className={`${openSans.className} underline mt-[2px] font-openSans text-[#000] text-[16px] font-[600] leading-[150%] capitalize`}
                  >
                    hello
                  </span>
                </div>
              </div>

              {/* third contact item  */}
              <div className="flex gap-[16px] items-center">
                <FaLocationDot className="w-[40px] h-[40px] p-[8px] bg-themeBlue text-white rounded-full" />
                <div>
                  <p
                    className={`${inter.className} font-inter text-[#474C4B] capitalize text-[16px] font-[400] leading-[150%]`}
                  >
                    location
                  </p>
                  <span
                    className={`${openSans.className} mt-[2px] font-openSans text-[#000] text-[16px] font-[600] leading-[150%] capitalize`}
                  >
                    your location 123,freeHGF.
                  </span>
                </div>
              </div>
              {/* social media icons  */}
              <div>
                <h3
                  className={`mt-[48px] ${outfit.className} font-outfit text-[#000] text-[26px] font-[500] leading-[133%] capitalize `}
                >
                  follow us
                </h3>
                <div className="mt-[12px] flex items-center gap-[17px]">
                  <IoLogoFacebook className="w-[24px] h-[24px] text-[#1877F2]" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_285_9812)">
                      <path
                        d="M16.7503 0.0947266H5.46434C2.71447 0.0947266 0.48526 2.32394 0.48526 5.07381V16.3597C0.48526 19.1096 2.71447 21.3388 5.46434 21.3388H16.7503C19.5001 21.3388 21.7294 19.1096 21.7294 16.3597V5.07381C21.7294 2.32394 19.5001 0.0947266 16.7503 0.0947266Z"
                        fill="url(#paint0_radial_285_9812)"
                      />
                      <path
                        d="M16.7503 0.0947266H5.46434C2.71447 0.0947266 0.48526 2.32394 0.48526 5.07381V16.3597C0.48526 19.1096 2.71447 21.3388 5.46434 21.3388H16.7503C19.5001 21.3388 21.7294 19.1096 21.7294 16.3597V5.07381C21.7294 2.32394 19.5001 0.0947266 16.7503 0.0947266Z"
                        fill="url(#paint1_radial_285_9812)"
                      />
                      <path
                        d="M11.1087 2.41846C8.85503 2.41846 8.57214 2.42833 7.68702 2.46858C6.80357 2.50908 6.20052 2.64891 5.6729 2.85413C5.12702 3.06607 4.66405 3.34963 4.20282 3.81102C3.74118 4.27234 3.45762 4.73531 3.24501 5.28093C3.03921 5.80872 2.89922 6.41201 2.85947 7.29506C2.81988 8.18025 2.80951 8.46323 2.80951 10.717C2.80951 12.9708 2.81947 13.2528 2.85963 14.1379C2.90029 15.0213 3.04012 15.6244 3.24518 16.152C3.45729 16.6979 3.74085 17.1609 4.20224 17.6221C4.66339 18.0837 5.12636 18.368 5.67182 18.5799C6.19985 18.7851 6.80298 18.925 7.68627 18.9654C8.57147 19.0057 8.85412 19.0156 11.1077 19.0156C13.3617 19.0156 13.6437 19.0057 14.5288 18.9654C15.4122 18.925 16.016 18.7851 16.544 18.5799C17.0896 18.368 17.5519 18.0837 18.013 17.6221C18.4746 17.1609 18.7581 16.6979 18.9708 16.1523C19.1748 15.6244 19.3148 15.0212 19.3563 14.1381C19.3961 13.2529 19.4065 12.9708 19.4065 10.717C19.4065 8.46323 19.3961 8.18042 19.3563 7.29522C19.3148 6.41177 19.1748 5.8088 18.9708 5.28118C18.7581 4.73531 18.4746 4.27234 18.013 3.81102C17.5514 3.34946 17.0898 3.0659 16.5435 2.85421C16.0145 2.64891 15.4111 2.50899 14.5276 2.46858C13.6424 2.42833 13.3606 2.41846 11.1062 2.41846H11.1087ZM10.3643 3.91393C10.5853 3.91359 10.8318 3.91393 11.1087 3.91393C13.3245 3.91393 13.5871 3.92189 14.4621 3.96164C15.2712 3.99865 15.7103 4.13383 16.0028 4.24744C16.3901 4.39781 16.6662 4.57764 16.9565 4.86817C17.2469 5.15861 17.4267 5.4352 17.5775 5.82249C17.6911 6.1146 17.8264 6.55375 17.8633 7.36285C17.903 8.23768 17.9117 8.50041 17.9117 10.7151C17.9117 12.9298 17.903 13.1926 17.8633 14.0674C17.8263 14.8765 17.6911 15.3156 17.5775 15.6078C17.4271 15.9951 17.2469 16.2709 16.9565 16.5611C16.6661 16.8516 16.3903 17.0313 16.0028 17.1818C15.7106 17.2959 15.2712 17.4307 14.4621 17.4677C13.5872 17.5075 13.3245 17.5161 11.1087 17.5161C8.89287 17.5161 8.63023 17.5075 7.75548 17.4677C6.94638 17.4304 6.50723 17.2952 6.21446 17.1816C5.82725 17.0312 5.55058 16.8514 5.26013 16.561C4.96969 16.2705 4.78994 15.9946 4.63916 15.6071C4.52555 15.3149 4.3902 14.8758 4.35336 14.0667C4.31361 13.1919 4.30564 12.9291 4.30564 10.713C4.30564 8.49692 4.31361 8.2356 4.35336 7.36078C4.39037 6.55168 4.52555 6.11252 4.63916 5.82C4.78961 5.43271 4.96969 5.15612 5.26021 4.86568C5.55074 4.57523 5.82725 4.3954 6.21454 4.2447C6.50706 4.1306 6.94638 3.99575 7.75548 3.95857C8.52102 3.92397 8.81769 3.91359 10.3643 3.91185V3.91393ZM15.5385 5.2918C14.9887 5.2918 14.5426 5.73743 14.5426 6.28729C14.5426 6.83706 14.9887 7.28311 15.5385 7.28311C16.0882 7.28311 16.5343 6.83706 16.5343 6.28729C16.5343 5.73752 16.0882 5.29147 15.5385 5.29147V5.2918ZM11.1087 6.45533C8.75528 6.45533 6.84713 8.36348 6.84713 10.717C6.84713 13.0705 8.75528 14.9778 11.1087 14.9778C13.4623 14.9778 15.3697 13.0705 15.3697 10.717C15.3697 8.36357 13.4621 6.45533 11.1086 6.45533H11.1087ZM11.1087 7.9508C12.6364 7.9508 13.8749 9.18918 13.8749 10.717C13.8749 12.2447 12.6364 13.4832 11.1087 13.4832C9.58106 13.4832 8.3426 12.2447 8.3426 10.717C8.3426 9.18918 9.58098 7.9508 11.1087 7.9508Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <radialGradient
                        id="paint0_radial_285_9812"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(6.12822 22.975) rotate(-90) scale(21.0545 19.5823)"
                      >
                        <stop stop-color="#FFDD55" />
                        <stop offset="0.1" stop-color="#FFDD55" />
                        <stop offset="0.5" stop-color="#FF543E" />
                        <stop offset="1" stop-color="#C837AB" />
                      </radialGradient>
                      <radialGradient
                        id="paint1_radial_285_9812"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(-3.07321 1.62505) rotate(78.681) scale(9.41147 38.7944)"
                      >
                        <stop stop-color="#3771C8" />
                        <stop offset="0.128" stop-color="#3771C8" />
                        <stop
                          offset="1"
                          stop-color="#6600FF"
                          stop-opacity="0"
                        />
                      </radialGradient>
                      <clipPath id="clip0_285_9812">
                        <rect
                          width="21.2441"
                          height="21.2441"
                          fill="white"
                          transform="translate(0.48819 0.0947266)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <IoLogoLinkedin className="w-[24px] h-[24px] text-[#0A66C2]" />
                  <FaSquareXTwitter className="w-[24px] h-[24px] text-[#000]" />
                </div>
              </div>
            </div>
          </div>

          {/* right side form container  */}
          <div className="bg-[#DCDEE580] w-[580px] h-[615px] rounded-[28px] px-[58px] py-[72px]">
            <form
              className="flex flex-col items-start  justify-start gap-[16px]"
              onSubmit={handleSubmit(onSubmit)}
            >
              {/* first element name */}
              <div>
                <h3
                  className={`${openSans.className} font-openSans text-[#17171A] text-[16px] font-[600] leading-[150%] capitalize`}
                >
                  Name:
                </h3>
                <input
                  className={`${inter.className} font-inter capitalize mt-[8px] w-[460px] px-[24px] py-[16px] rounded-[12px] text-[16px] text-[#A1A4B2] font-[400] leading-[150%]`}
                  placeholder="your name"
                  {...register("name", { required: true })}
                />
                {errors.name && <span>Name is required</span>}
              </div>
              {/* second item  email*/}
              <div>
                <h3
                  className={`${openSans.className} font-openSans text-[#17171A] text-[16px] font-[600] leading-[150%] capitalize`}
                >
                  email:
                </h3>
                <input
                  className={`${inter.className} font-inter capitalize mt-[8px] w-[460px] px-[24px] py-[16px] rounded-[12px] text-[16px] text-[#A1A4B2] font-[400] leading-[150%]`}
                  placeholder="Your Email Address"
                  {...register("email", { required: true })}
                  type="email"
                />
                {errors.email && <span>Email is required</span>}
              </div>
              {/* third item message */}
              <div>
                <h3
                  className={`${openSans.className} font-openSans text-[#17171A] text-[16px] font-[600] leading-[150%] capitalize`}
                >
                  message:
                </h3>
                <input
                  className={`${inter.className} font-inter capitalize mt-[8px] w-[460px] px-[24px] py-[16px] rounded-[12px] text-[16px] text-[#A1A4B2] font-[400] leading-[150%]`}
                  placeholder="Write Your Message"
                  {...register("message", { required: true })}
                />
                {errors.message && <span>Message is required</span>}
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                // className={`${openSans.className} font-openSans `}

                className={` mt-[12px] ${openSans.className} font-openSans capitalize  text-white relative bg-themeBlue text-[16px] font-[600] leading-[150%] rounded-[12px] px-[22px] py-[10px] transition-all before:absolute before:bottom-0 before:right-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-themeBlack before:rounded-[12px] before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full animate-bg-slide`}
              >
                <span className="relative z-10">Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </ContainerInner>
    </Container>
  );
};

export default ContactSection;
