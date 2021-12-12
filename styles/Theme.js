import '@fontsource/inter';
import { extendTheme } from '@chakra-ui/react';
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};
const theme = extendTheme({
  config,
  initialColorMode: 'light',
  useSystemColorMode: false,
  fonts: {
    body: 'Inter',
  },
});

export default theme;
