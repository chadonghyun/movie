import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routers/Home.js'
import Header from './components/Header';
// import Notfound from './rotes/Notfound';

function App() {
  return (
    <BrowserRouter >
      <Header />
      <Routes>
        <Route path='/*' element={<Home />} />
        {/* <Route path='/movie/' Component={Home} /> */}
        {/* <Route path='/movie/home' Component={Home} /> */}
        {/* <Route path='*' exact={true} Component={Notfound} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;