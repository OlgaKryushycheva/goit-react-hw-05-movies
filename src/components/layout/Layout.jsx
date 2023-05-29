import { Suspense } from 'react';
import { Outlet } from 'react-router-dom/dist';
import Header from 'components/header/Header';

const Layout = () => {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
