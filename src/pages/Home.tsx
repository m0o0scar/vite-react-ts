import React from 'react';
import { Link } from 'react-router-dom';

import { Head } from '../components/common/Head';

export function HomePage() {
  return (
    <>
      <Head title="Vite + React + TS" favemoji="🌳" />

      <article className="prose max-w-full p-4">
        <h1>Home Page</h1>
        <div>Hello World</div>
        <ul>
          <li>
            <Link to="/test">🧪 Test page</Link>
          </li>
          <li>
            <Link to="/shit">👻 I don&apos;t exist page</Link>
          </li>
        </ul>
      </article>
    </>
  );
}
