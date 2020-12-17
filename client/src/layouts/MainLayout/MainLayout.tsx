import { Flex } from '@chakra-ui/core';
import React, { ReactNode } from 'react';
import Header from '../../components/Header/Header';
import './MainLayout.css';
import { mainLayoutStyle, mainLayoutInnerWrapperStyle } from './styles';

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header isLandingPage = {false} />
      <Flex w = {mainLayoutStyle.width} m = {mainLayoutStyle.margin} py={10} justifyContent = "center" alignItems = "start" className = "MainLayout">
        <Flex w = "full" m = {mainLayoutInnerWrapperStyle.margin} flexDir = "column" alignItems = "center" justifyContent = "center">
          {children}
        </Flex>
      </Flex>
    </>
  );
}
export default MainLayout;