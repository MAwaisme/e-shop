import { Button, Divider, Heading, Image, Text, VStack, Grid, GridItem, Flex, Spacer, HStack } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { API_URL } from '../../utils/ApiUrl';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import Pagination from '../../components/pagination/Pagination';

const Home = ({ searchData, searchDataList }) => {

    let navigate = useNavigate();
    const [productList, setProductList] = useState(null);
    const [categoriesList, setCategoriesList] = useState(null);
    const [itemOffset, setItemOffset] = useState(0);
    const [currentItems, setCurrentItems] = useState(null);
    console.log("🚀 ~ file: Home.js:18 ~ currentItems:                         innnnn", currentItems)
    const [pageCount, setPageCount] = useState(0);


    const getAllProductsHandle = async () => {
        try {
            const response = await axios?.get(`${API_URL}products`);
            setProductList(response?.data);
        } catch (error) {
            console.log("🚀 ~ file: Home.js:25 ~ getAllProductsHandle ~ error:", error)
        }
    }



    const getAllcategoriesHandle = async () => {
        try {
            const response = await axios?.get(`${API_URL}products/categories`);
            setCategoriesList(response?.data);
            console.log("🚀 ~ file: Home.js:36 ~ getAllcategoriesHandle ~ response:", response)
        } catch (error) {
            console.log("🚀 ~ file: Home.js:25 ~ getAllProductsHandle ~ error:", error)
        }
    }

    useEffect(() => {
        getAllProductsHandle();
    }, [])

    useEffect(() => {
        getAllcategoriesHandle();
    }, [])

    useEffect(() => {
        const endOffset = itemOffset + productList?.limit;
        setCurrentItems(productList?.products?.slice(itemOffset, endOffset));
        setPageCount(Math?.ceil(productList?.total / productList?.limit));
    }, [itemOffset, pageCount, productList])

    const handlePageClick = (event) => {
        const newOffset = (event.selected * productList?.limit) % productList?.products.length;
        setItemOffset(newOffset);
    };

    const showSearchHandle = () => {
        setCurrentItems(searchDataList)
    }

    useEffect(() => {
        console.log('innnnn', searchData);
        // if (searchData !== "") {
        if (searchDataList && searchData !== "") {
            console.log('innnnn 111111111111');
            showSearchHandle();
        } else {
            console.log('innnnn 2222222222222222');
            getAllProductsHandle();
        }
        // } 
    }, [searchDataList, searchData])

    return (
        <>
            <VStack textAlign={'center'} position={'relative'}>
                <VStack>
                    <Heading>All categories</Heading>
                    <Grid
                        templateColumns='repeat(5, 1fr)'
                        gap={6}
                        bg='gray.50'
                        spacing='8'
                        p='10'
                        textAlign='center'
                        rounded='lg'
                        color='gray.400'>
                        {
                            categoriesList?.map((data, index) => {
                                return (
                                    // <Text key={index}>{data}</Text>
                                    <GridItem p='6' rounded='md' bg='white' boxShadow='dark-lg' key={index}>
                                        <Text textTransform={'capitalize'}>
                                            {data}
                                        </Text>
                                    </GridItem>
                                )
                            })
                        }
                    </Grid>
                </VStack>
                <VStack
                    className='heroBg'
                    w={'full'}
                    pb={'20'}
                    px={{ base: '5', md: '28' }}
                >
                    <Heading>All products</Heading>
                    <Grid
                        h='auto'
                        templateRows='repeat(2, 1fr)'
                        templateColumns='repeat(4, 1fr)'
                        gap={4}
                        mt={'10'}
                        bg='gray.50'
                        spacing='8'
                        p='5'
                        textAlign='center'
                        rounded='lg'
                        color='gray.400'
                    >
                        {currentItems?.map((data, index) => {
                            console.log("🚀 ~ file: Home.js:42 ~ {productList?.products?.map ~ data: start 3", data)
                            return (
                                <>
                                    {/* <h1>length : {data?.length}: key: {index} </h1> */}
                                    <GridItem height={'auto'} key={index} rowSpan={2} colSpan={1} p='6' rounded='md' bg='white' boxShadow='dark-lg'>
                                        <Image src={data?.images[0]} height={'350px'} style={{ objectFit: "cover" }} />
                                        <VStack alignItems={{ base: 'center', md: 'flex-end' }} px={{ ase: '7', md: '0' }} pl={{ base: '7', md: '0' }} w={'full'}>
                                            <VStack mb={'10'} w={'full'} alignItems={'flex-start'} pt={'5'}>
                                                <Heading textAlign={'left'} size={'md'} fontWeight={{ base: '300', md: '500' }} pb={{ base: '5', md: '0' }}>{data?.title}</Heading>
                                                <Divider display={{ base: 'none', md: 'block' }} w={'full'} height={'1px'} bgColor={'#707070'} />
                                                <Text display={{ base: 'none', md: 'block' }} height={'50'} textAlign={'left'} pb={'0'} >
                                                    {data?.description}
                                                </Text>
                                            </VStack>
                                            <HStack w={'100%'} justifyContent={"space-between"}>
                                                <p>{index + 1}</p>
                                                <Button bgColor={'#85C9E1'} px={'10'} py={'6'} borderColor={'#707070'} borderWidth={'1px'} borderRadius={'0px'} onClick={() => navigate(`/productdetail/${data?.id}`)}>View details</Button>
                                            </HStack>
                                        </VStack>
                                    </GridItem>
                                </>
                            )
                        })}
                    </Grid>
                </VStack>
                <Flex p={2} className='d-flex' display={'flex'} mb={'10'}>
                    {/* <Spacer /> */}
                    <ReactPaginate
                        className='reactPaginate-inner'
                        breakLabel="..."
                        nextLabel={
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                <path d="M5 13L10 8L5 3" stroke="#FF0083" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        }
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={pageCount}
                        pageCount={pageCount}
                        previousLabel={
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                <path d="M10 13L5 8L10 3" stroke="#A0A1A1" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        }
                        renderOnZeroPageCount={null}
                    />
                </Flex>
            </VStack>
        </>
    )
}

export default Home