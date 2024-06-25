import { Route, Routes } from 'react-router-dom';
import { Login } from '../auth/';
import {HeroesRoutes} from '../heroes/routes/HeroesRoutes';

export const RouterApp = () => {
  return (
    <>

      <Routes>
        <Route path='login' element={<Login/>}></Route>
        <Route path="/*" element={<HeroesRoutes />} />

      </Routes >
    </>
  )
}

export default RouterApp
