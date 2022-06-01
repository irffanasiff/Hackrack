import { Box, Center, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi';

const ArrowButton = (props) => {
  const [hover, setHover] = useState(false);
  return (
    <Box
      display='flex'
      alignItems={'center'}
      justifyContent='space-between'
      gap='1rem'
      as='button'
      bg={props.variant === 'dark' ? 'hackrack.blue' : 'hackrack.lightGray'}
      p='0.8rem 2rem'
      rounded='full'
      color={props.variant === 'dark' ? 'white' : 'black'}
      fontSize={{ base: 'sm', md: 'md' }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {props.children}
      <Flex
        alignItems={'flex-end'}
        justifyContent='end'
        w='1.5rem'
        transform={'rotate(-45deg)'}
        transition='all 0.5s'
        overflow='hidden'
      >
        <Center
          gap='0.8rem'
          direction='row'
          transition='all 0.5s'
          transform={hover && 'translateX(2rem) '}
        >
          <Center transition='all 0.5s' transform={!hover && 'scale(0.2)'}>
            <HiOutlineArrowRight size='20' />
          </Center>
          <Center transition='all 0.5s' transform={hover && 'scale(0.2)'}>
            <HiOutlineArrowRight size='20' />
          </Center>
        </Center>
      </Flex>
    </Box>
  );
};

export default ArrowButton;
