import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Home from './components/Home';

function App() {

  return (
    <>
      <Navigation/>
      <Home/>
      <Footer/>
    </>
  );
}

export default App;
