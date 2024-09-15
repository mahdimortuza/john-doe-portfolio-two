const trash = () => {
  return (
    <div className=" bg-[#fff] rounded-[32px] w-[855px] py-[120px] px-[69px] flex flex-col gap-[26px]">
      <Rating
        style={{ maxWidth: 140 }}
        value={5}
        itemStyles={includedShapesStyles}
        spaceBetween="small"
        readOnly
      />

      <div className="flex flex-col gap-[36px]">
        <Image
          src={assets.reviewImage.dash}
          alt="feedback"
          className="h-[5px]"
        />

        <p className="">
          Working with him was transformative for our project. His exceptional
          UI/UX skills and detail-oriented approach brought our vision to life,
          delivering a final product that exceeded expectations in both
          aesthetics and functionality.
        </p>

        <Image src={assets.reviewImage.dash} alt="dash" className="h-[5px]" />
      </div>

      {/* client information  */}
      <div className="flex justify-between">
        <div className="flex gap-[16px]">
          <Image
            src={assets.reviewImage.client2}
            alt="client"
            className="w-[56px] h-[56px] rounded-full object-cover"
          />
          <div className="flex flex-col gap-[2px]">
            <h3
              className={`${openSans.className} font-openSans text-[#000] text-[20px] font-[600] leading-[140%] capitalize`}
            >
              john doe
            </h3>
            <p
              className={`${inter.className} font-inter text-[#40424D] text-[18px] font-[400] leading-[155%] capitalize`}
            >
              company manager
            </p>
          </div>
        </div>
        <Image src={assets.reviewImage.logo1} alt="company logo" />
      </div>
    </div>
  );
};

export default trash;
