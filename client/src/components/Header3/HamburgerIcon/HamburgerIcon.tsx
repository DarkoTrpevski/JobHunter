import { Box } from '@chakra-ui/core';
import React from 'react'

interface HamburgerIconProps {
  darkMode: boolean
}

const HamburgerIcon: React.FC<HamburgerIconProps> = ({ darkMode }) => {
  return (
    <Box w = "full" className = "HamburgerIcon" cursor = "pointer">
      <Box w="full" h = "2px" bg = {`${darkMode ? "#fff" : "#000"}`} my = "5px" />
      <Box w="full" h = "2px" bg = {`${darkMode ? "#fff" : "#000"}`} my = "5px" />
      <Box w="full" h = "2px" bg = {`${darkMode ? "#fff" : "#000"}`} my = "5px" />
    </Box>
  );
}
export default HamburgerIcon;