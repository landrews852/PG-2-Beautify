import './App.css';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import Home from './components/home'
import Login from './components/login'
import ButtonLogin from './components/buttonlogin';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route  path= "/" element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
