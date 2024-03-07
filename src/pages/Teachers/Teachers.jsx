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

const Teacher = ({authUser}) => {
  const dispatch = useDispatch();
  const teachers = useSelector(selectTeachers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);

  return (
    <TeachersContainer>
      {isLoading && !error && <b>Loading...</b>}
      <CardList authUser={authUser} teachers = {teachers}/>
    </TeachersContainer>
  );
};

export default Teacher;
