import './App.css';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import Home from './components/home'
import Services from './components/services';
import Market from './components/market';
import React from 'react';
import Navigator from './components/navbar';
import Footer from './components/footer';
<<<<<<< Updated upstream
import ProductDetail from './components/productDetail/productDetail';
=======
import Contact from './components/contact';
>>>>>>> Stashed changes

function App() {
  return (
    <>
    <Router>
      <div className="App">
        < Navigator /> {/* se agregó la barra a todas las páginas */}
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/market" element={<Market />} />          
<<<<<<< Updated upstream
          <Route  path="/services" element={<Services/>}/>
          <Route  path= "/home/:id" element={<ProductDetail/>} />
=======
          <Route  path="/services" element={<Services />}/>
          <Route  path="/contact" element={<Contact />}/>
>>>>>>> Stashed changes
        </Routes>
        < Footer /> {/* se agregó el footer a todas las páginas */}
      </div>
    </Router>
    </>
  );
}

export default App;
