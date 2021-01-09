import React, { ReactNode } from "react";
import { Button, Text } from "@chakra-ui/core";

interface MenuItemsProps {
  children: ReactNode
}

const MenuItems: React.FC<MenuItemsProps> = ({ children }) => {
  return (
    <Button variant="unstyled" mr={6} display="block">
      {children}
    </Button>
  )
}

export default MenuItems;