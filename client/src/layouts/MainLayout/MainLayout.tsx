import { Flex } from '@chakra-ui/core';
import React, { ReactNode } from 'react';
import Header from '../../components/Header3/Header';
// import Header from '../../components/Header2/Header';
import { mainLayoutStyle } from './styles';

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header isLandingPage = {false} />
      <Flex w = {mainLayoutStyle.width} h="full" minH="100vh" m = {mainLayoutStyle.margin} p = {80} px={5} justifyContent = "center" alignItems = "start" className = "MainLayout">
        <Flex w = "full" flexDir = "column" alignItems = "center" justifyContent = "center">
          {children}
        </Flex>
      </Flex>
    </>
  );
}
export default MainLayout;