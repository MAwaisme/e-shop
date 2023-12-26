import { Box, Button, Divider, Heading, HStack, Image, Input, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import bgHomeTow from '../../assets/bgHomeTow.svg';
import sendBtn from '../../assets/sendBtn.svg';

const Footer = () => {
  return (
    <VStack
      className='heroBg'
      // backgroundImage={bgHomeTow}
      // backgroundRepeat="no-repeat"
      // backgroundPosition="center"
      // backgroundSize={'cover'}
      pl={{ base: '5', md: '10', lg: '20' }}
      pr={{ base: '5', md: '10', lg: '28' }}
      w={'full'}
      pb={'10'}
    // pt={'10'}
    >
      <Stack
        pt={'6'}
        justifyContent={'space-between'}
        direction={['column', 'row']}
        borderColor={'red'}
        borderTop={'1px'}
        alignItems={{ base: 'center', md: 'flex-start' }}
        h={'full'}
        w={'full'}
      >
        <VStack mb={{ base: '10', md: '0' }} alignItems={{ base: 'center', md: 'flex-start' }}>
          <Heading textAlign={'left'} size={'md'} fontWeight={'500'}>Logo </Heading>
          <Text>Copyrights ⓒ. All rights reserved.</Text>
        </VStack>
        <VStack pb={{ base: '10', md: '0' }} m={'auto'} alignItems={{ base: 'center', md: 'flex-start' }} textAlign={'left'} >
          <Heading textAlign={'left'} size={'md'} fontWeight={'500'}>SUPPORT</Heading>
          <Text>Customer Support</Text>
          <Text>Shipping Information</Text>
          <Text>Exchange Policy</Text>
          <Text>About Us</Text>
          <Text>Find Us</Text>
          <Text>Terms and Conditions</Text>
          <Text>Privacy Policy</Text>
          <Text>FAQ's</Text>
          <Text>Track Your Order</Text>
        </VStack>
        <VStack alignItems={{ base: 'center', md: 'flex-start' }}>
          <Heading textAlign={'left'} size={'md'} fontWeight={'500'}>Subscribe </Heading>
          <Box position={'relative'} w={'full'}>
            <Image src={sendBtn} position={'absolute'} right={'10px'} boxSize={'25px'} top={'7px'} />
            <Input placeholder="email" border={'1px'} borderColor={'#707070'} borderRadius={'0px'} w={'full'} />
          </Box>
        </VStack>
      </Stack>
    </VStack>
  )
}

export default Footer