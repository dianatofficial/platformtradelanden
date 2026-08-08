/**
 * @project Tradeland.tv
 * @author dianatofficial
 * @copyright Copyright (c) 2026 dianatofficial. All rights reserved.
 */
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AdminRoutes } from './routes/AdminRoutes.tsx';
import { MainRoutes } from './routes/MainRoutes.tsx';

/**
 * A utility component that scrolls the window to the top whenever the route changes.
 * This is useful for ensuring users see the top of the new page on navigation.
 * @returns {null} This component does not render anything.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

/**
 * The main application component.
 * It sets up the top-level routing structure, distinguishing between the admin panel and the main site.
 */
const App: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="/*" element={<MainRoutes />} />
      </Routes>
    </>
  );
};

export default App;