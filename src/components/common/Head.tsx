import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

export interface HeadProps {
  title?: string;
  favicon?: string;
  favemoji?: string;
}

export const Head: FC<HeadProps> = ({ title, favicon, favemoji }) => {
  return (
    <Helmet>
      {/* meta */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />

      {/* title */}
      {title && <title>{title}</title>}

      {/* favicon */}
      {favicon && <link rel="icon" href={favicon} />}
      {favemoji && (
        <link
          rel="icon"
          href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${favemoji}</text></svg>`}
        />
      )}
    </Helmet>
  );
};
