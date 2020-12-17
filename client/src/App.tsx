import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider, ColorModeProvider, CSSReset } from '@chakra-ui/core';
import { customTheme, resetConfig } from './theme/theme';
import { AuthRoutes, NonAuthRoutes } from './routes/routes';
//Layouts
import AuthLayout from './layouts/AuthLayout/AuthLayout';
import MainLayout from './layouts/MainLayout/MainLayout';
//Pages
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import JobDetails from './pages/JobDetails/JobDetails';
import JobSearch from './pages/JobSearch/JobSearch';
import Dashboard from './pages/Dashboard/Dashboard';
import NotFound from './pages/NotFound/NotFound';
//Redux
import { connect } from 'react-redux';
import { loadCurrentUser } from './redux/auth/authActions';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './routes/PrivateRoute';
import LandingLayout from './layouts/LandingLayout/LandingLayout';

interface AppProps {
  loadCurrentUser: () => void
}

const App: React.FC<AppProps> = ({ loadCurrentUser }) => {

  if(localStorage.token) {
    setAuthToken(localStorage.token)
  }
  
  useEffect(() => {
    loadCurrentUser();
  },[])
  
  return (
    <ThemeProvider theme={customTheme}>
      <ColorModeProvider>
        <CSSReset config = {resetConfig} />
        <div className="App">
        <Router>
          {/* <Header /> */}
          <Switch>

            {/* <Route exact path = {NonAuthRoutes.home} render = {(props) => {
              <Home />
            }} /> */}
            <Route exact path = {NonAuthRoutes.home} render={(props) => (
              <LandingLayout>
                <Home {...props} />
              </LandingLayout>
            )}/>

            <Route path = {[`${NonAuthRoutes.login}`, `${NonAuthRoutes.register}`]}>
              <AuthLayout>
                <Route path={NonAuthRoutes.login} component={Login} />
                <Route path={NonAuthRoutes.register} component={Register} />
              </AuthLayout>
            </Route>

            <Route path = {[`${NonAuthRoutes.search}`, `${NonAuthRoutes.jobdetail}`]}>
              <MainLayout>
                <Route path = {NonAuthRoutes.search} component = {JobSearch} />
                <Route path = {NonAuthRoutes.jobdetail} component={JobDetails} />
              </MainLayout>
            </Route> 

            <Route path = {AuthRoutes.dashboard}>
              <MainLayout>
                <PrivateRoute path = {AuthRoutes.dashboard} Component = {Dashboard} />  
              </MainLayout>
            </Route> 


            <Route component={NotFound} />
            
          </Switch>
        </Router>
        </div>
      </ColorModeProvider>
    </ThemeProvider>
  )
}

export default connect(null, { loadCurrentUser })(App);