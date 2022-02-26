import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';

//Admin Pages
import PrivateRoute from './components/features/privateRoute/privateRoute';
import PanelAdmin from './components/features/panel/panelAdmin';
import CreateClient from './components/pages/admin/createClient/createClient';

//Client Pages
import Cart from './components/pages/client/cart/cart';
import AboutUs from './components/pages/client/aboutUs/aboutUs';
import Home from './components/pages/client/home/home'
import Services from './components/pages/client/services/services';
import Market from './components/pages/client/market/market';
import ProductDetail from './components/pages/client/productDetail/productDetail';
import PanelUser from './components/features/panel/panelUser';

//Always Show
import Navigator from './components/elements/navBar/navBar';
import Footer from './components/elements/footer/footer';
import Login from './components/features/login/login';

import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isLoading } = useAuth0()

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
          <Route  path="/admin/client/create" element={<CreateClient />}/>
          <Route path="/profile" element={isLoading ? <span>cargando</span> : 
          <PrivateRoute>
            <PanelAdmin/>
            <PanelUser/>
          </PrivateRoute>}/>
          <Route  path="/login" element={<Login />}/>
        </Routes>
        < Footer /> {/* se agregó el footer a todas las páginas */}
      </div>
    </Router>
    </>
  );
}

export default App;
