import { Flex, Box, Heading, Text, Stack, Button } from '@chakra-ui/core';
import { Link, Redirect } from 'react-router-dom';
import { Center } from '@chakra-ui/react';
import React from 'react'
import './AuthLayout.css';
import { connect } from 'react-redux';
import { AppState } from '../../redux/types/types';

interface AuthLayoutProps {
  isAuthenticated: boolean
}

const AuthLayout: React.FC<AuthLayoutProps> = ({children, isAuthenticated}) => {


  //Redirect if authenticated
  if(isAuthenticated) {
    return <Redirect to = "/dashboard" />
  }

  return (

    <Flex className = "AuthLayout" width = "full" align = "center" justifyContent = "center">
      <Box display = {[
        "none", // base
        "none", // 480px upwards
        "block", // 768px upwards
        "block", // 992px upwards
      ]} color = "#fff" width = "40%" height = "full" background = "linear-gradient(180deg, rgba(114,227,204,1) 0%, rgba(79,194,183,1) 100%)" >
        <Center h = "full" flexDir = "column" >
          <Heading textAlign = "start" alignSelf = "center" as = "h4" textTransform = "capitalize" fontSize = "3rem" minW = "200px">
            Job <span>Hunter</span>
          </Heading>
          <Text alignSelf = "center" textAlign = "center" fontSize = "2rem" >JOIN US!</Text>
          <Text alignSelf = "center" textAlign = "center" fontWeight = "bold" >Manage your job applications effectively</Text>
          <Stack w = "50%" marginTop = {10} spacing = {4} dir = "column" align = "center" >
            <Button paddingX = {24} paddingY = {2} borderRadius = {20} borderWidth = {2} bg = "#fff" color = "#00c4b0" variant = "solid" >
              <Link to = "/login">SIGN IN</Link>
            </Button>
            <Button _hover = {{bg: '#69eed3', borderColor: '#69eed3', transition: '0.4s ease'}} paddingX = {24} paddingY = {2} borderRadius = {20} borderWidth = {2} variant ="outline" >
              <Link to = "/register">SIGN UP</Link>
            </Button>
          </Stack>
        </Center>
      </Box>
      <Box width = {[
        "100%", // base
        "100%", // 480px upwards
        "60%", // 768px upwards
        "60%", // 992px upwards
      ]} height = "full" >
        <Center h = "full" flexDir = "column" >
          <Box bg = "blue" w="full">
            {children}
          </Box>
        </Center>
      </Box>
    </Flex>

  );
}

const mapStateToProps = (state: AppState) => ({
  isAuthenticated: state.authReducer.isAuthenticated
})

export default connect(mapStateToProps)(AuthLayout);