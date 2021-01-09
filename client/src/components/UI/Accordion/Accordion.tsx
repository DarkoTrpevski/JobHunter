import { Box, Flex, Heading } from '@chakra-ui/core';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import React, { ReactNode, useState } from 'react';

interface AccordionProps {
  children: ReactNode,
  darkMode: boolean,
}

const Accordion: React.FC<AccordionProps> = ({ children, darkMode }) => {

  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <Flex pos="relative" cursor="pointer" flexDir="row" align="center" justifyContent="space-between" my = {5} w = "full" onClick = {() => setIsExpanded(!isExpanded)} bg = {`${darkMode ? "#17191e" : "#fff"}`} borderRadius = {20} >
      { !isExpanded && (<Heading >Click on a job to edit!</Heading>) }
        { isExpanded && children }
      { isExpanded ? (<MinusIcon pos="absolute" top={3} right={3} />) : (<AddIcon pos="absolute" top={3} right={3} />) }

    </Flex>
  );
}
export default Accordion;