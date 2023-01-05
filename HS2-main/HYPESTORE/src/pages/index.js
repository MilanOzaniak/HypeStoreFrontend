import React from 'react';
import { SliderData } from '../data/SliderData';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <Hero slides={SliderData}/>
  );
};

export default Home;