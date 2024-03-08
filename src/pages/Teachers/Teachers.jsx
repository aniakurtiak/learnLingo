import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeachers } from '../../redux/teachers/operations';
import {
  selectError,
  selectIsLoading,
  selectTeachers,
} from '../../redux/selectors';
import { LoadMoreBtn, TeachersContainer } from './Teachers.styled';
import { CardList } from 'components/CardList/CardList';
import { fetchFavorites } from '../../redux/favorites/operations';
import { MyLoader } from 'components/MyLoader/MyLoader';

const Teacher = ({ authUser }) => {
  const dispatch = useDispatch();
  const teachers = useSelector(selectTeachers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [visibleTeachers, setVisibleTeachers] = useState(4);

  const loadMoreTeachers = () => {
    setVisibleTeachers((prevVisibleTeachers) => prevVisibleTeachers + 4);
  };

  useEffect(() => {
    dispatch(fetchTeachers());
    // Зчитуємо стан favorites при завантаженні сторінки teachers
    if (authUser && authUser.uid) {
      dispatch(fetchFavorites(authUser.uid));
    }
  }, [dispatch, authUser]);

  return (
    <TeachersContainer>
      {isLoading && !error && <MyLoader/>}
      <CardList authUser={authUser} teachers={teachers.slice(0, visibleTeachers)} />
      {teachers.length > visibleTeachers && (
        <LoadMoreBtn onClick={loadMoreTeachers}>Load More</LoadMoreBtn>
      )}
    </TeachersContainer>
  );
};

export default Teacher;
