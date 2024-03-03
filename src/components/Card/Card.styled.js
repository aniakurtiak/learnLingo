import styled from 'styled-components';
import { ReactComponent as Heart } from '../../icons/heart.svg';

export const CardList = styled.ul`
  margin-top: 53px;
`;

export const CardItem = styled.li`
  min-width: 320px;
  max-width: 1184px;
  padding: 24px;
  display: flex;
  gap: 48px;
  align-items: flex-start;
  margin-bottom: 53px;
`;
export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  min-width: 120px;
  min-height: 120px;
  border: 3px solid ${({ theme }) => theme.lightYellow};
  position: relative;

  &::after {
    content: '';
    width: 10px;
    height: 10px;
    border: 2px solid #fff;
    border-radius: 50%;
    position: absolute;
    background: #38cd3e;
    right: 23px;
    top: 19px;
  }
`;

export const TeacherPhoto = styled.img`
  border-radius: 50%;
`;

export const ActiveDot = styled.div`
  width: 8px;
  height: 8px;
  border: 1px solid #fff;
  border-radius: 50%;
  position: absolute;
`;

// ----------------INFO--------------------------------------

export const InfoContainer = styled.div`
  width: 968px;
`;

export const InfoHeader = styled.div`
  display: flex;
  
  justify-content: space-between;
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #8a8a89;
`;

export const DataList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const ElementsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const DataItem = styled.li`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  padding-right: 16px;
  border-right: 1px solid rgba(18, 20, 23, 0.2);

  &:last-child {
    border-right: none;
  padding-right: 0;

  }

  &:nth-child(4){
    border-right: none;
    padding-right: 0;
  }
`;

export const Price = styled.span`
  color: #38cd3e;
`;

export const HeartBtn = styled(Heart)`
margin-left: 48px;
display: flex;
justify-content: flex-end;
`;

export const NameTitle = styled.h2`
font-weight: 500;
font-size: 24px;
line-height: 1;
margin-top: 8px;
`;

export const ListInfo = styled.ul`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ItemInfo = styled.li`
font-weight: 500;
font-size: 16px;
line-height: 1.5;
`;

export const ItemText = styled.span`
  color: #8a8a89;
`;

export const LangBlock = styled.ul`
  display: flex;
  text-decoration: underline;
text-decoration-skip-ink: none;
`;

export const Block = styled.div`
  display: flex;
`;