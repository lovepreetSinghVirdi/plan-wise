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

// import BellPage   from './pages/BellPage';
// import VmediaPage from './pages/VmediaPage';
// import DodoPage   from './pages/DodoPage';
// import AboutPage  from './pages/AboutPage';

const App = () => {
  return (
    <BrowserRouter>

      <div className='application-wrapper'>
        <AppHeader />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="rogers" element={<RogersPlans />} />
          <Route path="plan" element={<ProvideDetails />} />
          {/* <Route path="bell"     element={<BellPage />} />
        <Route path="vmedia"   element={<VmediaPage />} />
        <Route path="dodo"     element={<DodoPage />} />
        <Route path="about"    element={<AboutPage />} /> */}

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>

    </BrowserRouter>
  );
}
export default App;
