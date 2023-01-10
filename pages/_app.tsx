import type { AppProps } from 'next/app';
import ThemeProvider from '@/state/theme';
import NavToggleProvider from '@/state/navopen';
import Layout from '@/design-system/layout';
import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <NavToggleProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NavToggleProvider>
    </ThemeProvider>
  );
}


export default MyApp

