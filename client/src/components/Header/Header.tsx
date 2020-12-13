import { Box, Button, Flex, Heading } from '@chakra-ui/core';
import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ThemeSelector from '../ThemeSelector/ThemeSelector';
import { logout } from '../../redux/auth/authActions';
import { AppState, UserState } from '../../redux/types/types';
import { NonAuthRoutes } from '../../routes/routes';
import './Header.css';

interface HeaderProps {
  isLandingPage: boolean,
  auth: UserState,
  logout: () => void,
  darkMode: boolean
}

const Header: React.FC<HeaderProps> = ({ isLandingPage, logout, auth: { isAuthenticated, loading }, darkMode }) => {

  const authLinks = (
    <Button bg = "transparent" onClick = {logout}>
      LOGOUT
    </Button>
  );
  const guestLinks = (
    <>
      <Link className = "nav-link" to = {NonAuthRoutes.search}>SEARCH</Link>
      <Link className = "nav-link" to = {NonAuthRoutes.login}>SIGN IN</Link>
      <Link className = "nav-link" to = {NonAuthRoutes.register}>SIGN UP</Link>
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
          <Link to = {NonAuthRoutes.home}>JOBHUNTER</Link>
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