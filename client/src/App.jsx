/* eslint-disable no-undef */

import { Routes, Route } from 'react-router-dom';

import Header from "./components/header/Header";
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Catalogue from './components/catalogue/Catalogue';
import Create from './components/create/Create';
import Details from './components/details/Details';
import { useState } from 'react';
import { AuthContext } from './context/AuthContext';

/* eslint-disable no-unused-vars */
function App() {
  const [authState, setAuthState] = useState({});

  const changeAuthState = (state) => {
  localStorage.setItem('accessToken', state.accessToken);

    setAuthState(state);
  };

  const contextData = {
    userId: authState._id, 
    email: authState.email,
    accessToken: authState.accessToken,
    isAuthenticated: !!authState.email,
    changeAuthState,
  };

  return (
    <AuthContext.Provider value={contextData}>
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
    </AuthContext.Provider>
  );
}

export default App;
