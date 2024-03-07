const selectTeachers = state => state.teachers.items;
 
const selectIsLoading = state => state.teachers.isLoading;

const selectError = state => state.teachers.error;

// const selectFavorites = state => state.teachers.favorites;

// const selectAuthUser = state => state.auth.authUser;

const selectFavorites = state => state.favorites.items;



export {selectTeachers, selectIsLoading, selectError, selectFavorites};