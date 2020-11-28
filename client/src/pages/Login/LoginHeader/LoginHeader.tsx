import { Box, Heading, Text } from '@chakra-ui/core';
import { Link } from 'react-router-dom';
import React from 'react'
import { VARIANT_COLOR } from '../../../constants/constants';

interface LoginHeaderProps {}

const LoginHeader: React.FC<LoginHeaderProps> = () => {
  return (
    <Box textAlign="left" color = {`${VARIANT_COLOR}.400`} >
      <Heading textAlign = "center" as = "h4" textTransform = "uppercase" fontSize = "3rem" minW = "200px" fontWeight = "normal">
        SIGN IN
      </Heading>
    </Box>
  )
}
export default LoginHeader;