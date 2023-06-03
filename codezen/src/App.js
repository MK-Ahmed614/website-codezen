import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/layout/Layout';
import Home from './components/pages/Home';
import About from './components/pages/About';
import OurWork from './components/pages/Our-Work';
import './App.scss';
import Contact from './components/pages/Contact';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="our-work" element={<OurWork />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
