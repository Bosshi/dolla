import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import SigninPage from './pages/signin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <HomePage/> } exact/>
        <Route path='/signin' element={ <SigninPage/> } exact/>
      </Routes>
    </Router>
  ); 
}

export default App;
