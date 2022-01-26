import { Link, Routes, Route } from "react-router-dom";
import { GlobalStyle } from './components/GlobalStyle';

const Home = () => <p>this is <i>home</i> page</p>;
const About = () => <p>this is <b>about</b> page</p>;

export function App() {
  return (
    <>
      <GlobalStyle />
      <h1>Hello World</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <p>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </p>
    </>
  )
}
