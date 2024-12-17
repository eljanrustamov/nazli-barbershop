import { Outlet } from 'react-router-dom';
const AppLayout = () => {
  return (
    <div>
      <nav>navbar</nav>
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  );
};

export default AppLayout;
