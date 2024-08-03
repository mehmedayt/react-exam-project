/* eslint-disable no-undef */

import { Routes, Route } from 'react-router-dom';

import Header from "./components/header/Header";
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Catalogue from './components/catalogue/Catalogue';
import CarCreate from './components/car-create/CarCreate';
import CarDetails from './components/car-details/CarDetails';
import Logout from './components/logout/Logout';
import PopUp from './components/popUp/PopUp';

import { AuthContextProvider } from './context/AuthContext';
import CarEdit from './components/car-edit/CarEdit';
import PrivateGuard from './components/common/PrivateGuard';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Terms from './components/terms/Terms';
/* eslint-disable no-unused-vars */
function App() {

  return (
    <AuthContextProvider>
    <div id="box">
      <Header />
      <PopUp/>

      <main id="main-content">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/logout' element={<Logout/>} />
          <Route path='/catalogue' element={<Catalogue/>} />
          <Route path='/items/:itemId/details' element={<CarDetails/>} />
          <Route element={<PrivateGuard/>} >
            <Route path='/create' element={<CarCreate/>} />
            <Route path='/items/:itemId/edit' element={<CarEdit/>} />
          </Route>
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/terms-and-condition' element={<Terms/>} />

        </Routes>

      </main>
    </div>
    <Footer/>
    </AuthContextProvider>
  );
}

export default App;
