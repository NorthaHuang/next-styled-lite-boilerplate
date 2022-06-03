import Head from 'next/head';

// Styles
import Normalize from '@styles/globals/Normalize';
import GlobalStyle from '@styles/globals/GlobalStyle';

// Types
import type { AppProps } from 'next/app';

export default ({ Component, pageProps }: AppProps) => (
  <>
    {/* Default metadata */}
    <Head>
      <meta httpEquiv="Content-Language" content="zh-TW" />

      <title>{process.env.siteName}</title>
      <meta name="description" content={process.env.siteDescription} />
      <meta name="keywords" content="northa, huang, website" />
      <meta name="author" content={process.env.author} />
      <meta name="copyright" content={process.env.author} />

      {/* Open Graph */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:url" content="url" />
      <meta property="og:type" content="type" />
      <meta property="og:title" content={process.env.siteName} />
      <meta property="og:description" content={process.env.siteDescription} />
      <meta property="og:image" content="image" />

      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </Head>

    {/* Global styles */}
    <Normalize />
    <GlobalStyle />

    <Component {...pageProps} />
  </>
);
