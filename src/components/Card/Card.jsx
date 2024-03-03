import React from 'react';
import {
    Block,
  CardItem,
  CardList,
  DataItem,
  DataList,
  ElementsContainer,
  HeartBtn,
  ImgContainer,
  InfoContainer,
  InfoHeader,
  ItemInfo,
  ItemText,
  LangBlock,
  LangList,
  ListInfo,
  NameTitle,
  Price,
  TeacherPhoto,
  Text,
} from './Card.styled';
import { ReactComponent as Book } from '../../icons/book-open.svg';
import { ReactComponent as Star } from '../../icons/star.svg';

export const Card = ({ teachers }) => {
  return (
    <CardList>
      {teachers.map(teacher => (
        <CardItem key={teacher.id}>
          <ImgContainer>
            <TeacherPhoto
              src={teacher.avatar_url}
              loading="lazy"
              alt="avatar"
              width="96"
              height="96"
            />
          </ImgContainer>
          <InfoContainer>
            <InfoHeader>
              <Text>Languages</Text>
              <DataList>
                <DataItem>
                  <ElementsContainer>
                    {' '}
                    <Book /> Lessons online
                  </ElementsContainer>
                </DataItem>
                <DataItem>Lessons done: {teacher.lessons_done}</DataItem>
                <DataItem>
                  <ElementsContainer>
                    {' '}
                    <Star /> Rating: {teacher.rating}
                  </ElementsContainer>
                </DataItem>
                <DataItem>
                  Price / 1 hour: <Price>{teacher.price_per_hour}$</Price>
                </DataItem>
                <li>
                  {' '}
                  <HeartBtn />
                </li>
              </DataList>
            </InfoHeader>
            <NameTitle>
              {' '}
              {teacher.name} {teacher.surname}{' '}
            </NameTitle>
            <ListInfo>
              <ItemInfo>
                <Block>
                  <ItemText>Speaks: &nbsp;</ItemText>
                  <LangBlock>
                    {teacher.languages ? (
                      teacher.languages.map((language, index, array) => (
                        <React.Fragment key={language}>
                          <li>{language}</li>
                          {index < array.length - 1 && <span>, &nbsp;</span>}
                        </React.Fragment>
                      ))
                    ) : (
                      <li>No languages available</li>
                    )}
                  </LangBlock>
                </Block>
              </ItemInfo>
              <ItemInfo>
                <ItemText>Lesson info:</ItemText> {teacher.lesson_info}
              </ItemInfo>
              <ItemInfo>
                <ItemText>Conditions:</ItemText> {teacher.conditions}
              </ItemInfo>
            </ListInfo>
          </InfoContainer>
        </CardItem>
      ))}
    </CardList>
  );
};
