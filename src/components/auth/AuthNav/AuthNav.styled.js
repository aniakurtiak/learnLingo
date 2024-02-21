import styled from "styled-components";
import { ReactComponent as LogIn } from '../../../icons/log-in-01.svg';

export const AuthContainer = styled.div`
  display: flex;
 
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const RegBtn = styled.button`
border-radius: 12px;
padding: 14px 39px;
width: 166px;
height: 48px;
background: ${({ theme }) => theme.primaryBlack};
font-weight: 700;
font-size: 16px;
line-height: 1.25;
color: #fff;
`

export const LogBtn = styled.button`
font-weight: 700;
font-size: 16px;
line-height: 125%;
color: #121417;
background: none;
width: 73px;
display: flex;
align-items: center;
gap: 8px;
`

export const LogInSvg = styled(LogIn)`
width: 20px;
height: 20px;
stroke: ${({ theme }) => theme.primaryYellow};
`;
