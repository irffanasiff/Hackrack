import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  HStack,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import ArrowButton from '../Buttons/ArrowButton';
import CommunityText from './CommunityText';
import TextEffect from './Text';

const Hero = () => {
  return (
    <Container maxW='5xl' py={{ base: '5rem', md: '8rem' }}>
      <VStack spacing={{ base: '2rem', md: '2rem' }}>
        <Center flexDir={'column'} maxW='fit-content'>
          <TextEffect />
          <CommunityText />
        </Center>
        <Text
          textAlign={'center'}
          fontFamily={'Quicksand'}
          color='hackrack.gray'
          px={'4'}
          maxW='4xl'
          fontSize={['sm', 'md', 'xl']}
        >
          Hackrack is a community run by students based in India. We are
          supported by{' '}
          <Link
            fontWeight={'500'}
            color='red'
            href='https://hackclub.com/'
            _hover={{
              WebkitTextDecorationColor: 'red',
              textDecorationLine: 'underline',
              textDecorationStyle: 'wavy',
              textDecorationColor: 'red',
            }}
          >
            Hackclub
          </Link>
          . We conduct and attend Workshops, Events, Hackathons and other fun
          Community meetups. If you are a tech enthusiast join Hackrack, lets
          build together.
        </Text>
        <ArrowButton variant='light'>
          <Text
            fontFamily={'Quicksand'}
            fontSize={{ base: 'sm', md: 'md', lg: 'xl' }}
          >
            Join{' '}
            <Text as='span' fontWeight={'500'}>
              Hackrack
            </Text>
          </Text>
        </ArrowButton>
      </VStack>
    </Container>
  );
};

export default Hero;
