import {
  Avatar,
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import twitter from '/public/svg/twitter.svg';
import whatsapp from '/public/svg/whatsapp.svg';
import figma from '/public/svg/figma.svg';
import mail from '/public/svg/mail.svg';

var i = 1;
function getRandomInt(max) {
  return (i = i + 5);
  //return Math.floor(Math.random() * Math.floor(max));
}

const Blob = () => {
  return (
    <Center
      minW={{ base: '20rem', md: '38rem' }}
      rounded='full'
      border='2px solid red'
    >
      <svg
        viewBox={'0 0 200 200'}
        height='50rem'
        width='50rem'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fill='#316FA5'
          d='M45.1,-78.5C58.6,-70.2,69.9,-58.5,78.5,-44.9C87.1,-31.2,93,-15.6,92.3,-0.4C91.6,14.8,84.2,29.6,76,43.9C67.7,58.2,58.6,71.9,45.8,80.6C33,89.2,16.5,92.7,0.1,92.4C-16.2,92.2,-32.4,88.2,-46.8,80.5C-61.2,72.8,-73.7,61.3,-81.5,47.2C-89.2,33.2,-92.2,16.6,-90.6,0.9C-89,-14.8,-82.9,-29.6,-75,-43.4C-67.2,-57.2,-57.5,-70.1,-44.7,-78.8C-31.9,-87.6,-16,-92.2,-0.1,-92C15.8,-91.8,31.5,-86.9,45.1,-78.5Z'
          transform='translate(100 100)'
        />
      </svg>
    </Center>
  );
};
const Contributors = () => {
  return (
    <Container h='130vh' maxW={'full'} overflow='hidden'>
      <Blob />
    </Container>
  );
};

export default Contributors;
