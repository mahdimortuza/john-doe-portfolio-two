import Container from "@/components/Container";
import ContainerInner from "@/components/ContainerInner";
import { inter, openSans } from "@/components/ui/fonts";
import { serviceData } from "@/db/serviceData";
import Image from "next/image";

const ServiceSection = () => {
  return (
    <Container className="">
      <ContainerInner className="bg-[#fff] ">
        <div
          id="services"
          className="grid grid-cols-1 md:grid-cols-[40%_auto] gap-x-[50px] lg:gap-x-[10px] xl:gap-x-[50px] gap-y-[50px]  max-w-[1530px] py-[48px] xl:py-[100px] px-[10px] mx-auto"
        >
          {/* left side first div */}
          <div className="">
            <h1
              className={`${openSans.className} font-openSans text-[28px] xl:text-[44px] font-[600] leading-[136%] capitalize`}
            >
              Comprehensive Services to Elevate Your Brand
            </h1>
            <p
              className={`${inter.className} font-inter mt-[16px] md:mt-[24px] text-themeGray text-[16px] font-[400] leading-[175%]`}
            >
              Offering a full range of Digital services to enhance your brand,
              boost engagement, and drive measurable results for your business.
            </p>
          </div>

          {/* right side second div */}
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-between lg:gap-y-[40px] xl:gap-y-[70px]">
            {/* single content */}
            {serviceData.map((item) => (
              <div
                className="w-[350px] lg:w-[270px] xl:w-[350px]"
                key={item._id}
              >
                <div className="flex gap-[16px] items-center mb-[24px]">
                  <Image
                    src={item.icon}
                    alt="ui"
                    className="p-[12px] bg-[#EFF2FF] w-[56px] h-[56px] rounded-[8px]"
                  />
                  <h2
                    className={`${openSans.className} font-openSans text-[20px] font-[600] leading-[130%] capitalize`}
                  >
                    {item.title}
                  </h2>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="351"
                  height="2"
                  viewBox="0 0 350 2"
                  fill="none"
                  className="w-[350px] lg:w-[270px] xl:w-[350px]"
                >
                  <path
                    d="M1 1H350"
                    stroke="#C6D1FF"
                    stroke-linecap="round"
                    stroke-dasharray="10 10"
                  />
                </svg>
                <p
                  className={`mt-[16px] ${inter.className} font-inter text-themeGray text-[16px] font-[400] leading-[175%]`}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ContainerInner>
    </Container>
  );
};

export default ServiceSection;
