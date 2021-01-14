import { Flex, Box } from '@chakra-ui/core';
import React from 'react'
import RegisterForm from './RegisterForm/RegisterForm';
import RegisterHeader from './RegisterHeader/RegisterHeader';

interface RegisterPageProps {}
const RegisterPage: React.FC<RegisterPageProps> = () => {
  return (
    <Flex width = "full" align = "center" justifyContent = "center">
      <Box w = "80%" borderRadius = {4} >
        <RegisterHeader />
        <RegisterForm />
      </Box>
    </Flex>
  );
}
export default RegisterPage;