import styled from 'styled-components';
import { ReactComponent as GirlSvg } from '../../icons/girl.svg';
import { ReactComponent as MacYellSvg } from '../../icons/iMac-yellow.svg';

export const HomeContainer = styled.div`
  padding-left: 64px;
  padding-right: 64px;
`;

export const InfoContainer = styled.div`
display: flex;
gap: 24px;
margin-top: 20px;
`;

export const StartContainer = styled.div`
border-radius: 30px;
width: 720px;
height: 530px;
background: #f8f8f8;
`;
// -------------------IMAGE------------------------
export const ImageContainer = styled.div`
position: relative;
border-radius: 30px;
width: 568px;
height: 530px;
background: ${({ theme }) => theme.lightYellow};
`;

export const ImgGirlSvg = styled(GirlSvg)`
margin-top: 80px;
margin-left: 114px;
`

export const ImgMacYellSvg = styled(MacYellSvg)`
position: absolute;
top: 354px;
left: 105px;
z-index: 1;
`

export const BenefitsContainer = styled.div`
margin-top: 24px;
border: 1.50px dashed ${({ theme }) => theme.primaryYellow};
border-radius: 30px;
width: 1312px;
height: 116px;
`;


