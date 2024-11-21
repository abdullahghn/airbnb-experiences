import React from "react"
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Card from '../components/Card'
import cardData from './cardData.js'
import './App.css'

export default function App() {
  const cardElement = cardData.map((item) => {
    return  <Card
              key={item.id} 
              item={item}
            />
  })
  return(
    <div>
      <Nav />
      <Hero />
      {cardElement}
    </div>
  )
}