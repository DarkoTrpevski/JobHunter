import { Box, Flex, Heading, Stack, Text, Image } from '@chakra-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../redux/types/types';
import HomeBg from '../../assets/homebg1.svg';
import CustomButton from '../../components/UI/CustomButton/CustomButton';
import { Link } from 'react-router-dom';

interface HomePageProps {
  darkMode: boolean
}

const HomePage: React.FC<HomePageProps> = ({ darkMode }) => {
  
  return (
    <Stack w={["100%", "100%" , "90%"]} h="full" minH="100vh" mx="auto" as ="section" align="center" justify="center" pt={20} className = "Home" >

      <Flex w="full" align="flex-start">
        <Heading>We make hiring exceptional talent simple</Heading>
      </Flex>

      <Flex w="full" flexDir={["column-reverse", "column-reverse", "row", "row"]}   p={["2", "4", "6", "8"]} justify="space-between">

        <Stack w={["100%", "100%", "100%", "50%"]} className="blocks" mt={5}>
          <Flex align="center" w={["100%", "100%", "100%", "100%"]} maxW={["100%", "100%", "400px", "400px", "500px"]} minH={["auto", "360px", "300px", "300px"]} p = {["40px 10px","0","0","0"]} className="block1" bg="#A4D7F8" borderRadius={20} >
            <Box w="80%" mx="auto">
              <Heading>FIND WORK</Heading>
              <Text>We do more than match your skills, we offer our support and guidance every step of the way.</Text>
              <CustomButton fontSize="1rem" bg="linear-gradient(to bottom, #333 50%, #fff 50%)" bgSize="100% 200%" transition="all .2s ease-in-out" color="#FFF" hoverColor="#333"  hoverBgPos="0 100%" m="3vmin 0 0 0" >
                <Link to="/search">FIND WORK</Link>
              </CustomButton>
            </Box>
          </Flex>
          <Flex align="center" w={["100%", "100%", "100%", "100%"]} maxW={["100%", "100%", "400px", "400px", "500px"]} minH={["auto", "360px", "300px", "300px"]} p = {["40px 10px","0","0","0"]} className="block2" bg={`${darkMode ? "#E2E8F0" : "#111216"}`} color={`${darkMode ? "#000" : "#FFF"}`} borderRadius={20} >
            <Box w="80%" mx="auto">
              <Heading>JOIN US</Heading>
              <Text>Our job is making your job easier – and that means managing your job applications easier.</Text>
              <CustomButton fontSize="1rem" bg="linear-gradient(to bottom, #fff 50%, #333 50%)" bgSize="100% 200%" transition="all .2s ease-in-out" color="#333" hoverColor="#FFF"  hoverBgPos="0 100%" m="3vmin 0 0 0" >
                <Link to="/register">JOIN US</Link>
              </CustomButton>
            </Box>
          </Flex>
        </Stack>

        <Image w={["100%", "100%", "100%", "50%"]} objectFit="fill" src={HomeBg} className="image" mt={5} />

      </Flex>  
          
    </Stack>
  );
}

const mapState = (state: AppState) => ({
  darkMode: state.uiReducer.darkMode
})

export default connect(mapState)(HomePage);