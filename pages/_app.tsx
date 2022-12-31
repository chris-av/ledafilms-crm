import type { AppProps } from 'next/app'
import Navbar from '@/components/Navbar';
import Topbar from '@/components/Topbar';
import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="h-screen w-full overflow-hidden">
      <Topbar />
      <div className="flex overflow-hidden h-screen w-screen">
        <Navbar />
        <div className="w-full p-8 h-full overflow-auto">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}


export default MyApp

