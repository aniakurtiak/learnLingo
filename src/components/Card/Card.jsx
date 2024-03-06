import React, { useState } from 'react';
import {
  Block,
  BookBtn,
  BtnMore,
  DataItem,
  DataList,
  ElementsContainer,
  ExpText,
  Heart,
  HeartBtn,
  HeartDel,
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
import { Modal } from 'components/Modal/Modal';
import { BookTrialModal } from 'components/BookTrialModal/BookTrialModal';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/teachers/selectors';
import {
  addFavorites,
  deleteFavorites,
} from '../../redux/teachers/teachersSlice';


export const Card = ({ teacher, authUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedTeacherId, setExpandedTeacherId] = useState(null);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const toggleModal = () => {
    setIsOpen(prevState => !prevState);
  };

  const handleBookTrialClick = teacher => {
    setSelectedTeacher(teacher);
    toggleModal();
  };

  const close = () => {
    setIsOpen(false);
  };

  const handleReadMoreClick = teacherId => {
    setExpandedTeacherId(prevId => (prevId === teacherId ? null : teacherId));
  };

  const getButtonText = teacherId =>
    expandedTeacherId === teacherId ? 'Hide more' : 'Read More';

  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);


  const isFavorite = favorites.find(
    favorTeacher => favorTeacher.id === teacher.id
  );

   const onSwitchFavorite = () => {
    if (authUser) {
      if (!isFavorite) {
        dispatch(addFavorites(teacher));
      } else {
        dispatch(deleteFavorites(teacher));
      }
    } else {
      console.log('Please register to add teachers to favorites.');
    }
  };

  return (
    <>
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
              <HeartBtn type="button" onClick={onSwitchFavorite}>
                {isFavorite ? <HeartDel /> : <Heart />}
              </HeartBtn>
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
        {expandedTeacherId === teacher.id && (
          <BookBtn type="button" onClick={() => handleBookTrialClick(teacher)}>
            Book trial lesson
          </BookBtn>
        )}
      </InfoContainer>
      {isOpen && selectedTeacher && (
        <Modal toggleModal={toggleModal}>
          <BookTrialModal teacher={selectedTeacher} close={close} />
        </Modal>
      )}
    </>
  );
};
