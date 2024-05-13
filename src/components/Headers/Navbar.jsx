import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="container mx-auto flex items-center justify-between py-[12px] px-[8px] lg:w-[1200px] lg:px-0">
      <div className="lg:flex items-center gap-[40px]">
        <a href="" className="text-color-primary text-[24px] font-bold">
          Balance<span className="text-color-dark">Beam</span>
        </a>
      </div>
      <div className="hidden lg:flex gap-[40px] text-color-primary">
        <button>
          <Link to="/">Home</Link>
        </button>
        <button className="btn">
          <Link to="/login">Login</Link>
        </button>
        <button className="btn btn-primary">
          <Link to="/register">Register</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
