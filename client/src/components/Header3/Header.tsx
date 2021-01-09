import React from "react";
import { Flex, Image, Heading, useDisclosure } from "@chakra-ui/core";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { AppState, UserState } from "../../redux/types/types";
import { logout } from '../../redux/auth/authActions';
import MenuItems from './MenuItems/MenuItems';
import { NonAuthRoutes } from "../../routes/routes";
import ThemeSelector from "../ThemeSelector/ThemeSelector";
import DrawerWindow from "./DrawerWindow/DrawerWindow";
import Logo from '../../assets/logo.svg'


interface HeaderProps {
  isLandingPage: boolean,
  auth: UserState,
  darkMode: boolean,
  logout: () => void
}


const Header: React.FC<HeaderProps> = ({ isLandingPage, auth, darkMode, logout }) => {

// const Header: React.FC<HeaderProps> = ({ isLandingPage, logout, auth: { isAuthenticated, loading } }) => {

  const { isOpen, onOpen, onClose } = useDisclosure();

  const headerLinks = ( 
    <Flex align="center" p = {0} pos = "static" display={[ "none","none", "flex", "flex" ]} w = "auto" zIndex={999}>
      <MenuItems>
        <Link to = {NonAuthRoutes.search}>SEARCH</Link>
      </MenuItems>
      <MenuItems>
        <Link to = {NonAuthRoutes.login}>SIGN IN</Link>
      </MenuItems>
      <MenuItems>
        <Link to = {NonAuthRoutes.register}>SIGN UP</Link>
      </MenuItems>
      <ThemeSelector />
    </Flex>
  )

  return (
    <Flex w="full" as="nav" padding = {2} className = "Header" pos = "absolute" bg = "transparent">
      <Flex w = "100%" mx = "auto" align="center" justify="space-between" wrap="wrap" className = "Header-container">
        <Flex align="center">
          {/* background: url('../../assets/landingbg.svg') no-repeat;
          background-position: center;
          background-size: cover; */}
          {/* <Box w="40px" h="40px" bg="url('../../assets/logo.svg) no-repeat"></Box> */}
          <Image w="40px" h="40px" src={Logo} mr={2} />
          <Heading as="h1" size="lg" cursor="pointer">
            <Link to="/">Job Hunter</Link>
          </Heading>
        </Flex>

        {!isLandingPage && headerLinks}

        <DrawerWindow isLandingPage = {isLandingPage} darkMode = {darkMode} isOpen = {isOpen} onOpen={onOpen} onClose={onClose} />

      </Flex>
    </Flex>
  );
};


const mapStateToProps = (state: AppState) => ({
  auth: state.authReducer,
  darkMode: state.uiReducer.darkMode
})
export default connect(mapStateToProps, { logout })(Header);