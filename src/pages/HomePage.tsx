import React from 'react';
import Header from '../components/Header';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServiceSection';
import NavbarForSchool from '../components/NavbarForSchool';
import CardContainer from '../components/CardContainer';


const HomePage: React.FC = () => {
  return (
    <div className="home-page">
    <NavbarForSchool />
      <Header />
      <CardContainer />
      <Footer />
    </div>
  );
};

export default HomePage;