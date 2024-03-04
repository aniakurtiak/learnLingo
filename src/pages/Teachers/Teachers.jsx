import { Card } from 'components/Card/Card';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeachers } from '../../redux/teachers/operations';
import {
  selectError,
  selectIsLoading,
  selectTeachers,
} from '../../redux/teachers/selectors';
import { TeachersContainer } from './Teachers.styled';

const Teacher = () => {
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
      <Card teachers={teachers} />
    </TeachersContainer>
  );
};

export default Teacher;
