import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from './components/signin';
import Signup from './components/signup';
import Home from './components/landingpage';
import Dashboard from './components/dashboard';
import Stokes from './components/Stokes';
import CryptoPriceGraph from './components/cryptopricegraph';




function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route exact path="signin" element={<Signin />}/>
        <Route exact path="signup" element={<Signup />} />
        <Route exact path="/" element={<Home/>} />
        <Route exact path="home" element={<Home/>} />
        <Route exact path="pricing" element={<Stokes/>} />
        <Route exact path="user/dashboard" element={<Dashboard/>} />
        <Route exact path="/cgraph" element={<CryptoPriceGraph/>} />
    

      
    </Routes>
    </BrowserRouter>
    
  
  );
}

export default App;


