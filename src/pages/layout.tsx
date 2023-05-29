import React from 'react';
import { Outlet } from 'react-router-dom';

export const RootLayout = () => {
  return (
    <>
      <article className="prose max-w-full p-4">
        <h1>Root Layout</h1>
        <Outlet />
      </article>
    </>
  );
};
