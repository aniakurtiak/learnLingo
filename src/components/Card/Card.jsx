import React, { useState } from 'react';
import {
  Block,
  BtnMore,
  CardItem,
  CardList,
  DataItem,
  DataList,
  ElementsContainer,
  ExpText,
  HeartBtn,
  ImgContainer,
  InfoContainer,
  InfoHeader,
  ItemInfo,
  ItemText,
  LangBlock,
  LevelItem,
  LevelList,
  ListInfo,
  NameTitle,
  Price,
  RatingBlock,
  ReviewList,
  ReviewRating,
  ReviewText,
  Reviewblock,
  ReviewerImg,
  TeacherPhoto,
  Text,
} from './Card.styled';
import { ReactComponent as Book } from '../../icons/book-open.svg';
import { ReactComponent as Star } from '../../icons/star.svg';

export const Card = ({ teachers }) => {
  const [expandedTeacherId, setExpandedTeacherId] = useState(null);

  const handleReadMoreClick = teacherId => {
    setExpandedTeacherId(prevId => (prevId === teacherId ? null : teacherId));
  };

  const getButtonText = teacherId =>
    expandedTeacherId === teacherId ? 'Hide more' : 'Read More';

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
            {expandedTeacherId === teacher.id && (
              <div>
                <ExpText>{teacher.experience}</ExpText>
                <ReviewList>
                  {teacher.reviews ? (
                    teacher.reviews.map((review, index) => (
                      <li key={index}>
                        <Reviewblock>
                          <ReviewerImg
                            src={review.photo}
                            alt="avatar"
                            width="44"
                            height="44"
                          />
                          <ReviewRating>
                            <p>{review.reviewer_name}</p>
                            <RatingBlock>
                              <Star />
                              <p> {review.reviewer_rating}</p>
                            </RatingBlock>
                          </ReviewRating>
                        </Reviewblock>
                        <ReviewText>{review.comment}</ReviewText>
                      </li>
                    ))
                  ) : (
                    <li>There are no reviews yet</li>
                  )}
                </ReviewList>
              </div>
            )}
            <BtnMore onClick={() => handleReadMoreClick(teacher.id)}>
              {' '}
              {getButtonText(teacher.id)}
            </BtnMore>
            <LevelList>
              {teacher.levels ? (
                teacher.levels.map((level, index) => (
                  <LevelItem key={index}>
                    <p>{level}</p>
                  </LevelItem>
                ))
              ) : (
                <li>No levels</li>
              )}
            </LevelList>
          </InfoContainer>
        </CardItem>
      ))}
    </CardList>
  );
};
