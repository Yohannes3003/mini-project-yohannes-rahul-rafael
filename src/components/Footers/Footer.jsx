import { useEffect } from 'react';
import 'aos/dist/aos.css';
import aos from 'aos';
import { socials } from '../../data/dummysocial';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  return (
    <footer data-aos="fade-up">
      <div className="text-center lg:text-left lg:max-w-[1200px] mx-auto lg:flex justify-between items-start">
        <div className="mt-[8px] py-[24px]">
          <a href="" className="text-color-primary text-[24px] font-bold">
            Balance<span className="text-color-dark">Beam</span>
          </a>
          <p className="text-[15px]">Find an easy way to manage your finances and achieve your financial goals with us!</p>
        </div>
        <div className="flex justify-between mx-[12px] items-start text-center lg:text-left lg:gap-[130px] lg:mt-[32px]" data-aos="fade-up">
          <div className="flex flex-col gap-3">
            <h2 className="text-primary-text text-xl text-slate-500 dark:text-white">Social Media</h2>
            <div className="text-primary-text flex flex-col gap-3 text-slate-500 dark:text-white">
              {socials.map((item, index) => (
                <NavLink className="flex cursor-pointer items-center gap-2 font-normal hover:text-primary" to={`${item.href}`} key={index} target="_blank">
                  <item.Icon size={16} />
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3 text-slate-500 dark:text-white">
            <h2 className="text-primary-text text-xl">Information</h2>
            <div className="text-primary-text flex flex-col gap-1 font-light">
              <span>Soreang - Bandung</span>
              <span>Jawa Barat - Indonesia</span>
              <span>+6282119120134</span>
              <span>yohannesrahul3@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className="text-slate-500 dark:text-white">
        <p className="border-t-1 pt-10 text-center mb-10">&copy; 2024 BalanceBeam. All rights reserved.</p>
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
