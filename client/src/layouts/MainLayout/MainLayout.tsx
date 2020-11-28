import { Flex } from '@chakra-ui/core';
import { Center } from '@chakra-ui/react';
import React from 'react';
import './MainLayout.css';

interface MainLayoutProps {}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Flex className = "MainLayout" w = "full">
      <Center w = "80%" m = "0 auto" h = "100%" flexDir = "column" >
        {children}
      </Center>
    </Flex>
  );
}
export default MainLayout;