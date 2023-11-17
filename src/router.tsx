import Main from '@/pages';
import EasySystem from '@/pages/portfolio/easy-system';
import Eventworld from '@/pages/portfolio/eventworld';
import { HashRouter, Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/사전청약-페이지-간편-구축-시스템" element={<EasySystem />} />
        <Route path="/이벤트월드" element={<Eventworld />} />
      </Routes>
    </HashRouter>
  )
}

export default Router;