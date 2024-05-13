const FeatureList = ({ title, subtitle, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg py-[24px] px-[32px] lg:px-[42px] mb-4">
      <img src={icon} alt="icon" className="w-[56px]" />
      <h1 className="w-[140px] text-[24px] leading-[34px] text-color-dark font-semibold mt-[24px] mb-[12px]">{title}</h1>
      <p className="w-[196px] text-[16px] leading-[24px] text-color-light font-light">{subtitle}</p>
    </div>
  );
};

export default FeatureList;
