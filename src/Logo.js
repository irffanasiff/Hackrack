/* eslint-disable @next/next/no-page-custom-font */
import { Box, Center, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import LogoImage from '/public/icon.webp';

const Logo = (props) => {
  return (
    <Box>
      {/* <Text
        fontFamily={'Eldwin, Eldwin1'}
        fontSize={props.size}
        as='i'
        fontWeight={'600'}
        color={props.color}
      >
        hackrack
      </Text> */}
      <Center border='2px solid #316FA5' rounded='2xl' bg='#316FA5' p='3px'>
        <Image
          src={LogoImage}
          width='40'
          height='40'
          objectFit='cover'
          objectPosition={'center, center'}
          alt='hackrack logo'
        />
      </Center>
    </Box>
  );
};

export default Logo;
