import './App.css';
import AppHeader from './Components/AppHeader';
import HomePage from './Components/Homepage';
import RogersPlans from './Components/RogersPlans';
import IprimusPlans from './Components/IprimusPlans';
import VmediaPlans from './Components/VmediaPlans';
import TeksavvyPlans from './Components/TeksavvyPlans';
import AboutUs from './Components/Aboutus';
import Footer from './Components/Footer';
import DodoPlans from './Components/DodoPlans';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import SearchResults from './Components/SearchResults';
import Crawler from './Components/Crawler';

import { Box } from '@mui/material';

const App = () => {
  return (
    <Box sx={{
      width: '100%',
      overflowX: 'visible',
      overflowY: 'visible',
    }}>
      <Router basename={import.meta.env.BASE_URL}>
        <AppHeader />

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='search-results' element={<SearchResults />} />
          <Route path='dodo' element={<DodoPlans />} />
          <Route path='rogers' element={<RogersPlans />} />
          <Route path='iprimus' element={<IprimusPlans />} />
          <Route path='vmedia' element={<VmediaPlans />} />
          <Route path='teksavvy' element={<TeksavvyPlans />} />
          <Route path='aboutus' element={<AboutUs />} />
          <Route path='crawler' element={<Crawler />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>

        <Footer />
      </Router>
    </Box>
  );
}

export default App;
