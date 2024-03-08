import styled from 'styled-components';

export const TeachersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 128px;
  padding-right: 128px;
`;

export const LoadMoreBtn = styled.button`
  font-weight: 700;
font-size: 18px;
line-height: 156%;
border-radius: 12px;
padding: 16px 48px;
width: 232px;
height: 60px;
background: ${({ theme }) => theme.primaryYellow};
margin-bottom: 32px;


&:hover {
  background: ${({theme}) => theme.primaryLightYellow};
}
`;