import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
    HStack,
    Image,
    Text,
    useDisclosure,
    VStack
} from '@chakra-ui/react';
import { Link } from "react-router-dom";
import { ChevronRightIcon, HamburgerIcon } from '@chakra-ui/icons';
import React from 'react';
import searchIcon from '../../assets/search.png';
import person from '../../assets/person.png';
import bag from '../../assets/bag.png';
import menuBtn from '../../assets/menuBtn.svg';
import './header.css';

const MobileMenu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    return (
        <>
            <Button
                ref={btnRef}
                bgColor={'transparent'}
                minW={'fit-content'}
                onClick={onOpen}>
                {/* <HamburgerIcon /> */}
                <Image src={menuBtn} boxSize={'25px'} />
            </Button>
            <Drawer
                size={'xs'}
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerBody>
                        <VStack flex={'0.1'} top={'0'} position={'absolute'} left={'0'} m={'0'} className={window.innerWidth >= 1200 ? "mobile__sidebar__div" : 'sidebar__div'}>
                            <Text>| @sinfaynazuk.original</Text>
                        </VStack>
                        <HStack w={'full'} flex={'1'} justifyContent={'flex-start'} pb={'10'} top={'5'} left={'16'} position={'absolute'} spacing={'7'}>
                            <Image src={searchIcon} boxSize={'18px'} objectFit={'contain'} />
                            <Link to='/auth'>
                                <Image src={person} boxSize={'18px'} objectFit={'contain'} />
                            </Link>
                            <Image src={bag} boxSize={'20px'} objectFit={'contain'} />
                        </HStack>
                        <VStack spacing={'8'} pt={'20'} alignItems={'flex-start'} w={'full'}>
                            <Link to='/' className='Mobile__Menus'>Home</Link>
                            <Link to="/allproducts" className='Mobile__Menus' >Ready to Ware <ChevronRightIcon /> </Link>
                            <Link to='/unstiched' className='Mobile__Menus'>Unstiched <ChevronRightIcon /> </Link>
                            <Link to="/moments" className='Mobile__Menus'>Moments</Link>
                            <Link to="/about" className='Mobile__Menus'>About us</Link>
                            <Link to='/contact' className='Mobile__Menus'>Contact us</Link>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default MobileMenu