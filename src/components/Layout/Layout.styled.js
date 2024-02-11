import styled from 'styled-components';
import { ReactComponent as Logo } from '../../icons/ukraine.svg';


export const LayoutWrap = styled.div`
  min-width: 320px;
  max-width: 1440px;
  padding-top: 20px;
`;

export const HeaderContainer = styled.header`
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
`;