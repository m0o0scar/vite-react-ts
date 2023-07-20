/* eslint-disable prettier/prettier */
import './index.css';

import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ErrorPage } from './pages/error';
import { RootLayout } from './pages/layout';
import { HomePage } from './pages/page';
import { TestPage } from './pages/test/page';

const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: '/test',
        Component: TestPage,
      },
    ],
  },
]);

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(<RouterProvider router={router} />);
