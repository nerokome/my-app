'use client';

import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import NavbarWithScroll from './Pages/Navbarscroll';

export default function Star({ children }) {
  const pathname = usePathname();

  
  const noNavbarRoutes = ['/login', '/register'];
  const shouldShowNavbar = !noNavbarRoutes.includes(pathname);

  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <div className="relative bg-white min-h-screen">
      {/* ✅ Fixed Navbar */}
      {shouldShowNavbar && (
        <div className="fixed top-0 left-0 w-full z-50 bg-white shadow">
          <NavbarWithScroll />
        </div>
      )}

      {/* ✅ Padding to prevent content overlap */}
      <main className={shouldShowNavbar ? 'pt-20' : ''}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
