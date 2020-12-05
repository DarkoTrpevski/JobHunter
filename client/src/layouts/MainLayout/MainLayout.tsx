import { Flex } from '@chakra-ui/core';
import React from 'react';
import Header from '../../components/Header/Header';
import './MainLayout.css';

interface MainLayoutProps {}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header isLandingPage = {false} />
      <Flex className = "MainLayout" w = "full">
        <Flex w = "80%" m = "0 auto" h = "100%" flexDir = "column" align = "center" justifyContent = "center">
          {children}
        </Flex>
      </Flex>
    </>
  );
}
export default MainLayout;