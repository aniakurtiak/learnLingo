import { Card } from 'components/Card/Card';
import React from 'react'
import { ListWrapper, CardItem } from './CardList.styled';

export const CardList = ({authUser, teachers}) => {


  return (
   <ListWrapper>
        {teachers &&
            teachers.map(teacher => (
            <CardItem key={teacher.id}>
              <Card authUser={authUser} teacher = {teacher} />
            </CardItem>
             ))}
   </ListWrapper>
      )
}
