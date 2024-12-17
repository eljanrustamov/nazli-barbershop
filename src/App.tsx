import { Suspense } from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { routes } from './routes/routes';

const AppRoutes = () => useRoutes(routes);

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className='p-6 text-center'>Loading...</div>}>
        <AppRoutes />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
