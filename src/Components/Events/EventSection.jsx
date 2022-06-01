import { Center, Container, Flex, Wrap } from '@chakra-ui/react';
import React from 'react';
import Card from '../HOC/Card';
import EventsHeading from './Heading';

const EventSection = () => {
  return (
    <Container maxW={'8xl'}>
      <Center>
        <EventsHeading />
      </Center>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        border='2px solid red'
        maxW='5xl'
        mx='auto'
      >
        <Card />
        <Card />
        <Card />
      </Flex>
    </Container>
  );
};

export default EventSection;
