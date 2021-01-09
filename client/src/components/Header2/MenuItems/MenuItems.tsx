import React, { ReactNode } from "react";
import { Text } from "@chakra-ui/core";

interface MenuItemsProps {
  children: ReactNode
}

const MenuItems: React.FC<MenuItemsProps> = ({ children }) => {
  return (
    <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
      {children}
    </Text>
  )
}

export default MenuItems;