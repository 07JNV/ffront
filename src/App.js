import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from './components/signin';
import Signup from './components/signup';

import Dashboard from './components/dashboard';
import Stokes from './components/Stokes';
import CryptoPriceGraph from './components/cryptopricegraph';
import HomePage from './components/homepage.js';
// import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route exact path="signin" element={<Signin />}/>
        <Route exact path="home" element={<HomePage />}/>
        <Route exact path="signup" element={<Signup />} />
        <Route exact path="/" element={<HomePage/>} />
    
        <Route exact path="pricing" element={<Stokes/>} />
        <Route exact path="user/dashboard" element={<Dashboard/>} />
        <Route exact path="/cgraph" element={<CryptoPriceGraph/>} />
    

      
    </Routes>
    
    </BrowserRouter>
    
  
  );
}

export default App;


