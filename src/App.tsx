import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

const Home = () => (
  <p>
    this is <i>home</i> page
  </p>
);
const About = () => (
  <p>
    this is <b>about</b> page
  </p>
);

export function App() {
  return (
    <article className="prose">
      <h1>Hello World</h1>
      <p>
        <button className="btn">I am a button</button>
      </p>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <div>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </article>
  );
}
