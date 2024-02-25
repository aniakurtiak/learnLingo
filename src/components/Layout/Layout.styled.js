import styled from 'styled-components';
import { ReactComponent as Logo } from '../../icons/ukraine.svg';
import { Link } from 'react-router-dom';

export const LayoutWrap = styled.div`
  min-width: 320px;
  max-width: 1440px;
  padding-top: 20px;
  margin: 0 auto;
`;

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  padding-left: 128px;
  padding-right: 128px;
  align-items: center;
  justify-content: space-between;
`;

export const LogoSvg = styled(Logo)`
  width: 28px;
  height: 28px;
  margin-right: 8px;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
`;

export const NavLinkLogo = styled(Link)`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.primaryBlack};
  align-items: center;
`;


