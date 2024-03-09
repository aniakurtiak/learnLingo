import styled from 'styled-components';
import { ReactComponent as GirlSvg } from '../../icons/girl.svg';
import { ReactComponent as MacYellSvg } from '../../icons/iMac-yellow.svg';

import { Link } from 'react-router-dom';

export const HomeContainer = styled.div`
  width: 100%;
  /* padding-left: 64px;
  padding-right: 64px; */
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
`;

export const InfoContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
`;

// ----------------MAIN TEXT------------------
export const StartContainer = styled.div`
 border-radius: 30px;
 background: #f8f8f8;
 width: 100%;
 padding-left: 15px;
 max-width: 720px;
 padding-right: 15px;
 height: 450px;
 
 @media screen and (min-width: 1140px) {
   width: 720px;
   height: 530px;
    padding-left: 70px;
    
  
}
`;

export const Title = styled.h1`
  font-weight: 500;
  line-height: 1.17;
  letter-spacing: -0.02em;
  font-size: 28px;
  margin-top: 50px;
  text-align: center;
  
  @media screen and (min-width: 1140px) {
    width: 548px;
    margin-top: 105px;
    font-size: 48px;
    text-align: start;
   
  
}

`;
export const Lang = styled.span`
  font-style: italic;
  font-weight: 400;
  background: ${({ theme }) => theme.lightYellow};
`;


export const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.37;
  letter-spacing: -0.02em;
  margin-top: 32px;
  margin-bottom: 64px;
  text-align: center;
  
  @media screen and (min-width: 1140px) {
    width: 471px;
    text-align: start;
  
}

  
`;

export const LinkStart = styled(Link)`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.56;
  border-radius: 12px;
  padding: 16px 48px;
  color: ${({ theme }) => theme.primaryBlack};
  background: ${({ theme }) => theme.primaryYellow};
margin-left: 20px;

  &:hover {
  color: ${({ theme }) => theme.primaryYellow};
    background: ${({ theme }) => theme.lightYellow};
  }

  @media screen and (min-width: 1140px) {
  font-size: 18px;
  padding: 16px 88px;
  width: 267px;
  height: 60px;
margin-left: 0;
}
`;

// -------------------IMAGE------------------------
export const ImageContainer = styled.div`
  position: relative;
  border-radius: 30px;
  max-width: 568px;
  height: 450px;
  background: ${({ theme }) => theme.lightYellow};

  @media screen and (min-width: 1140px) {
    width: 568px;
  height: 530px;
}
`;

export const ImgGirlSvg = styled(GirlSvg)`
 left: 25%;
  
  @media screen and (min-width: 1140px) {
    margin-top: 80px;
    margin-left: 114px;
    
}
`;

export const ImgMacYellSvg = styled(MacYellSvg)`
  position: absolute;
  left: 0;
  top: 270px;
  z-index: 1;
  
  @media screen and (min-width: 1140px) {
    top: 354px;
    left: 105px;
  
}
`;

// ------------BENEFITS--------------------------

export const BenefitsContainer = styled.div`
  margin-top: 24px;
  width: 100%;
  height: 116px;
  background-image: url(${require('../../icons/rectangle-yellow.png')});
  background-size: contain;
  background-repeat: no-repeat;
  padding: 40px 122px 40px 123px;
`;

export const BenefitsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  
  @media screen and (min-width: 1140px) {
    justify-content: space-between;
  
}
`;

export const BenefitsItem = styled.li`
  display: flex;
  gap: 16px;

`;

export const Nubers = styled.p`
font-weight: 500;
line-height: 1.14;
letter-spacing: -0.02em;
font-size: 20px;

@media screen and (min-width: 1140px) {
  font-size: 28px;
  
}

`
export const BenefitsText = styled.p`
font-weight: 400;
font-size: 14px;
line-height: 1.29;
letter-spacing: -0.02em;
color: rgba(18, 20, 23, 0.7);
white-space: pre-line;
`;

export const NewLine = styled.span`
display: block;
`