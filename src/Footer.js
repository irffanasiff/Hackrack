import React from 'react';
import {
  Box,
  Stack,
  Image,
  Flex,
  Text,
  ButtonGroup,
  IconButton,
  Divider,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

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
            href='#'
            aria-label='LinkedIn'
            icon={<FaLinkedin fontSize='20px' />}
          />
          <IconButton
            as='a'
            href='#'
            aria-label='GitHub'
            icon={<FaGithub fontSize='20px' />}
          />
          <IconButton
            as='a'
            href='#'
            aria-label='Twitter'
            icon={<FaTwitter fontSize='20px' />}
          />
        </ButtonGroup>
      </Stack>
      <Flex alignSelf={{ base: 'center', sm: 'start' }}>
        <Text fontSize='sm'>
          www.hackrack.in
        </Text>
      </Flex>
    </Stack>
  </Box>
);
export default Footer;
