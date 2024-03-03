import { child, get } from 'firebase/database';
import { TeachersContainer } from './Teachers.styled';
import { dbRef } from '../../firebase';
import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Card } from 'components/Card/Card';

//  const teatcherList = get(child(dbRef, 'teatchers'))
//     .then(snapshot => {
//       if (snapshot.exists()) {
//         const teatchers = snapshot.val();
//         console.log(teatchers);
//       } else {
//         console.log('No data available');
//       }
//     })
//     .catch(error => {
//       console.error(error);
//     });

// console.log(teatcherList);

const Teachers = () => {
  const [teachers, setTeachers] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await get(child(dbRef, 'teachers'));

        if (snapshot.exists()) {
          const teachersData = snapshot.val().map(teacher => ({
            ...teacher,
            id: nanoid(),
          }));
          setTeachers(teachersData);
        } else {
          console.log('No data available');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <TeachersContainer>
      {teachers ? (
        <Card teachers = {teachers}/>
      ) : (
        <div>Loading...</div>
      )}
    </TeachersContainer>
  );
};

export default Teachers;
