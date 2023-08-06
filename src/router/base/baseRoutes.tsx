import BaseLayout from '@components/common/BaseLayout';
import Detail from '@pages/detail/Detail';
import Error from '@pages/error';
import Favorite from '@pages/favorite/Favorite';
import Home from '@pages/home';
import { createBrowserRouter } from 'react-router-dom';

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
        path: 'detail/:id',
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
