import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header, Nav, Link } from './Layout.styled';

const Layout = () => (
  <>
    <Header>
      <Nav>
        <Link to="/" end>
          Home
        </Link>
        <Link to="/movies">Movie</Link>
      </Nav>
    </Header>
    <Suspense fallback={<>Loading...</>}>
      <Outlet />
    </Suspense>
  </>
);

export default Layout;
