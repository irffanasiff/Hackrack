import React from 'react';
import {
  Box,
  Stack,
  Image,
  Flex,
  Text,
  ButtonGroup,
  IconButton,
} from '@chakra-ui/react';
import { FaGithub, FaWhatsapp, FaTwitter } from 'react-icons/fa';

const Footer = () => (
  <Box
    as='footer'
    role='contentinfo'
    mx='auto'
    maxW='7xl'
    py='12'
    px={{ base: '4', md: '8' }}
  >
    <Stack>
      <Stack direction='row' spacing='4' align='center' justify='space-between'>
        <Image
          alt='logo'
          src='/hackracklogo.png'
          boxSize={'32'}
          objectFit={'scale-down'}
          h={'-moz-max-content'}
        />
        <ButtonGroup variant='ghost' color='gray.600'>
          <IconButton
            as='a'
            href='https://chat.whatsapp.com/LFKseiaqfC65rK97vJ2G5B'
            aria-label='Watsapp'
            icon={<FaWhatsapp fontSize='20px' />}
          />
          <IconButton
            as='a'
            href='https://github.com/HackrackClub'
            aria-label='GitHub'
            icon={<FaGithub fontSize='20px' />}
          />
          <IconButton
            as='a'
            href='https://twitter.com/hackrack_'
            aria-label='Twitter'
            icon={<FaTwitter fontSize='20px' />}
          />
        </ButtonGroup>
      </Stack>
      <Flex alignSelf={{ base: 'center', sm: 'start' }}>
        <Text fontSize='sm'>www.hackrack.in</Text>
      </Flex>
    </Stack>
  </Box>
);
export default Footer;
