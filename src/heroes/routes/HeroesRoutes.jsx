import {Navbar} from '../../UI/components/Navbar';
import { Route, Routes, Navigate } from 'react-router-dom';
import {DC,Marvel,Search,Hero} from '../';

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="marvel" element={<Marvel />}/>
          <Route path="dc" element={<DC/>} />

          <Route path="search" element={<Search/>} />
          <Route path="hero/:id" element={<Hero/>} />

          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
}

export default HeroesRoutes;