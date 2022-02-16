import './App.css';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import Home from './components/home'
import Login from './components/login'
import ButtonLogin from './components/buttonlogin';
import Services from './components/services';
import Navigator from './components/navbar';
import ProductDetail from './components/productDetail/productDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route  path= "/" element={<Navigator/>}>
            <Route index element={<Home/>} />
            <Route  path= "login" element={<Login/>} />
            <Route  path="modal" element={<ButtonLogin/>} />
            <Route  path="services" element={<Services/>}/>
            <Route  path="product/:id" element={<ProductDetail/>}/>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
