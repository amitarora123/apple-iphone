import React from 'react';
import Hero from './components/Hero';
import Highlights from './components/highlights';
import Navbar from './components/Navbar';
import Model from './components/Model'
const App = () => {
  return <main className='bg-black'>
  <Navbar/>
  <Hero/>
  <Highlights/>
  <Model/>
  </main>;
};

export default App;
