import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from './components/signin';
import Signup from './components/signup';
import Home from './components/landingpage';
import Pricing from './components/pricing';
import Dashboard from './components/dashboard';

function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route exact path="signin" element={<Signin />}/>
        <Route exact path="signup" element={<Signup />} />
        <Route exact path="/" element={<Home/>} />
        <Route exact path="home" element={<Home/>} />
        <Route exact path="pricing" element={<Pricing/>} />
        <Route exact path="user/dashboard" element={<Dashboard/>} />
      
    </Routes>
    </BrowserRouter>
    
  
  );
}

export default App;


