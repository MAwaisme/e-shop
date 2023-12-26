import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Grid, GridItem, Heading, HStack, Image, ListItem, Stack, Text, Tag, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PImag from '../../assets/PImage.png';
import ProductImagesSlider from '../../components/productSlider/ProductSlider';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { useParams } from 'react-router-dom';
import { API_URL } from '../../utils/ApiUrl';
import axios from 'axios';

const ProductDetail = ({ cartItemCount, setCartItemCount }) => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [productList, setProductList] = useState(null);

    const [count, setCount] = useState(1);
    console.log("🚀 ~ file: ProductDetail.js:20 ~ ProductDetail ~ count:", count)
    // product detail =======================================================                  

    const getAllProductsHandle = async () => {
        console.log('start');
        try {
            const response = await axios?.get(`${API_URL}products/${id}`);
            setProductList(response?.data);
        } catch (error) {
            console.log("🚀 ~ file: Home.js:25 ~ getAllProductsHandle ~ error:", error);
        }
    }

    const countHandle = () => {
        setCartItemCount(cartItemCount + 1);
    }

    const disCountHandle = () => {
        if (cartItemCount > 0) {
            setCartItemCount(cartItemCount - 1);
        }
    }

    // const countHandle = () => {
    //     setCartItemCount(prevCount => prevCount + 1);
    // }

    // const disCountHandle = () => {
    //     if (cartItemCount > 0) {
    //         setCartItemCount(prevCount => prevCount - 1);
    //     }
    // }



    useEffect(() => {
        getAllProductsHandle();
    }, [])

    return (
        <Stack px={{ base: '5', md: '10', lg: '28' }}>
            <Stack direction={['column', 'row']}>
                <VStack flex={'1'} alignItems={'flex-end'} pr={'8'}>
                    <VStack w={'full'} pb={{ base: '5', md: '10', lg: '36' }}>
                        <Box className="slider___________________box" w={'full'}>
                            {/* <Image h={'full'} src={PImag} /> */}
                            <div style={{
                                // height: '100vh',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative'
                            }}
                                className="product__slider__wrapper"
                            >
                                <HStack spacing={4} style={{ zIndex: '9', position: 'absolute', top: '20px', right: '20px' }}>
                                    <Tag size={'lg'} variant='solid' colorScheme='teal'>
                                        Discount {productList?.discountPercentage}
                                    </Tag>
                                </HStack>
                                <div style={{
                                    // width: '500px',
                                    backgroundColor: '#fff',
                                    padding: '20px',
                                    height: '700px'
                                }}
                                    className="product__innner__slider__wrapper">
                                    <ProductImagesSlider thumbnail={productList?.thumbnail} images={productList?.images} />
                                </div>
                            </div>
                        </Box>
                    </VStack>
                </VStack>
                <VStack flex={'1'} alignItems={'flex-start'}>
                    <Heading size={'md'}>{productList?.title}</Heading>
                    <Heading size={'sm'}>Price : {productList?.price}</Heading>
                    <VStack pt={{ base: '5', md: '10', lg: '20' }} w={'full'} spacing={'5'} pb={'7'} alignItems={'flex-start'}>
                        <HStack>
                            <HStack borderColor={'#707070'} borderWidth={'1px'}>
                                <Text py={'2'} px={'3'} onClick={() => disCountHandle()}>-</Text>
                                <Text py={'2'} px={'3'}>1</Text>
                                <Text py={'2'} px={'3'} bgColor={'#DBF5FF'} onClick={() => countHandle()}>+</Text>
                            </HStack>
                            <Box p={2} bgColor={'teal'} color={'white'} variant='solid'>In Stock {productList?.stock}</Box>
                        </HStack>
                        <Button colorScheme='blue' variant='outline' w={'full'} borderRadius={'0px'}>Add to Cart</Button>
                        <Button bgColor={'#85C9E1'} variant='solid' w={'full'} borderRadius={'0px'}>Buy now</Button>
                    </VStack>
                    <Text>{productList?.description}</Text>
                    <Text>Brand : {productList?.brand}</Text>
                    <Text>Category : {productList?.category}</Text>
                </VStack>
            </Stack>
            <Accordion defaultIndex={[0]} allowMultiple w={{ base: 'full', md: '60%', lg: '60%' }}>
                <AccordionItem>
                    <h2>
                        <AccordionButton py={'5'}>
                            <Box flex='1' textAlign='left'>
                                Reviews ({productList?.rating})
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <VStack w={'full'} alignItems={'flex-start'}>
                            {/* <Box flex='1' textAlign='left'>
                                        Reviews (0)
                                    </Box> */}
                            <Button bgColor={'#85C9E1'} variant='solid' w={'40%'} borderRadius={'0px'}>Write a review</Button>
                        </VStack>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton py={'5'}>
                            <Box flex='1' textAlign='left'>
                                Shipping Details
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Stack>
    )
}

export default ProductDetail