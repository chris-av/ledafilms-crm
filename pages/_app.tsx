import type { AppProps } from 'next/app'
import Navbar from '@/components/Navbar';
import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Navbar />
      <div className="h-screen w-full p-8 overflow-auto">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp
