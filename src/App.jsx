import { Route, Routes } from "react-router-dom";
// import HeaderNavigation from './components/HeaderNavigation.jsx';
import MyNavbar from "/src/components/myNavbar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeComponent from './components/HomeComponent.jsx';


export default function App() {

  return (
    <>
    <div>
    <MyNavbar/>
    </div>
    <div className='container'>
      <Routes>
        <Route path='/' element={<HomeComponent/>}/>
      </Routes>
    </div>
    </>
  )
}


