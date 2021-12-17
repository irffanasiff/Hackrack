/* eslint-disable @next/next/no-page-custom-font */
import { Box, Image } from '@chakra-ui/react';
import React from 'react';

const Logo = () => {
  return (
    <Box>
      <Image
        src='/hackracklogo.png'
        alt='logo'
        boxSize={'7rem'}
        objectFit={'scale-down'}
        textAlign={'center'}
      />
    </Box>
  );
};

export default Logo;
