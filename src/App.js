import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import RoutesFile from './Routes';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RoutesFile />
    </ChakraProvider>
  );
}

export default App;
