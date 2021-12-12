import React from 'react';
import { VscWarning, VscGithubAlt } from 'react-icons/vsc';
import {
  Box,
  HStack,
  Icon,
  Stack,
  Text,
  useColorModeValue,
  chakra,
  Button,
} from '@chakra-ui/react';

const Banner = () => (
  <Box as='section' pt='8' pb='12'>
    <Stack
      direction={{ base: 'column', sm: 'row' }}
      justifyContent='center'
      alignItems='center'
      py='3'
      px={{ base: '3', md: '6', lg: '8' }}
      color='white'
      bg={'blue.600'}
    >
      <HStack spacing='3'>
        <VscWarning Size={'10px'} />
        <Text fontWeight='medium' marginEnd='2'>
          We are currently building the Webpage.
        </Text>
      </HStack>
      <Box>
        <Button
          color={'white'}
          bgColor={'transparent'}
          border={'1px solid white'}
          alignSelf={'center'}
          _hover={{
            bgColor: '#78787838',
            shadow: 'sm',
            transform: ' translateY(-1px)',
            boxShadow: '0px 7px 20px 0px rgb(50, 50, 50, ,0.5)',
          }}
          _active={{
            bgColor: '#78787838',
            shadow: 'sm',
          }}
        >
          <Text as='span' mr={'4'}>
            Check Github
          </Text>
          <VscGithubAlt size={22} />
        </Button>
      </Box>
    </Stack>
  </Box>
);
export default Banner;
