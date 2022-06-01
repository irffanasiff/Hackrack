import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import Card1 from '/public/Images/card1.webp';

const Card = () => {
  return (
    <VStack
      maxW={{ base: 'fit-content' }}
      p='5px'
      bgGradient='linear-gradient(to-l, #3783F6 0.1%, #02CBDE 41.42%, #5F0FCD 101.92%)'
      m='1rem'
      shadow={'2xl'}
      rounded='2xl'
      spacing='0'
    >
      <Center border='2px solid red' w={{ base: '20vw', md: '20rem' }}>
        <Image
          src={Card1}
          alt='card1'
          layout='responsive'
          h='500'
          objectFit='contain'
        />
      </Center>
      <HStack
        roundedBottom={'xl'}
        justifyContent={'space-around'}
        // bg='gray.200'
        bgGradient='linear(to-l, #3783F6 0.1%, #02CBDE 41.42%, #5F0FCD 101.92%)'
        w='full'
        p='1rem'
        fontSize={{ base: 'xs', md: 'md' }}
      >
        <Text color='white'>9:00 PM - Dec 27</Text>
        <Button
          fontSize={{ base: 'xs', md: 'md' }}
          fontWeight={'400'}
          rounded='full'
          bg='white'
        >
          <Text
            bgClip={'text'}
            bgGradient='linear(to-l, #3783F6 0.1%, #02CBDE 41.42%, #5F0FCD 101.92%)'
          >
            Register
          </Text>
        </Button>
      </HStack>
    </VStack>
  );
};

export default Card;
