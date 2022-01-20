import Nav from './components/Nav'
import './App.css'
import Hero from './components/Hero'
import Card from './components/Card'
import React from 'react'
import data from './data'

function App() {
  const cardElement = data.map(item => {
    return (
      <Card 
            key={item.id}
            item={item}
      />
    )
  })
  return (
    <div className="App">
      <Nav/>
      <Hero/>
      <div className='cards-container'>
      {cardElement}
      </div>
    </div>
  );
}

export default App;
