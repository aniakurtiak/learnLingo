import { AuthNav } from 'components/AuthNav/AuthNav';
import { Suspense, useState } from 'react';
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
import { Modal } from 'components/Modal/Modal';
import { Login } from 'components/Login/Login';
import { Register } from 'components/Register/Register';

export const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);

  const toggleModal = () => {
    setIsOpen(prevState => !prevState);
  };

  function onClickLogin() {
    setRegisterModal(false);
    setLoginModal(true);
    toggleModal();
  }
  function onClickRegister() {
    setLoginModal(false);
    setRegisterModal(true);
    toggleModal();
  }

  const close = () => {
    setIsOpen(false);
  };

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
        <AuthNav
          onClickLogin={onClickLogin}
          onClickRegister={onClickRegister}
        />
      </HeaderContainer>
      <Suspense>
        <Outlet />
      </Suspense>

      {isOpen && (
        <Modal toggleModal={toggleModal}>
          {loginModal && <Login close={close} />}
          {registerModal && <Register close={close} />}
        </Modal>
      )}
    </LayoutWrap>
  );
};
