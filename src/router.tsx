import Main from '@/pages';
import EasySystem from '@/pages/portfolio/easy-system';
import Eventworld from '@/pages/portfolio/eventworld';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/portfolio/사전청약-페이지-간편-구축-시스템" element={<EasySystem />} />
        <Route path="/portfolio/이벤트월드" element={<Eventworld />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;