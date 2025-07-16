import AppHeader from './Components/AppHeader';
import HomePage from './Components/Homepage';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import './App.css'


// import RogersPage from './pages/RogersPage';
// import BellPage   from './pages/BellPage';
// import VmediaPage from './pages/VmediaPage';
// import DodoPage   from './pages/DodoPage';
// import AboutPage  from './pages/AboutPage';

const App = () => {
  return (
    <BrowserRouter>
      {/* persist your header/nav across all pages */}
      <AppHeader />

      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="rogers"   element={<RogersPage />} />
        <Route path="bell"     element={<BellPage />} />
        <Route path="vmedia"   element={<VmediaPage />} />
        <Route path="dodo"     element={<DodoPage />} />
        <Route path="about"    element={<AboutPage />} /> */}

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
