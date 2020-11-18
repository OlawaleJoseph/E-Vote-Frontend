import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Footer from '../components/Footer';

const Homepage = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <Services />
      <Footer />
    </Fragment>
  )
}


export default Homepage;