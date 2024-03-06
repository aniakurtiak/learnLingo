import { createAsyncThunk } from "@reduxjs/toolkit";
import { child, get } from "firebase/database";
import { dbRef } from '../../firebase';
import{auth} from '../../firebase';



// const token = auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
//   // Send token to your backend via HTTPS
//   // ...
//   console.log(token);
// }).catch(function(error) {
//   // Handle error
// });



export const fetchTeachers = createAsyncThunk(
    'teachers/fetchAll',
    async (_, thunkAPI) => {
      try {
        const snapshot = await get(child(dbRef, 'teachers'));
        const teachersData = [];
        snapshot.forEach((teacherSnapshot) => {
          teachersData.push({
            ...teacherSnapshot.val(),
            id: teacherSnapshot.key,
          });
        });
        return teachersData;
      } catch (error) {
        console.error(error);
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  