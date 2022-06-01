/* eslint-disable react-hooks/rules-of-hooks */
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Container,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Logo from './Logo';

const Links = ['Events', 'Blog', 'Team'];

const NavLink = ({ children }) => (
  <Link
    fontFamily={'Quicksand'}
    color='hackrack.gray'
    px={2}
    py={2}
    fontSize='xl'
    fontWeight={'500'}
    rounded={'md'}
    href={'#'}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container as='header' maxW='6xl' w='full' py='1rem'>
      <Flex
        h={16}
        alignItems={'center'}
        justifyContent={'space-between'}
        maxW={'6xl'}
        mx={'auto'}
      >
        <HStack>
          {/* <Image
              src='/hackracklogo.png'
              alt='logo'
              boxSize={'7rem'}
              objectFit={'scale-down'}
              textAlign={'center'}
            /> */}
          <Logo size={'3xl'} />
        </HStack>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack
          border='2px solid red'
          alignItems={'center'}
          spacing={8}
          display={{ base: 'none', md: 'flex' }}
        >
          <HStack as={'nav'} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
        </HStack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={2}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Container>
  );
}
