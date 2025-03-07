import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NavbarForSchool from '../components/NavbarForSchool';
import CardContainer from '../components/CardContainer';
import NavigationTiles from '../components/NavigationTiles';


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