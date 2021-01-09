import React from "react";
import { Box, Heading, Flex } from "@chakra-ui/core";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { AppState, UserState } from "../../redux/types/types";
import { logout } from '../../redux/auth/authActions';
import MenuItems from './MenuItems/MenuItems';
import { NonAuthRoutes } from "../../routes/routes";
import HamburgerIcon from "./HamburgerIcon/HamburgerIcon";
import ThemeSelector from "../ThemeSelector/ThemeSelector";


interface HeaderProps {
  isLandingPage: boolean,
  auth: UserState,
  darkMode: boolean,
  logout: () => void
}

// Note: This code could be better, so I'd recommend you to understand how I solved and you could write yours better :)

const Header: React.FC<HeaderProps> = ({ isLandingPage, auth, darkMode, logout }) => {

// const Header: React.FC<HeaderProps> = ({ isLandingPage, logout, auth: { isAuthenticated, loading } }) => {

  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);


  return (
    <Flex as="nav" padding = {2} className = "Header" pos = {{ sm: 'relative', md: 'static' }} bg = "transparent">
      <Flex w = {[
        "100%", // base
        "100%", // 480px upwards
        "80%", // 768px upwards
        "80%", // 992px upwards
      ]} mx = "auto" align="center" justify="space-between" wrap="wrap" className = "Header-container">
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" cursor="pointer">
            Job Hunter
          </Heading>
          <ThemeSelector />
        </Flex>

        <Box pos="absolute" top="25px" right="25px" display={{ base: "block", md: "none" }} onClick={handleToggle} zIndex={9999}>
          <HamburgerIcon darkMode = {darkMode} />
        </Box>

        <Box backgroundColor="#ccc" p = {{ sm: "40px 10px", md: '0' }} pos = {{ sm: 'absolute', md: 'static' }} top="0" right="0" display={{ sm: show ? "block" : "none", md: "flex" }} w = {{ sm: "300px", md: "auto" }} h = {{ sm: "100vh", md: "auto" }} zIndex={999}>
          <MenuItems>
            <Link to = {NonAuthRoutes.search}>SEARCH</Link>
          </MenuItems>
          <MenuItems>
            <Link to = {NonAuthRoutes.login}>SIGN IN</Link>
          </MenuItems>
          <MenuItems>
            <Link to = {NonAuthRoutes.register}>SIGN UP</Link>
          </MenuItems>
        </Box>

        {/* <Box pos = {{ sm: 'absolute', md: 'static' }} bg="teal" display={{ sm: show ? "block" : "none", md: "flex" }} w={{ sm: "300px", md: "auto" }} h={{ sm: "100vh", md: "auto" }} alignItems="center" zIndex={9999}>
          <MenuItems>
            <Link to = {NonAuthRoutes.search}>SEARCH</Link>
          </MenuItems>
          <MenuItems>
            <Link to = {NonAuthRoutes.login}>SIGN IN</Link>
          </MenuItems>
          <MenuItems>
            <Link to = {NonAuthRoutes.register}>SIGN UP</Link>
          </MenuItems>
        </Box> */}
      </Flex>
    </Flex>
  );
};


const mapStateToProps = (state: AppState) => ({
  auth: state.authReducer,
  darkMode: state.uiReducer.darkMode
})
export default connect(mapStateToProps, { logout })(Header);