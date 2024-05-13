import { useEffect } from 'react';
import 'aos/dist/aos.css';
import aos from 'aos';
import { Link } from 'react-router-dom';

const FooterWidget = () => {
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="flex items-center justify-center px-[12px] my-[60px] lg:mt-[220px] lg:px-0 lg:max-w-[1200px] lg:justify-between mx-auto" data-aos="fade-up">
      <div className="text-color-dark text-[24px] leading-[32px] font-medium flex-1 lg:text-[40px] lg:leading-[52px] lg:max-w-[402px]">Get ready to manage your expense?</div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-[16px] lg:gap-[40px]">
        <Link to="/login">
          <button className="btn btn-primary">Start Now</button>
        </Link>
      </div>
    </section>
  );
};

export default FooterWidget;
