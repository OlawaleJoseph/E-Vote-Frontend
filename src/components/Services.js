import React from 'react';
import Service from './Service';
import Img from '../images/hero_image.svg';

export default function Services() {
  return (
    <div className='services'>
      <h3 className="services__header">Services</h3>
      <h5 className="services__sub_header">What we do</h5>
      <Service
        imgSrc={Img}
        title='Online Voting System'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dicta dolorum aliquid. Recusandae, explicabo quia. Ea, voluptate vel. Laboriosam, eveniet.'
      />
      <Service
        imgSrc={Img}
        title='Online Voting System'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dicta dolorum aliquid. Recusandae, explicabo quia. Ea, voluptate vel. Laboriosam, eveniet.'
      />
      <Service
        imgSrc={Img}
        title='Online Voting System'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dicta dolorum aliquid. Recusandae, explicabo quia. Ea, voluptate vel. Laboriosam, eveniet.'
      />
      <Service
        imgSrc={Img}
        title='Online Voting System'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dicta dolorum aliquid. Recusandae, explicabo quia. Ea, voluptate vel. Laboriosam, eveniet.'
      />
      <Service
        imgSrc={Img}
        title='Online Voting System'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dicta dolorum aliquid. Recusandae, explicabo quia. Ea, voluptate vel. Laboriosam, eveniet.'
      />
    </div>
  )
}
