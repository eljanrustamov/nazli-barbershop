import { Outlet } from 'react-router-dom';
import NavBar from './Navbar';
const AppLayout = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  );
};

export default AppLayout;
