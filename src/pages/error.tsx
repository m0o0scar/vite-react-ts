import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

import { Head } from '../components/common/Head';

export const ErrorPage = () => {
  const error = useRouteError() as any;
  console.log(error);

  return (
    <>
      <Head title="Error" favemoji="👻" />

      <article className="prose max-w-full p-4">
        <h1>Error</h1>
        <h2>This is not the page you are looking for</h2>
        <div>
          {error.status}: {error.statusText}
        </div>
        <div>
          <Link to="/">🏡 Take me home</Link>
        </div>
      </article>
    </>
  );
};
