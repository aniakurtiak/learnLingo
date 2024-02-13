import styled from 'styled-components';

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

export const ImageContainer = styled.div`
border-radius: 30px;
width: 568px;
height: 530px;
background: ${({ theme }) => theme.lightYellow};
`;

export const BenefitsContainer = styled.div`
margin-top: 24px;
border: 1.50px dashed ${({ theme }) => theme.primaryYellow};
border-radius: 30px;
width: 1312px;
height: 116px;


`;
