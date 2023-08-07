import BaseLayout from '@components/common/BaseLayout';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Home = React.lazy(() => import('@pages/home'));
const Detail = React.lazy(() => import('@pages/detail'));
const Favorite = React.lazy(() => import('@pages/favorite'));
const Error = React.lazy(() => import('@pages/error'));

const baseRoutes = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'detail/:movieId',
        element: <Detail />,
      },
      {
        path: 'favorite',
        element: <Favorite />,
      },
      {
        path: '*',
        element: <Error status="404" errorText="Page not found" />,
      },
    ],
  },
]);

export default baseRoutes;
