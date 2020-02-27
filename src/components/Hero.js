import React from 'react'
import logo from './../hero.svg';

const Hero = () => {
  return (
    <picture className="hero">
      <img src={logo} alt="programmer"/>
    </picture>
  )
}

export default Hero
