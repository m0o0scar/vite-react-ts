import { Global, css } from '@emotion/react';

export const GlobalStyle = () => (
  <Global
    styles={css`
      * {
        font-family: Arial;
      }
    `}
  />
);
