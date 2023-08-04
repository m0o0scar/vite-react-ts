import { createRoot } from 'react-dom/client';
import { Helmet } from 'react-helmet';

import { Head } from './components/common/Head';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container!);

const App = () => {
  return (
    <>
      <Head title="Vite + React + TS" favemoji="🌳" />
      <article className="prose max-w-full p-4">
        <h1>Hello World</h1>
        <p>This is a Vite + React + TS template</p>
      </article>
    </>
  );
};

root.render(<App />);
