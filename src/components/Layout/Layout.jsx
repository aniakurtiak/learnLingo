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
// import { BookTrialModal } from 'components/BookTrialModal/BookTrialModal';

export const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  // const [bookModal, setBookModal] = useState(false);

  const toggleModal = () => {
    setIsOpen(prevState => !prevState);
  };

  // function onClickBookModal() {
  //   setRegisterModal(false);
  //   setLoginModal(false);
  //   setBookModal(true);
  //   toggleModal();
  // }

  function onClickLogin() {
    setRegisterModal(false);
    setLoginModal(true);
    // setBookModal(false)
    toggleModal();
  }
  function onClickRegister() {
    setLoginModal(false);
    setRegisterModal(true);
    // setBookModal(false)
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
          onClickLogin={onClickLogin}
          onClickRegister={onClickRegister}
        />
      </HeaderContainer>
      <Suspense>
        <Outlet />
        {/* <Outlet onClickBookModal = {onClickBookModal} /> */}
      </Suspense>

      {isOpen && (
        <Modal toggleModal={toggleModal}>
          {loginModal && <Login close={close} />}
          {registerModal && <Register close={close} />}
          {/* {bookModal && <BookTrialModal close={close}/>} */}
        </Modal>
      )}
    </LayoutWrap>
  );
};
