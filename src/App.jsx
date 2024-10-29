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
import Eskul from "./components/Eskul/Eskul";
import Berita from "./components/Berita/berita";


const App = () => {
  return (
    <main className='overflow-x-hidden'>
      <Navbar /> 
      <NavbarBanner />
      <ImageWithCaption />
      <Jurusan />
      <InstagramEmbed />
      <CardGuru /> 
      <Hero />
      <Dudi />
      <Eskul/>
      <Berita />
      <Footer />
    </main>
  );
};

export default App;
