import { Button, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Input, DrawerFooter, Box, Flex } from '@chakra-ui/core';
import React from 'react'
import ThemeSelector from '../../ThemeSelector/ThemeSelector';
import HamburgerIcon from '../HamburgerIcon/HamburgerIcon';

interface DrawerProps {
  isLandingPage: boolean,
  darkMode: boolean,
  isOpen: boolean,
  onOpen: () => void,
  onClose: () => void
}

const DrawerWindow: React.FC<DrawerProps> = ({ isLandingPage, darkMode, isOpen, onOpen, onClose }) => {


  const btnRef = React.useRef();

  return (
    <>
      <Box d= {["block", "block", `${isLandingPage ? "block" : "none"}`, `${isLandingPage ? "block" : "none"}`]} w="40px" h="auto" ref={btnRef} onClick={onOpen} p={0} >
        <HamburgerIcon darkMode = {darkMode} />
      </Box>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef.current}>
        <DrawerOverlay />
        <DrawerContent className="DrawerContent">
          <Flex justify="space-between" className="content-theme-close" p={3}>
            <ThemeSelector />
            <DrawerCloseButton w="40px" h="40px" pos="static" />
          </Flex>
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button color="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerWindow;