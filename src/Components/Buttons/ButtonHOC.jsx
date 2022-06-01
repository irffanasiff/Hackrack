import { Box, Center, Text } from '@chakra-ui/react';
import React from 'react';

const ButtonHOC = ({ to, title }) => {
  return (
    <Box
      mx='auto'
      w='fit-content'
      as='button'
      href={to}
      rounded='full'
      animation='all 2s'
      bgGradient='linear(to-l, #3783F6 0.1%, #02CBDE 41.42%, #5F0FCD 101.92%)'
      _hover={{
        animation: 'al 2s',
        bgImage:
          'linear-gradient(30deg, #3783F6 0.1%, #02CBDE 41.42%, #5F0FCD 101.92%)',
      }}
      p='2px'
    >
      <Box rounded='full' bg='white' p='0.8rem 1.6rem'>
        <Text
          color='black'
          fontWeight={'300'}
          fontSize={{ base: '16px', md: '20px' }}
        >
          {title}
        </Text>
      </Box>
    </Box>
  );
};

export default ButtonHOC;
