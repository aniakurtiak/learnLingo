import styled from 'styled-components';
import { ReactComponent as GirlSvg } from '../../icons/girl.svg';
import { ReactComponent as MacYellSvg } from '../../icons/iMac-yellow.svg';
import { Link } from 'react-router-dom';

export const HomeContainer = styled.div`
  padding-left: 64px;
  padding-right: 64px;
`;

export const InfoContainer = styled.div`
display: flex;
gap: 24px;
margin-top: 20px;
`;


// ----------------MAIN TEXT------------------
export const StartContainer = styled.div`
border-radius: 30px;
width: 720px;
height: 530px;
padding-left: 70px;
background: #f8f8f8;
`;

export const Title = styled.h1`
width: 548px;
font-weight: 500;
font-size: 48px;
line-height: 1.17;
letter-spacing: -0.02em;
margin-top: 105px;
`
export const Lang = styled.span`
font-style: italic;
font-weight: 400;
background: ${({ theme }) => theme.lightYellow};
`
export const Text = styled.p`
font-weight: 400;
font-size: 16px;
line-height: 1.37;
letter-spacing: -0.02em;
margin-top: 32px;
width: 471px;
margin-bottom: 64px;
`
export const LinkStart = styled(Link)`
font-weight: 700;
font-size: 18px;
line-height: 1.56;
border-radius: 12px;
padding: 16px 88px;
width: 267px;
height: 60px;
color: ${({ theme }) => theme.primaryBlack};
background: ${({ theme }) => theme.primaryYellow};

&.hover {
    color: ${({ theme }) => theme.lightYellow};
}
`


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

