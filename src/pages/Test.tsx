import React from 'react';

import { Head } from '../components/common/Head';

export function TestPage() {
  return (
    <>
      <Head title="Route Test" favemoji="💩" />

      <article className="prose max-w-full p-4">
        <h1>Route Test Page</h1>
        <div>Hi</div>
      </article>
    </>
  );
}
