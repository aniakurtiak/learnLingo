import { child, get } from 'firebase/database';
import { TeatchersContainer } from './Teatchers.styled';
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

const Teatchers = () => {
  const [teatchers, setTeatchers] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await get(child(dbRef, 'teatchers'));

        if (snapshot.exists()) {
          const teatchersData = snapshot.val().map(teatcher => ({
            ...teatcher,
            id: nanoid(),
          }));
          setTeatchers(teatchersData);
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
    <TeatchersContainer>
      {teatchers ? (
        <div>
          {teatchers.map(teatcher => (
            <ul key={teatcher.id}>
              <li> {teatcher.name} </li>
              <li>
                <img
                  src={teatcher.avatar_url}
                  loading="lazy"
                  alt="avatar"
                  width="120"
                  height="120"
                />
              </li>
              <li>Speaks: {teatcher.languages}</li>
              <li>Lesson info: {teatcher.lesson_info}</li>
              <li>{teatcher.conditions}</li>
              <li>{teatcher.levels}</li>
            </ul>
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </TeatchersContainer>
  );
};

export default Teatchers;
