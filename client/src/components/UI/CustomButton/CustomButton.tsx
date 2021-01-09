import { Button } from '@chakra-ui/core';
import React from 'react';

interface CustomButtonProps {
  bg: string, //Background
  bgSize: string, //BackgroundSize
  fontSize: string, //FontSize
  transition: string, //Transition
  color: string, //TextColor
  hoverColor: string, //Hover TextColor
  hoverBgPos: string, //Hover TextColor
  lineHeight?: string, //LineHeight
  p?: string | number, //Padding
  m?: string | number, //Margin
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, fontSize, lineHeight, bg, bgSize, transition, p, m, color, hoverColor , hoverBgPos }) => {
  return (
    <Button bgImage={bg} bgSize={bgSize} m={m} p={p} color={color} transition={transition} _hover={{color: `${hoverColor}`, backgroundPosition: `${hoverBgPos}`}} appearance="none" border="2px solid #333" borderRadius="10px" fontSize={fontSize} lineHeight = {lineHeight} textAlign="center" >
      { children }
    </Button>
  );
}
export default CustomButton;