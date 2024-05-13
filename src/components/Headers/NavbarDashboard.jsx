import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase';

const NavbarDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        console.log('Logout successful');
        navigate('/');
      })
      .catch((error) => {
        console.error('Logout error:', error);
      });
  };

  return (
    <div className="container mx-auto flex items-center justify-between py-[12px] px-[8px] lg:w-[1200px] lg:px-0">
      <div className="flex items-center justify-center lg:justify-start gap-4">
        <a href="/dashboard" className="text-color-primary text-2xl font-bold">
          Balance<span className="text-color-dark">Beam</span>
        </a>
      </div>
      <div>
        <button className="btn text-color-primary">
          <Link to="/chatbot">ChatBot</Link>
        </button>
      </div>
      <div className="flex items-center justify-center lg:justify-end gap-4 text-dark">
        <button className="btn btn-danger" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default NavbarDashboard;
