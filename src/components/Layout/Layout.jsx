import { AuthNav } from 'components/AuthNav/AuthNav';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {
  HeaderContainer,
  LayoutWrap,
  LogoSvg,
  NavLinkLogo,
  NavLinkMenu,
  NavList,
  NavListMenu,
} from './Layout.styled';

export const Layout = () => {
  return (
    <LayoutWrap>
      <HeaderContainer>
        <NavList>
          <li>
            <NavLink to="/">
              <LogoSvg alt="logo" />
            </NavLink>
          </li>
          <li>
            <NavLinkLogo to="/">LearnLingo</NavLinkLogo>
          </li>
        </NavList>
        <NavListMenu>
          <li>
            <NavLinkMenu to="/">Home</NavLinkMenu>
          </li>
          <li>
            <NavLinkMenu to="/teatchers">Teatchers</NavLinkMenu>
          </li>
        </NavListMenu>
        <AuthNav />
      </HeaderContainer>
      <Suspense>
        <Outlet />
      </Suspense>
    </LayoutWrap>
  );
};
