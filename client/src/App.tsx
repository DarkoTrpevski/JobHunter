import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider, ColorModeProvider, CSSReset } from '@chakra-ui/core';
import customTheme from './theme/theme';
//Layouts
import AuthLayout from './layouts/AuthLayout/AuthLayout';
import MainLayout from './layouts/MainLayout/MainLayout';
import Header from './components/Header/Header';
//Pages
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import JobDetails from './pages/JobDetails/JobDetails';
import JobSearch from './pages/JobSearch/JobSearch';
import NotFound from './pages/NotFound/NotFound';


const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <ColorModeProvider>
        <CSSReset />
        <div className="App">
        <Router>
          <Header />
          <Switch>

            <Route exact path="/" component={Home} /> 

            <Route path = {['/login', '/register']}>
              <AuthLayout>
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
              </AuthLayout>
            </Route>

            <Route path = {['/search', '/details/:id']}>
              <MainLayout>
                <Route path = "/search" component = {JobSearch} />
                <Route path="/details/:id" component={JobDetails} />
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

export default App;