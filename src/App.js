
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import LandingPage from './pages/landingpage/LandingPage';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Verify from './pages/verify/Verify';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path='/Register' element={<Register/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Verify' element={<Verify/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
