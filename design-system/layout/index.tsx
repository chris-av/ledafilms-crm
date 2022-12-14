import { ReactNode } from 'react';

import Navbar from '@/components/Navbar';
import Topbar from '@/components/Topbar';

interface ComponentProps {
  children: ReactNode;
}

export default function Layout({ children } : ComponentProps) {
  return (
    <div className="h-screen w-full overflow-hidden">
      <Topbar />
      <div className="flex overflow-hidden h-screen w-screen">
        <Navbar />
        <div className="w-full p-8 h-full overflow-auto">
          { children }
        </div>
      </div>
    </div>
  );

}
