import Footer from '../components/Footers/Footer';
import NavbarDashboard from '../components/Headers/NavbarDashboard';
import DashboardPages from './DashboardPages';

const Dashboard = () => {
  return (
    <>
      <NavbarDashboard />
      <DashboardPages />
      <Footer />
    </>
  );
};

export default Dashboard;
