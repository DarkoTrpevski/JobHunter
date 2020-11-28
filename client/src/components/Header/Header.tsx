import { Box, Button, Flex, Heading } from '@chakra-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';
import { ThemeSelector } from '../ThemeSelector/ThemeSelector';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <Flex w = "full" justifyContent = "space-between" alignItems = "center" height = "88px" boxShadow = "0 1px 3px rgba(52, 180, 155, 0.5)" zIndex = {9999}>
      <Box p="2" d = "flex"  flexDirection = "row" alignItems = "center">
        <Heading size="md">Job Hunter</Heading>
        <ThemeSelector />
      </Box>
      <Box>
        <Button bg = "transparent" mr="4">
          <Link to = "/register">Sign Up</Link>
        </Button>
        <Button bg = "transparent" mr="4">
          <Link to = "/login">Sign In</Link>
        </Button>
      </Box>
    </Flex>
  );
}
export default Header;