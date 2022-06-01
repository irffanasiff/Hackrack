import { Box, Center, Container } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import HackClub from '/public/hackclub_flag.webp';

const Hackclub = () => {
  return (
    <Container
      maxW='full'
      p='0'
      m='0'
      display='flex'
      alignItems={'start'}
      justify='start'
      h='2rem'
    >
      <Box
        w='full'
        h='2rem'
        transform='translateY(-5rem)'
      >
        <Image src={HackClub} alt='hack club' width='300' height='155' />
      </Box>
    </Container>
  );
};

export default Hackclub;
