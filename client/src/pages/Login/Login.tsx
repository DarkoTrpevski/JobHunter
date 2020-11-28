import { Flex, Box } from '@chakra-ui/core';
import React from 'react'
import LoginForm from './LoginForm/LoginForm';
import LoginHeader from './LoginHeader/LoginHeader';

interface LoginProps {}
const Login: React.FC<LoginProps> = () => {

  return (    
    <Flex width = "full" align = "center" justifyContent = "center">
      <Box w = "80%" borderRadius = {4} >        
        <LoginHeader />
        <LoginForm />
      </Box>
    </Flex>
  )
}
export default Login;