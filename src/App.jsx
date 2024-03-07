import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { lazy, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { PrivateRoute } from 'components/navigation/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthUser } from './redux/selectors';
import { setAuthUser } from './redux/authUser/authSlice';

const Home = lazy(() => import('./pages/Home/Home'));
const Teachers = lazy(() => import('./pages/Teachers/Teachers'));
const Favorites = lazy(() => import('./pages/Favorites/Favorites'));

export const App = () => {
// const authUser = useSelector(selectAuthUser);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       dispatch(setAuthUser(user));
//     });

//     return () => {
//       unsubscribe();
//     };
//   }, [dispatch]);

  const [authUser, setAuthUset] = useState(auth.currentUser);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, user => {
      if (user) {
        setAuthUset(user);
      } else {
        setAuthUset(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  if (authUser !== null) {
    console.log(authUser.displayName);
  }

  
  return (
    <Routes>
      <Route path="/" element={<Layout authUser={authUser} />}>
        <Route index element={<Home />} />
        <Route path="teachers" element={<Teachers authUser={authUser} />} />
        <Route
          path="favorites"
          element={
            <PrivateRoute authUser={authUser}>
              <Favorites  authUser={authUser}/>
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
