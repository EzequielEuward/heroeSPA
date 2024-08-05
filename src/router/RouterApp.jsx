import { Route, Routes } from 'react-router-dom';
import { Login } from '../auth/';
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const RouterApp = () => {
  return (
    <>
      <Routes>

        <Route path="/login" element={<PublicRoute>
          <Login/>
        </PublicRoute>} />


        <Route path="/*" element={<PrivateRoute>
          <HeroesRoutes />
        </PrivateRoute >} />

      </Routes >
    </>
  )
}

export default RouterApp
