import { useEffect } from 'react';
import 'aos/dist/aos.css';
import aos from 'aos';
import FeatureList from './FeatureList';

import FeatIcon1 from '../../assets/add.png';
import FeatIcon2 from '../../assets/edit.png';
import FeatIcon3 from '../../assets/recap.png';

const Index = () => {
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <section className="py-[40px]" id="features">
        <div className="flex flex-col items-center bg-color-primary py-[40px] lg:pt-[40px] lg:pb-[220px]" data-aos="fade-up">
          <h1 className="text-white text-[32px] leading-[42px] font-semibold lg:text-[42px] lg:leading-[52px]">
            Balance<span className="text-color-dark">Beam</span>
          </h1>
          <h1 className="text-white text-[32px] leading-[42px] font-semibold lg:text-[42px] lg:leading-[52px]">Features</h1>
          <p className="text-white text-[16px] leading-[26px] mt-[12px] font-light lg:mt-[12px]">We provide three main features to manage your finance.</p>
        </div>
      </section>
      <section className="lg:max-w-[1200px] mx-auto relative" data-aos="fade-up">
        <div className="absolute bottom-0 lg:-bottom-28 lg:left-0 lg:right-0">
          <div className="flex gap-8 lg:gap-12 justify-center lg:justify-between items-center px-8 lg:px-0">
            <FeatureList icon={FeatIcon1} title="Add Transaction" subtitle="Create your new transaction history with some categories real-time." />
            <FeatureList icon={FeatIcon2} title="Edit/Delete Transaction" subtitle="You can simplify edit or delete transaction history real-time." />
            <FeatureList icon={FeatIcon3} title="Recap All Transaction" subtitle="We provide all recap of Spendings, Earnings, and Balance real-time." />
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
