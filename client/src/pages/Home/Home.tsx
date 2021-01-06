import { Box, Flex, Heading, Stack, Image } from '@chakra-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../redux/types/types';
import HomeBg from '../../assets/homebg1.svg';
import './Home.css';

interface HomeProps {
  darkMode: boolean
}

const Home: React.FC<HomeProps> = ({ }) => {
  
  return (
    <Stack w={["100%", "100%" , "90%"]} h="full" minH="100vh" mx="auto" as ="section" align="center" justify="center" pt={20} className = "Home" >

      <Flex w="full" align="flex-start">
        <Heading>We make hiring exceptional talent simple</Heading>
      </Flex>

      <Flex w="full" flexDir={["column-reverse", "column-reverse", "row", "row"]}   p={["2", "4", "6", "8"]} justify="space-between">

        <Stack w={["100%", "100%", "100%", "50%"]} className="blocks" mt={5}>
          <Box w={["100%", "100%", "100%", "100%"]} h={["auto", "auto", "auto", "auto", ]} minH={["360px", "360px", "300px", "300px"]} className="block1" bg="rgba(255, 0, 0, 0.5)"></Box>
          <Box w={["100%", "100%", "100%", "100%"]} h={["auto", "auto", "auto", "auto", ]} minH={["360px", "360px", "300px", "300px"]} className="block2" bg="rgba(255, 255, 0, 0.5)"></Box>
        </Stack>

        <Image w={["100%", "100%", "100%", "50%"]} objectFit="fill" src={HomeBg} className="image" mt={5} />

      </Flex>  
          
    </Stack>
  );
}

const mapState = (state: AppState) => ({
  darkMode: state.uiReducer.darkMode
})

export default connect(mapState)(Home);