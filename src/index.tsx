import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import './index.css';
import { ErrorPage } from './pages/404';
import { HomePage } from './pages/Home';
import { TestPage } from './pages/Test';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'test',
    element: <TestPage />,
  },
]);

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <RecoilRoot>
    <RouterProvider router={router} />
  </RecoilRoot>
);
