import { Suspense, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {
  HeaderContainer,
  LayoutWrap,
  LogoSvg,
  NavLinkLogo,
  NavList,
} from './Layout.styled';
import { Modal } from 'components/Modal/Modal';
import { Login } from 'components/auth/Login';
import { Register } from 'components/auth/Register';
import { Navigation } from 'components/navigation/Navigation';
import { Toaster } from 'react-hot-toast';

export const Layout = ({authUser}) => {
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
        <Navigation
        authUser={authUser}
          onClickLogin={onClickLogin}
          onClickRegister={onClickRegister}
        />
      </HeaderContainer>
      <Suspense>
        <Outlet  />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />

      {isOpen && (
        <Modal toggleModal={toggleModal}>
          {loginModal && <Login close={close} />}
          {registerModal && <Register close={close} />}
        </Modal>
      )}
    </LayoutWrap>
  );
};
