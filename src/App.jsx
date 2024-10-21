import React from 'react';
import Navbar from './components/Navbar/Navbar';
import NavbarBanner from "./components/Navbar/NavbarBanner";
import Hero from './components/Hero/Hero';
import CardGuru from './components/CardGuru/CardGuru';
import Footer from './components/Footer/Footer';
import Jurusan from './components/Jurusan/Jurusan';
import Dudi from './components/Dudi/Dudi';
import ImageWithCaption from "./components/Carousel/Carousel";
import InstagramEmbed from "./components/Instagram/Instagram";


const App = () => {
  return (
    <main className='overflow-x-hidden'>
      <Navbar /> 
      <NavbarBanner />
      <ImageWithCaption />
      <Jurusan />
      <InstagramEmbed />
      <Hero />
      <CardGuru />
      <Dudi />
      <Footer />
    </main>
  );
};

export default App;
