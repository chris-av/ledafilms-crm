import type { AppProps } from 'next/app';
import ThemeProvider from '@/state/theme';
import Layout from '@/design-system/layout';
import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}


export default MyApp

