import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import OurServices from './components/OurServices/OurServices';
import OurWork from './components/OurWork/OurWork';
import Testimonials from './components/Testimonials/Testimonials';
import ContactUs from './components/ContactUs/ContactUs';

function App() {
  return (
    <div className="App">
      <NavBar />
        <div className='sectionNavigation'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/ourServices" element={<OurServices />} />
          <Route path="/ourWork/:projectId" element={<OurWork />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
        </div>
    </div>
  );
}

export default App;
