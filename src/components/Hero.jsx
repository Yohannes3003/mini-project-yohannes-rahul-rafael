import { useEffect } from 'react';
import 'aos/dist/aos.css';
import aos from 'aos';
import Banner from '../assets/hero.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="min-h-[700px] pt-[100px]">
      <div className="container min-h[700px] mx-auto flex justify-center items-center lg:w-[1200px]">
        <div className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left" data-aos="fade-up">
          <div className="flex-1">
            <h1 className="font-primary font-semibold text-[56px] lg:text-[55px] text-color-dark lg:leading-[80px] mb-[12px]">
              Welcome to, <span className="text-color-primary"> BalanceBeam </span>
            </h1>
            <h1 className="font-primary font-semibold text-[40px] lg:text-[55px] text-color-dark lg:leading-[80px] mb-[12px]">Manage your finances quickly and accurately.</h1>
            <p className="font-primary font-light text-color-light px-12 mb-[24px] lg:px-0 lg:w-[560px] text-[22px]">Find an easy way to manage your finances and achieve your financial goals with us!</p>
            <Link to="/login">
              <button className="btn btn-primary mb-[32px]" data-aos="fade-up">
                Get Started
              </button>
            </Link>
          </div>
          <div className="flex-1" data-aos="fade-left">
            <img src={Banner} alt="Banner" className="w-[320px] lg:w-screen mb-[145px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
