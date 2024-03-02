import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home/Home'));
const Teachers = lazy(() => import('../pages/Teachers/Teachers'));
const Favorites = lazy(() => import('../pages/Favorites/Favorites'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="teachers" element={<Teachers />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
