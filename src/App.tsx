import { RecoilRoot } from 'recoil';
import { GlobalStyle } from './components/GlobalStyle';

export function App() {
  return (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <h1>Hello World</h1>
      </RecoilRoot>
    </>
  )
}
