import React from 'react';
import Footer from './piezas/Footer';
import Header from './piezas/Header';
import NavBar from './NavBar';
import Banner from './Banner';

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <NavBar />
      <Banner />
      <Footer />
    </React.Fragment>
  );
}
export default Home;

