import React, { useEffect } from 'react';
import { Stack, HStack, VStack, Text, Box, Divider, Image, Button, InputGroup, Input, InputRightElement, Center, Heading } from '@chakra-ui/react';
import { Link, useNavigate } from "react-router-dom";
import bag from '../../assets/bag.png';
import MobileMenu from './MobileMenu';
import { SearchIcon } from '@chakra-ui/icons';
import axios from 'axios';
import { API_URL } from '../../utils/ApiUrl';

const Header = ({ searchData, setSearchData, setSearchDataList, cartItemCount }) => {

    const navigate = useNavigate();

    const getAllProductsHandle = async () => {
        try {
            const response = await axios?.get(`${API_URL}products/search?q=${searchData}`);
            setSearchDataList(response?.data?.products);
        } catch (error) {
            console.log("🚀 ~ file: Home.js:25 ~ getAllProductsHandle ~ error:", error)
        }
    }

    useEffect(() => {
        if (searchData) {
            getAllProductsHandle();
        }
    }, [searchData])

    return (
        <>
            <HStack spacing='0px' py={{ base: '0', md: '0', lg: '0', xl: '10' }} px={{ base: '5', md: '10', lg: '10', xl: '0' }} alignItems={'center'}>
                <Box display={{ base: 'flex', md: 'flex', lg: 'flex', xl: 'none' }} m={'0'}>
                    <MobileMenu mobile={true} />
                </Box>
                <VStack flex={{ base: '0.6', md: '0.6', lg: '0.6', xl: '1.4', '2xl': '1.2' }} mr={'10'} alignItems={'flex-end'} textAlign={'right'}>
                    <Link to={'/'}>
                        <Heading>logo</Heading>
                    </Link>
                </VStack>
                <HStack display={{ base: 'none', md: 'none', lg: 'none', xl: 'flex' }} w={'full'} flex={'1'} justifyContent={{ base: 'space-between', md: 'flex-end' }} pr={{ base: '4', md: '10' }} spacing={'7'}>
                    <InputGroup>
                        <Input placeholder='Search' value={searchData} onChange={(e) => setSearchData(e?.target?.value)} />
                        <InputRightElement>
                            <SearchIcon color='gray.500' />
                        </InputRightElement>
                    </InputGroup>
                    <Link to={'/cart'}>
                        <Center bgColor={'blue.500'} w={'25'} h={'25'} color={'white'}>{cartItemCount}</Center>
                        <Image src={bag} boxSize={'25px'} objectFit={'contain'} />
                    </Link>
                </HStack>
            </HStack>
            <VStack w={'80%'} m={'auto'} display={{ base: 'none', md: 'none', lg: 'none', xl: 'flex' }}>
                <HStack spacing={'28'}>
                    <Link to='/'>Home</Link>
                    {/* <Link to="/allproducts">Products</Link> */}
                </HStack>
                <Divider w={'full'} height={'1px'} bgColor={'#707070'} />
            </VStack>
        </>
    )
}

export default Header