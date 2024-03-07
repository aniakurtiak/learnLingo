import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeachers } from '../../redux/teachers/operations';
import {
  selectError,
  selectIsLoading,
  selectTeachers,
} from '../../redux/selectors';
import { TeachersContainer } from './Teachers.styled';
import { CardList } from 'components/CardList/CardList';
import { fetchFavorites } from '../../redux/favorites/operations';

const Teacher = ({authUser}) => {
  const dispatch = useDispatch();
  const teachers = useSelector(selectTeachers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTeachers());
    // Зчитуємо стан favorites при завантаженні сторінки teachers
    if (authUser && authUser.uid) {
      dispatch(fetchFavorites(authUser.uid));
    }
  }, [dispatch, authUser]);

  return (
    <TeachersContainer>
      {isLoading && !error && <b>Loading...</b>}
      <CardList authUser={authUser} teachers = {teachers}/>
    </TeachersContainer>
  );
};

export default Teacher;
