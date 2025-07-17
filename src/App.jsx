import AppHeader from './Components/AppHeader';
import HomePage from './Components/Homepage';
import RogersPlans from './Components/RogersPlans'
import ProvideDetails from './Components/ProvideDetails'

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import './App.css'
import Footer from './Components/Footer';
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
        <Route path="plan" element={<ProvideDetails />} />
        <Route path='/available-plans' element={<AvailablePlans />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />

    </BrowserRouter>
  );
}
export default App;
