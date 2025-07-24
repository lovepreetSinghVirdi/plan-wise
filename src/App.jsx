// src/App.jsx
import './App.css';
import AppHeader from './Components/AppHeader';
import HomePage from './Components/Homepage';
import RogersPlans from './Components/RogersPlans';
import IprimusPlans from './Components/IprimusPlans';
import VmediaPlans from './Components/VmediaPlans';
import TeksavvyPlans from './Components/TeksavvyPlans';
import Aboutus from './Components/Aboutus';
import Footer from './Components/Footer';
import DodoPlans from './Components/DodoPlans'


import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';


import AvailablePlans from './Components/AvailablePlans';
import DataExtractor from './Components/DataExtractor';
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

        <Route path='/available-plans' element={<AvailablePlans />} />
        <Route path="dodo" element={<DodoPlans />} />
        <Route path="rogers" element={<RogersPlans />} />
        <Route path="iprimus" element={<IprimusPlans />} />
        <Route path="vmedia" element={<VmediaPlans />} />
        <Route path="teksavvy" element={<TeksavvyPlans />} />
        <Route path="aboutus" element={<Aboutus />} />
        <Route path='data-extractor' element={<DataExtractor />} />

        {/* fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
