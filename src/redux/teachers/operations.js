import { createAsyncThunk } from "@reduxjs/toolkit";
import { child, get } from "firebase/database";
import { dbRef } from '../../firebase';


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

  