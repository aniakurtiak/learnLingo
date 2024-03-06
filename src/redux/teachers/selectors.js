const selectTeachers = state => state.teachers.items;
 
const selectIsLoading = state => state.teachers.isLoading;

const selectError = state => state.teachers.error;

const selectFavorites = state => state.teachers.favorites

export {selectTeachers, selectIsLoading, selectError, selectFavorites};