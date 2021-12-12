/* eslint-disable react-hooks/rules-of-hooks */
import {
  Box,
  Flex,
  Image,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = ['Event', 'Blogs', 'Team'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        px={'4'}
        as='header'
        position='fixed'
        w={'100vw'}
        zIndex={'99'}
        sx={{
          WebkitBackdropFilter: 'blur(8px)',
          backdropFilter: 'blur(8px)',
        }}
      >
        <Flex
          h={16}
          alignItems={'center'}
          justifyContent={'space-between'}
          maxW={'6xl'}
          mx={'auto'}
        >
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack alignItems={'center'} textAlign={'center'}>
            <Image
              src='/hackracklogo.png'
              alt='logo'
              boxSize={'7rem'}
              objectFit={'scale-down'}
              textAlign={'center'}
            />
          </HStack>
          <HStack alignItems={'center'} spacing={8}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
