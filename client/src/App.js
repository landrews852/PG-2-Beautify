import './App.css';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import Home from './components/home'
import Services from './components/services';
import Market from './components/market';
import React from 'react';
import Navigator from './components/navbar';
import Footer from './components/footer';
import ProductDetail from './components/productDetail/productDetail';
import Cart from './components/cart';
import CreateProduct from './components/create product'
import CreateService from './components/create service'
import AboutUs from './components/aboutUs/aboutUs';

function App() {
  return (
    <>
    <Router>
      <div className="App">
        <div className="navigator">
        < Navigator className="navigator" /> {/* se agregó la barra a todas las páginas */}
        </div>
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/market" element={<Market />} />          
          <Route  path="/services" element={<Services/>}/>
          <Route  path= "/market/:id" element={<ProductDetail/>} />
          <Route  path="/services" element={<Services />}/>
          <Route  path="/aboutUs" element={<AboutUs />}/>
          <Route  path="/cart" element={<Cart />}/>
          <Route  path="/admin/product/create" element={<CreateProduct />}/>
          <Route  path="/admin/service/create" element={<CreateService />}/>
          
        </Routes>
        < Footer /> {/* se agregó el footer a todas las páginas */}
      </div>
    </Router>
    </>
  );
}

export default App;
