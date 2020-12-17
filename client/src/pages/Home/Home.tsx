import { Box, Button, Flex, Heading, IconButton, Stack, Text } from '@chakra-ui/core';
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

interface HomeProps {}
const Home: React.FC<HomeProps> = () => {
  return (
    <Box className = "Home" width = "full" >

      <Stack as ="section" mx = "auto" className = "Home-jumbotron" align = "center" justifyContent = "center" color = "#fff" >
        <Box w = "full" fontFamily = "HelveticaLight">
          <Flex alignItems = "center" justifyContent="center" flexDir="column" className = "home-title">
            <Heading fontFamily = "HelveticaLight" color = "#fff">JOIN NOW!</Heading>
            <Heading fontFamily = "HelveticaLight" color = "#fff">FIND YOUR DREAM JOB.</Heading>
          </Flex>
          <Flex alignItems = "center" justifyContent="center" flexDir="column" mt={3} className = "home-body">
            <Text fontFamily = "HelveticaLight">Find your dream job within seconds.</Text>
            <Text fontFamily = "HelveticaLight">Monitor your job progress with a simple click.</Text>
          </Flex>
        </Box>
        <Box mt={10}  w = "50%" mx = "auto" >
          <Stack>
            <Flex alignItems = "center" justifyContent="space-evenly" >
              <Link className = "home-action-link" to ="/login" >Sign In</Link>
              <Link className = "home-action-link" to ="/search" >Search jobs</Link>
            </Flex>
          </Stack>
        </Box>
      </Stack>

      <Stack py={50} as ="section" className = "Home-info" align = "center" justifyContent = "center" >
        <Box>
          <Heading fontFamily = "HelveticaLight">Find work in 100+ countries</Heading>
          <Text fontFamily = "HelveticaLight">Delivering the best experience for managing your job progression.</Text>
          <Text fontFamily = "HelveticaLight">Created to make applying to and managing of jobs easier.</Text>
        </Box>
        <Flex w = "50%" mx ="auto">

          <Box w="50%" maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow = "0 0 2px #69EED3" >

            <Box p={6}>
              <Box d="flex" alignItems="baseline">
              </Box>

              <Heading as = "h4" mt="1">
                TITLE
              </Heading>

              <Box>
                PRICE
              </Box>

              <Box>
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                  REVIEW COUNT
                </Box>
              </Box>
            </Box>
          </Box>

        </Flex>
      </Stack>
      
    </Box>
  );
}

export default Home;