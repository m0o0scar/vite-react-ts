import { Link } from 'react-router-dom';

import { Head } from '../components/common/Head';

export const HomePage = () => {
  return (
    <>
      <Head title="Vite + React + TS" favemoji="🌳" />

      <h2>Home Page</h2>
      <div>Hello World</div>
      <ul>
        <li>
          <Link to="/test">🧪 Test page</Link>
        </li>
        <li>
          <Link to="/shit">👻 I don&apos;t exist page</Link>
        </li>
      </ul>
    </>
  );
};
