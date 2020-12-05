import { Box, Button, Flex, Heading, Link as ChakraLink } from '@chakra-ui/core';
import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ThemeSelector from '../ThemeSelector/ThemeSelector';
import { logout } from '../../redux/auth/authActions';
import { AppState, UserState } from '../../redux/types/types';
import { NonAuthRoutes } from '../../routes/routes';

interface HeaderProps {
  isLandingPage: boolean,
  auth: UserState,
  logout: () => void,
  darkMode: boolean
}

const Header: React.FC<HeaderProps> = ({ isLandingPage, logout, auth: { isAuthenticated, loading }, darkMode }) => {

  const authLinks = (
    <Button bg = "transparent" onClick = {logout}>
      <ChakraLink>Logout</ChakraLink>
    </Button>
  );
  const guestLinks = (
    <>
      <Button bg = "transparent" mr="4">
        <Link to = {NonAuthRoutes.search}>Search</Link>
      </Button>
      <Button bg = "transparent" mr="4">
        <Link to = {NonAuthRoutes.login}>Sign In</Link>
      </Button>
      <Button bg = "transparent" border = "2px solid #69eed3" borderRadius = {15} px = {8}>
        <Link to = {NonAuthRoutes.register}>Sign Up</Link>
      </Button>
    </>
  );

  const headerStyle = {
    position: `${isLandingPage ? "absolute" : "static"}`,
    color: `${isLandingPage && '#fff'}`
  } as React.CSSProperties;

  return (
    <Flex w = "full" height = "88px" boxShadow = {`${!isLandingPage && "0 1px 2px rgba(52, 180, 154, 0.5)"}`} zIndex = {9999} style = {headerStyle}>
      <Flex w = "80%" justifyContent = "space-between" alignItems = "center" mx="auto">
        <Box d = "flex"  flexDirection = "row" alignItems = "center">
          <Button bg = "transparent" p={0}>
            <Link to = {NonAuthRoutes.home}>JobHunter</Link>
          </Button>
          <ThemeSelector />
        </Box>
        <Box>
          { !loading && (
          <>
            { isAuthenticated ? authLinks : guestLinks }
          </>
          )}
        </Box>
      </Flex>
    </Flex>
  );
}

const mapStateToProps = (state: AppState) => ({
  auth: state.authReducer,
  darkMode: state.uiReducer.darkMode
})
export default connect(mapStateToProps, { logout })(Header);