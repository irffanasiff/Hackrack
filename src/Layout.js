import { Box, Divider } from '@chakra-ui/react';
import React from 'react';
import Header from './Navbar.js';
import Hero from './Hero';
import Footer from './Footer';
import Banner from './Banner.js';

const Layout = () => {
  return (
    <Box>
      <Header />
      <Hero />
      <Banner />
      <Divider />
      <Footer />
    </Box>
  );
};

export default Layout;
