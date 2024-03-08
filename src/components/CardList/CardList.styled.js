import styled from "styled-components";

export const ListWrapper = styled.ul`
 margin-top: 53px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 min-width: 320px;
  max-width: 1184px;
`;

export const CardItem = styled.li`
  width: 100%;
  padding: 24px;
  display: flex;
flex-wrap: wrap;


  @media screen and (min-width: 1140px) {
    gap: 48px;
    align-items: flex-start;
    margin-bottom: 53px;
  flex-wrap: nowrap;
}
`;