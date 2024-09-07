import assets from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";
import { RxLinkedinLogo } from "react-icons/rx";
import Container from "../Container";
import ContainerInner from "../ContainerInner";
import { dmSans, inter, openSans } from "../ui/fonts";
import { Separator } from "../ui/separator";

const Footer = () => {
  return (
    <Container>
      <ContainerInner>
        <div className="grid grid-cols-5">
          <div>
            <Image src={assets.logos.mainLogo} alt="logo" />
            <p
              className={`${inter.className} mt-[30px] capitalize text-[16px] font-[400] w-[40ch] text-themeGray`}
            >
              I&apos;m a creative professional transforming visions into
              exceptional outcomes with detail and results.
            </p>

            {/* social icons  */}
            <h3
              className={`${openSans.className} mt-[40px] capitalize text-themeBlack font-[600] text-[22px] `}
            >
              follow us
            </h3>
            <div className="flex gap-[16px] mt-[10px]">
              <Link href="/">
                <IoLogoFacebook className="w-[18px] h-[18px]" />
              </Link>
              <Link href="/">
                <BiLogoInstagramAlt className="w-[18px] h-[18px]" />
              </Link>

              <Link href="/">
                <RxLinkedinLogo className="w-[18px] h-[18px]" />
              </Link>

              <Link href="/">
                <FaSquareXTwitter className="w-[18px] h-[18px]" />
              </Link>
            </div>
          </div>

          {/* empty div  */}
          <div></div>

          {/* navigation  */}
          <div className="">
            <h1
              className={`${openSans.className} text-black text-[20px] font-[600] capitalize`}
            >
              navigation
            </h1>

            {/* navigation menu */}
            <ul className="flex flex-col gap-[16px] mt-[24px]">
              <li
                className={`${openSans.className} text-[16px] font-[400] capitalize`}
              >
                Home
              </li>
              <li
                className={`${openSans.className} text-[16px] font-[400] capitalize`}
              >
                About
              </li>
              <li
                className={`${openSans.className} text-[16px] font-[400] capitalize`}
              >
                Services
              </li>
              <li
                className={`${openSans.className} text-[16px] font-[400] capitalize`}
              >
                Portfolio
              </li>
              <li
                className={`${openSans.className} text-[16px] font-[400] capitalize`}
              >
                Blogs
              </li>
            </ul>
          </div>

          {/* others  */}
          <div>
            <h1
              className={`${openSans.className} text-black text-[20px] font-[600] capitalize`}
            >
              others
            </h1>
            <ul className="flex flex-col gap-[16px] mt-[24px]">
              <li
                className={`${openSans.className} text-[16px] font-[400] capitalize`}
              >
                help & support
              </li>
              <li
                className={`${openSans.className} text-[16px] font-[400] capitalize`}
              >
                privacy policy
              </li>
              <li
                className={`${openSans.className} text-[16px] font-[400] capitalize`}
              >
                terms & conditions
              </li>
              <li
                className={`${openSans.className} text-[16px] font-[400] capitalize`}
              >
                refund policy
              </li>
            </ul>
          </div>

          {/* contact  */}
          <div>
            <h1
              className={`${openSans.className} text-black text-[20px] font-[600] capitalize`}
            >
              contact
            </h1>
            <ul className="flex flex-col gap-[16px] mt-[24px]">
              <li
                className={`${openSans.className} text-[16px] font-[400] capitalize flex gap-[12px]`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7.77235 2.4393L8.84935 2.0953C9.85735 1.7733 10.9353 2.2943 11.3673 3.3123L12.2273 5.3403C12.6023 6.2233 12.3943 7.2623 11.7133 7.9083L9.82035 9.7063C9.93701 10.7823 10.2983 11.8413 10.9043 12.8833C11.4806 13.8912 12.2528 14.7735 13.1753 15.4783L15.4513 14.7183C16.3133 14.4313 17.2523 14.7623 17.7813 15.5393L19.0133 17.3493C19.6293 18.2533 19.5183 19.4993 18.7553 20.2653L17.9373 21.0863C17.1233 21.9033 15.9613 22.2003 14.8853 21.8643C12.3467 21.0723 10.0123 18.7213 7.88235 14.8113C5.74968 10.8946 4.99701 7.57196 5.62435 4.8433C5.88835 3.6953 6.70635 2.7803 7.77435 2.4393"
                    fill="#09090A"
                  />
                </svg>
                <span>+1 (835) 123 456</span>
              </li>
              <li
                className={`${openSans.className} text-[16px] font-[400] flex gap-[12px]`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M18.3336 7.33366L11.0002 11.917L3.66689 7.33366V5.50033L11.0002 10.0837L18.3336 5.50033M18.3336 3.66699H3.66689C2.64939 3.66699 1.83356 4.48283 1.83356 5.50033V16.5003C1.83356 16.9866 2.02671 17.4529 2.37053 17.7967C2.71434 18.1405 3.18066 18.3337 3.66689 18.3337H18.3336C18.8198 18.3337 19.2861 18.1405 19.6299 17.7967C19.9737 17.4529 20.1669 16.9866 20.1669 16.5003V5.50033C20.1669 5.0141 19.9737 4.54778 19.6299 4.20396C19.2861 3.86015 18.8198 3.66699 18.3336 3.66699Z"
                    fill="#09090A"
                  />
                </svg>
                <span className=" underline">hello@johndoe.com</span>
              </li>
            </ul>

            {/* newsletter subscription  */}
            <div>
              <h2
                className={`${openSans.className} text-themeBlack text-[16px] font-[600] capitalize mt-[40px]`}
              >
                sign up for newsletter
              </h2>
              {/* email subscription input */}
              <div className="relative w-[320px] mt-[10px]">
                <input
                  placeholder="hello@yourmail.com"
                  className={`${inter.className} text-[16px] font-normal px-[24px] py-[16px] bg-themeBgColor rounded-[8px] w-full`}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  className="absolute right-1 top-[32px] transform -translate-y-1/2 bg-themeBlue p-[6px] rounded-full text-white w-[30px] h-[30px] md:w-[38px] md:h-[38px]"
                >
                  <g clip-path="url(#clip0_286_9969)">
                    <path
                      d="M23.6075 6.63385C24.1115 5.23969 22.7605 3.88869 21.3664 4.39385L4.3272 10.5562C2.92836 11.0625 2.7592 12.9712 4.04603 13.7167L9.48503 16.8655L14.3419 12.0087C14.5619 11.7962 14.8566 11.6786 15.1625 11.6812C15.4684 11.6839 15.761 11.8066 15.9773 12.0229C16.1936 12.2392 16.3163 12.5318 16.319 12.8377C16.3216 13.1436 16.204 13.4383 15.9915 13.6584L11.1347 18.5152L14.2847 23.9542C15.029 25.241 16.9377 25.0707 17.444 23.673L23.6075 6.63385Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_286_9969">
                      <rect width="28" height="28" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* footer foot  */}
        <div>
          {/* separator  */}
          <Separator className="mt-[100px]" />

          <p
            className={`${dmSans.className} mt-[24px] mb-[42px] text-themeGray text-center text-[14px] capitalize`}
          >
            &copy; {new Date().getFullYear()} John Doe, All Rights Reserved
          </p>
        </div>
      </ContainerInner>
    </Container>
  );
};

export default Footer;
