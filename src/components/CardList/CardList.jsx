import { Card } from 'components/Card/Card';
import React from 'react'
import { ListWrapper, CardItem } from './CardList.styled';

export const CardList = ({authUser, teachers}) => {


  return (
   <ListWrapper>
        {teachers &&
          Array.isArray(teachers) &&
            teachers.map(teacher => (
              <CardItem key={teacher?.id}>
      {teacher && <Card authUser={authUser} teacher={teacher} />}
            </CardItem>
             ))}
   </ListWrapper>
      )
}
