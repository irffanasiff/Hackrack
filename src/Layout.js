import { Box, Container, Divider } from '@chakra-ui/react';
import React from 'react';
import Header from './Navbar.js';
import Hero from './Components/Home/Hero';
import Hackclub from './Components/Home/Hackclub.jsx';
import Contributors from './Components/Contributors/Contributors.jsx';

const Layout = () => {
  return (
    <Container h='full' p='0' m='0' maxW='full'>
      <Header />
      <Hero />
      <Hackclub />
      <Contributors />
    </Container>
  );
};

export default Layout;
