import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';

//Admin Pages
import CreateProduct from './components/pages/admin/createProduct/createProduct'
import CreateService from './components/pages/admin/createService/createService'

//Client Pages
import Cart from './components/pages/client/cart/cart';
import AboutUs from './components/pages/client/aboutUs/aboutUs';
import Home from './components/pages/client/home/home'
import Services from './components/pages/client/services/services';
import Market from './components/pages/client/market/market';
import ProductDetail from './components/pages/client/productDetail/productDetail';

//Always Show
import Navigator from './components/elements/navBar/navBar';
import Footer from './components/elements/footer/footer';
import UserMenu from './components/elements/userMenu/userMenu';

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
          <Route  path="/prueba" element={<UserMenu/>}/>
        </Routes>
        < Footer /> {/* se agregó el footer a todas las páginas */}
      </div>
    </Router>
    </>
  );
}

export default App;
