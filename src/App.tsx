import React from 'react';

import { Head } from './components/common/Head';

export function App() {
  return (
    <>
      <Head title="Vite + React + TS" favemoji="🌳" />

      <article className="prose max-w-full">
        <h1>Hello</h1>
        <div>World</div>
      </article>
    </>
  );
}
