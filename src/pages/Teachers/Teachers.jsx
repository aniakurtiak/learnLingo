import { child, get } from 'firebase/database';
import { TeachersContainer } from './Teachers.styled';
import { dbRef } from '../../firebase';
import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

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
        <div>
          {teachers.map(teacher => (
            <ul key={teacher.id}>
              <li> {teacher.name} </li>
              <li>
                <img
                  src={teacher.avatar_url}
                  loading="lazy"
                  alt="avatar"
                  width="120"
                  height="120"
                />
              </li>
              <li>Speaks: {teacher.languages}</li>
              <li>Lesson info: {teacher.lesson_info}</li>
              <li>{teacher.conditions}</li>
              <li>{teacher.levels}</li>
            </ul>
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </TeachersContainer>
  );
};

export default Teachers;
