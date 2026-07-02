import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { Outlet, useRouterState } from '@tanstack/react-router';
import useSmoothScroll from '@/hooks/useSmoothScroll';
import { getLenis } from '@/lib/lenis';
import { ScrollTrigger } from '@/lib/gsap';
import Preloader from '@/components/ui/Preloader';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

const AppReadyContext = createContext(false);
export const useAppReady = () => useContext(AppReadyContext);

/**
 * Top-level shell: boots Lenis momentum scroll, runs the preloader and mounts
 * the chrome. On every route change we jump to the top and refresh
 * ScrollTrigger so the new page measures its triggers correctly.
 */
export default function RootLayout() {
  const [loaded, setLoaded] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useSmoothScroll();

  useEffect(() => {
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
    const t = setTimeout(() => ScrollTrigger.refresh(), 160);
    return () => clearTimeout(t);
  }, [pathname]);

  const handleLoaded = useCallback(() => {
    setLoaded(true);
    setTimeout(() => ScrollTrigger.refresh(), 600);
  }, []);

  return (
    <AppReadyContext.Provider value={loaded}>
      <Preloader onDone={handleLoaded} />
      <Navbar />
      <main key={pathname} className="animate-[fadein_0.7s_ease_both]">
        <Outlet />
      </main>
      <Footer />
    </AppReadyContext.Provider>
  );
}
