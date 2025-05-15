import { Routes, Route } from 'react-router';

import NavBarLayout from './layouts/NavBarLayout';

import NotFound from './pages/404';
import File from './pages/File';
import Home from './pages/Home';
import UploadFile from './pages/UploadFile';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<NavBarLayout />}>
        <Route
          index
          element={<Home />}
        />
        <Route
          path="file/:id"
          element={<File />}
        />
        <Route
          path="upload-file"
          element={<UploadFile />}
        />
      </Route>
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
};

export default AppRoutes;
