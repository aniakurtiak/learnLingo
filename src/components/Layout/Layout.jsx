import { AuthNav } from 'components/AuthNav/AuthNav';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {
  HeaderContainer,
  LayoutWrap,
  LogoSvg,
  NavList,
} from './Layout.styled';

export const Layout = () => {
  return (
    <LayoutWrap>
      <HeaderContainer>
          <NavLink to="/">
            <LogoSvg alt="logo" />
            LearnLingo
          </NavLink>
          <NavList>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/teatchers">Teatchers</NavLink>
            </li>
          </NavList>
          <AuthNav />
      </HeaderContainer>
      <Suspense>
        <Outlet />
      </Suspense>
    </LayoutWrap>
  );
};
