import { Route, Routes } from "react-router-dom";
// import HeaderNavigation from './components/HeaderNavigation.jsx';
import MyNavbar from "/src/components/myNavbar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeComponent from './components/HomeComponent.jsx';
// import ContactComponent from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";


export default function App() {

  return (
    <>
    <div>
    <MyNavbar/>
    </div>
    <div className='container'>
      <Routes>
        <Route path='/' element={<HomeComponent/>}/>
        {/* <Route path='/contact' element={<ContactComponent/>}/> */}
      </Routes>
    </div>
    <div>
    <Footer/>
    </div>
    </>
  )
}


