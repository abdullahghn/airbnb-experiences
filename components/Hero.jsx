import React from "react"
import heroImg from '../src/assets/hero-img.png'

export default function Hero() {
    return (
        <div className="hero">
          <img src={heroImg} />
          <h1>Online Experiences</h1>
          <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}