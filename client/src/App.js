import './App.css';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import Home from './components/home'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
<<<<<<< HEAD
          <Route  path= "/" element={<Home/>} />
=======
          <Route path="/" element={<Home />} />
>>>>>>> 8933d3fbdac4d00f6e750372525fa8f55dfe216d
        </Routes>
      </div>
    </Router>
  );
}

export default App;
