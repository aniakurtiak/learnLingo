import { ErrorMessage, Field, Form} from 'formik';
import styled from 'styled-components';
import { ReactComponent as GoogleSvg } from '../../icons/google.svg';

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

// ---------------CONTENT STYLE--------------------------------

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
margin-bottom: 40px;
`

export const FormStyle = styled(Form)`
display: flex;
flex-direction: column;
gap: 18px;
`

export const FieldStyle = styled(Field)`
border: 1px solid rgba(18, 20, 23, 0.1);
border-radius: 12px;
padding: 16px 18px;
width: 438px;
height: 54px;

&::placeholder {
  color: ${({theme}) => theme.primaryBlack};
}

&:focus {
  outline: none;
 border-color: ${({theme}) => theme.primaryYellow};
}
`

export const ErrMsg = styled(ErrorMessage)`
font-size: 14px;
color: red;
margin-top: -10px;
`

export const BtnSubmit = styled.button`
margin-top: 22px;
border-radius: 12px;
padding: 16px;
width: 438px;
height: 60px;
background: ${({theme}) => theme.primaryYellow};
font-weight: 700;
font-size: 18px;
line-height: 1.56;
color: ${({theme}) => theme.primaryBlack};

&:hover {
  background: ${({theme}) => theme.primaryLightYellow};
}
`

export const BtnSubmitGoogle = styled.button`
margin-top: 18px;
border-radius: 12px;
padding: 16px;
width: 438px;
height: 60px;
display: flex;
align-items: center;
justify-content: center;
gap: 8px;
background: transparent;
border: 1px solid rgba(18, 20, 23, 0.1);

font-size: 16px;
line-height: 1.37;
color: rgba(18, 20, 23, 0.8);

&:hover {
  border-color: ${({theme}) => theme.primaryYellow};
}
`
export const BtnGoogleSvg = styled(GoogleSvg)`
width: 20px;
height: 20px;
`;
