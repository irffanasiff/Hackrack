import React from 'react';
import {
  Box,
  Stack,
  Flex,
  Text,
  ButtonGroup,
  IconButton,
} from '@chakra-ui/react';
import { FaGithub, FaWhatsapp, FaTwitter, FaDiscord } from 'react-icons/fa';
import Logo from './Logo';

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
        <Logo size={'3xl'} color={'#3779B6'} />
        <ButtonGroup variant='ghost' color='gray.600'>
          {/* <IconButton
            as='a'
            href='https://chat.whatsapp.com/LFKseiaqfC65rK97vJ2G5B'
            aria-label='Watsapp'
            icon={<FaWhatsapp fontSize='20px' />}
          /> */}
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
          <IconButton
            as='a'
            href='https://discord.gg/d8zuaxAjHg'
            aria-label='Discord'
            icon={<FaDiscord fontSize='20px' />}
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
