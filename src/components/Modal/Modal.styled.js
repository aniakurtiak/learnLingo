import styled from 'styled-components';
import { ReactComponent as CloseBtn } from '../../icons/close.svg';

export const OverLay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background: rgba(0, 0, 0, 0.2);

`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 64px;
  width: 566px;
  background-color: #ffffff;
  border-radius: 30px;
  flex-shrink: 0;
`;

export const BtnClose = styled.button`
  width: 32px;
  height: 32px;
  background-color: transparent;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const CloseSvg = styled(CloseBtn)`
`;

export const Title = styled.h2`
font-weight: 500;
font-size: 40px;
line-height: 1.2;
letter-spacing: -0.02em;
margin-bottom: 20px;
`

export const Text = styled.p`
font-size: 16px;
line-height: 1.37;
color: rgba(18, 20, 23, 0.8);
`