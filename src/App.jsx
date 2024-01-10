import { Route, Routes } from "react-router-dom";
import HeaderNavigation from './components/HeaderNavigation.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import HomeComponent from './components/HomeComponent.jsx';
import CompetenceComponent from './components/CompetenceComponent.jsx';
import ProjetsComponent from './components/ProjetsComponent.jsx';
// import './path-to-your-typography-styles.css';  // Ensure this is imported last


export default function App() {

  return (
    <>
    
    <HeaderNavigation/>
    <div className='container'>
      <Routes>
        <Route path='/' element={<HomeComponent/>}/>
        <Route path='/competences' element={<CompetenceComponent/>}/>
        <Route path='/projets' element={<ProjetsComponent/>}/>
      </Routes>
    </div>
    
    </>
  )
}


