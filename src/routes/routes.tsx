import { RouteObject } from 'react-router-dom';
import { ROUTES } from './routeConstants';
import AppLayout from '../components/AppLayout';
import { HomePage, ServicesPage, ContactPage, NotFoundPage } from './lazyPages';
export const routes: RouteObject[] = [
  {
    path: ROUTES.HOME,
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTES.SERVICES,
        element: <ServicesPage />,
      },
      {
        path: ROUTES.CONTACT,
        element: <ContactPage />,
      },
      {
        path: ROUTES.NOT_FOUND,
        element: <NotFoundPage />,
      },
    ],
  },
];
