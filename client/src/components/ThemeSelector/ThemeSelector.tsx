import { useColorMode, Box, IconButton } from '@chakra-ui/core';
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { setDarkMode } from '../../redux/ui/uiActions';

interface ThemeSelectorProps {
  darkMode: boolean,
  setDarkMode: (val: boolean) => void
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ darkMode, setDarkMode }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  //Check if dark mode is enabled on app start
  useEffect(() => {
    if(colorMode === 'dark') {
      setDarkMode(true);
    } else if(colorMode === 'light' && darkMode === true) {
      setDarkMode(false);
    }
  }, [])

  //Toggle the 2 dark mode states(chakra ui and redux one)
  const toggleDarkMode = (): void => {
    if(colorMode === 'dark') {
      toggleColorMode();
      setDarkMode(false);
    } else if(colorMode === 'light') {
      toggleColorMode();
      setDarkMode(true);
    }
  }

  return (
    <Box ml = {3}>
      <IconButton variant = "ghost" icon={colorMode === 'light' ? "moon" : "sun"} aria-label={colorMode === 'light' ? "Moon Icon" : "Sun Icon"} onClick={toggleDarkMode} />
    </Box>
  )
}

const mapStateToProps = (state: any) => ({
  darkMode: state.uiReducer.darkMode
})

export default connect(mapStateToProps, { setDarkMode })(ThemeSelector);