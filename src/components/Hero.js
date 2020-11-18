import React from 'react';
import HeroImg from '../images/hero_image.svg'

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero__text flex-1">
          <h1>Voting made easy</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam explicabo necessitatibus quis enim debitis culpa eveniet repudiandae? Rem illo, officiis porro laudantium maxime.</p>
          <a href="#!" className="btn">Register</a>
        </div>
        <div className="hero__img_wrapper flex-1">
          <img className="hero__img" src={HeroImg} alt="voting art"/>
        </div>
      </div>
  </div>
  )
}
