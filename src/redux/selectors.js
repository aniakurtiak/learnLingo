const selectTeachers = state => state.teachers.items;
 
const selectIsLoading = state => state.teachers.isLoading;

const selectError = state => state.teachers.error;

// const selectAuthUser = state => state.auth.authUser;

const selectFavorites = state => state.favorites.items;

const selectVisibleItems = (state) => state.loadMore.visibleItems;

export {selectTeachers, selectIsLoading, selectError, selectFavorites, selectVisibleItems};