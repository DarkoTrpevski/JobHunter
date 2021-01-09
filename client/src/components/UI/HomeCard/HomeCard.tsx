import { Box } from '@chakra-ui/core';
import React from 'react'

interface HomeCardProps {
  bg: string,
  color: string,
}

const HomeCard: React.FC<HomeCardProps> = ({ bg, color }) => {
  return (
    <Box w="full" bg={bg} color={color}>

    {/* .title.with-bullet:before {
        margin: -5px 15px 0 0;
        position: absolute;
        top: 0.6em;
        right: 100%;
        width: 9px;
        height: 9px;
        border: 2px solid #15161A;
        border-radius: 50%;
        box-sizing: border-box;
        content: '';
    } */}

    </Box>
  );
}
export default HomeCard;