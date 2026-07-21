// import { useState } from 'react'
import Header from './components/Header'
import Profile from './components/Profile'
import CountriesVisited from './components/CountriesVisited' 
import Cat from './assets/cat.png'

import './App.css'

function App() {
  const countries = [
    { name: 'France', rating: 5 },
    { name: 'Japan', rating: 4 },
    { name: 'Brazil', rating: 3 },
  ];

  return (
    <div className="App">
      <Header />
      <Profile name="John Doe" email="john.doe@example.com" />
      <img src={Cat} alt="Cat" className="cat-image" />
      <CountriesVisited countries={countries} />
    </div>
  );
}

export default App  
 