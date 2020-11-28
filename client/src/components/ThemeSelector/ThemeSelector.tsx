import { useColorMode, Box, IconButton } from '@chakra-ui/core';
import React from 'react'

interface ThemeSelectorProps {}

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box py = {4}>
      <IconButton variant = "ghost" icon={colorMode === 'light' ? "moon" : "sun"} aria-label="Sun Icon" onClick={toggleColorMode} />
    </Box>
  )
}
export default ThemeSelector;