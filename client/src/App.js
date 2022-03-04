import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import PanelUser from './components/features/panel/panelUser';
import Login from './components/features/login/login';

//Admin Pages
import PrivateRoute from './components/features/privateRoute/privateRoute';
import PanelAdmin from './components/features/panel/panelAdmin';
import CreateClient from './components/pages/admin/createClient/createClient';
import EditClient from './components/pages/admin/editClient/editClient';

//Client Pages
import Cart from './components/pages/client/cart/cart';
import AboutUs from './components/pages/client/aboutUs/aboutUs';
import Home from './components/pages/client/home/home'
import Services from './components/pages/client/services/services';
import Market from './components/pages/client/market/market';
import ProductDetail from './components/pages/client/productDetail/productDetail';
import InfoClient from './components/pages/client/infoClient/infoClient'
import Calendly from './components/features/calendly/calendly';
import CalendlyPerService from './components/features/calendly/calendlyPerService';

//Always Show
import Navigator from './components/elements/navBar/navBar';
import Footer from './components/elements/footer/footer';
import ConfigPage from './components/pages/config/configPage/configPage'


function App() {
  const {isLoading} = useAuth0();
  return (
    <>
      <Router>
        <div className="App">
          <div className="navigator">
            < Navigator className="navigator" /> {/* se agregó la barra a todas las páginas */}
          </div>
          <Routes>
            <Route  path="/" element={<Home />} />
            <Route  path="/calendario" element={<Calendly />} />
            <Route  path="/agendar/:id" element={<CalendlyPerService />} />
            <Route  path="/market" element={<Market />} />          
            <Route  path="/services" element={<Services/>}/>
            <Route  path="/market/:id" element={<ProductDetail/>} />
            <Route  path="/services" element={<Services />}/>
            <Route  path="/aboutUs" element={<AboutUs />}/>
            <Route  path="/cart" element={<Cart />}/>
            <Route  path="/admin/client/create" element={<CreateClient />}/>
            <Route  path="/client/edit" element={<EditClient />} />
            <Route  path="/profile" element={isLoading ? <span>Cargando</span>:<InfoClient />}/>
            <Route  path="/panel" element={isLoading ? <span>cargando</span> : 
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