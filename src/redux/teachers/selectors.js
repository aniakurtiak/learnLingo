const selectTeachers = state => state.teachers.items;
 
const selectIsLoading = state => state.teachers.isLoading;

const selectError = state => state.teachers.error;

export {selectTeachers, selectIsLoading, selectError};