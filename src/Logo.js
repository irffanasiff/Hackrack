/* eslint-disable @next/next/no-page-custom-font */
import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const Logo = (props) => {
  return (
    <Box>
      <Text
        fontFamily={'Eldwin, Eldwin1'}
        fontSize={props.size}
        as='i'
        fontWeight={'600'}
        color={props.color}
      >
        hackrack
      </Text>
    </Box>
  );
};

export default Logo;
