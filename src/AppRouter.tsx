import { FC, memo } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import SplashScreenPage from './pages/SplashScreenPage';
import PlayScreenPage from './pages/PlayScreenPage';

const Router: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="*" Component={SplashScreenPage} />
      <Route path="/play" Component={PlayScreenPage} />
    </Routes>
  </BrowserRouter>
);

export const AppRouter = memo(Router);
