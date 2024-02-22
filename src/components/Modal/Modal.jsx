import React from 'react';
import { createPortal } from 'react-dom';
import { BtnClose, ModalContainer, OverLay } from './Modal.styled';
import { useEffect } from 'react';
import { ReactComponent as CloseBtnSvg } from '../../icons/close.svg';

const modalElement = document.getElementById('portal');

export const Modal = ({ children, toggleModal }) => {
  const onClickBackdrop = e => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  useEffect(() => {
    const onEscapeClick = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };
    const body = document.querySelector('body');
    body.style.position = 'fixed';
    window.addEventListener('keydown', onEscapeClick);

    return () => {
      body.style.position = '';
      window.removeEventListener('keydown', onEscapeClick);
    };
  }, [toggleModal]);

  return createPortal(
    <OverLay onMouseDown={onClickBackdrop}>
      <ModalContainer>
        <BtnClose onClick={toggleModal} type="button">
          <CloseBtnSvg alt="close" />
        </BtnClose>
        {children}
      </ModalContainer>
    </OverLay>,
    modalElement
  );
};
