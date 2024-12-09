import { Route, Routes } from "react-router-dom";
import MyNavbar from "/src/components/myNavbar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeComponent from './components/HomeComponent.jsx';
import PageNotFound from './components/PageNotFound.jsx';
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
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </div>
    <div>
    <Footer/>
    </div>
    </>
  )
}


