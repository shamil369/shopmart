import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/Footer/Footer';
function App() {
  
  return (
    <BrowserRouter>

     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>} ></Route>
     </Routes>
     <Footer/>
    </BrowserRouter>
  )
}

export default App
