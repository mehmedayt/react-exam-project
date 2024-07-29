/* eslint-disable no-undef */

import { Routes, Route } from 'react-router-dom';

import Header from "./components/header/Header";
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Catalogue from './components/catalogue/Catalogue';
import Create from './components/create/Create';
import Details from './components/details/Details';
import { AuthContextProvider } from './context/AuthContext';

/* eslint-disable no-unused-vars */
function App() {

  return (
    <AuthContextProvider>
    <div id="box">
      <Header />

      <main id="main-content">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/catalogue' element={<Catalogue/>} />
          <Route path='/items/:itemId/details' element={<Details/>} />
          <Route path='/create' element={<Create/>} />
        </Routes>

      </main>
    </div>
    </AuthContextProvider>
  );
}

export default App;
