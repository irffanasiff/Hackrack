import { Box, Divider } from '@chakra-ui/react';
import React from 'react';
import Header from './Navbar.js';
import Hero from './Hero';
import Footer from './Footer';
import Banner from './Banner.js';
import Contributors from './Contributors.js';

const Layout = () => {
  return (
    <Box>
      <Header />
      <Hero />
      <Banner />
      <Contributors />
      <Divider />
      <Footer />
    </Box>
  );
};

export default Layout;
