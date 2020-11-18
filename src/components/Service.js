import React from 'react';

export default function Service({ imgSrc, title, text }) {
  return (
    <div className="service">
      <div className="service__desc flex-1">
        <h5 className="service__desc_header">{title}</h5>
        <p>{text}</p>
      </div>
      <div className="service__image flex-1">
        <img src={imgSrc} alt="service"/>
      </div>
    </div>
  )
}
