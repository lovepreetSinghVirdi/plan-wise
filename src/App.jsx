// src/App.jsx
import './App.css';
import AppHeader from './Components/AppHeader';
import HomePage from './Components/Homepage';
import RogersPlans from './Components/RogersPlans';
import BellPlans from './Components/BellPlans';
import VmediaPlans from './Components/VmediaPlans';
import TeksavvyPlans from './Components/TeksavvyPlans';
import Aboutus from './Components/Aboutus';
import Footer from './Components/Footer';


import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';


import AvailablePlans from './Components/AvailablePlans';
// import AppLoader from './Components/FormComponents/Loader';
// import { useState } from 'react';


const App = () => {
  // const [isLoading, _] = useState(true);
  return (
    <BrowserRouter>
      {/* {isLoading ? <AppLoader message={'Please wait....'} /> : null} */}
      <AppHeader />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="rogers" element={<RogersPlans />} />
        <Route path='/available-plans' element={<AvailablePlans />} />

        <Route path="rogers" element={<RogersPlans />} />
        <Route path="bell" element={<BellPlans />} />
        <Route path="vmedia" element={<VmediaPlans />} />
        <Route path="teksavvy" element={<TeksavvyPlans />} />
        <Route path="aboutus" element={<Aboutus />} />

        {/* fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
