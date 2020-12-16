import React, { ReactNode } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Header from '../../components/Header/Header'
import { AppState } from '../../redux/types/types';

interface LandingLayoutProps {
  children: ReactNode,
  isAuthenticated: boolean
}

const LandingLayout: React.FC<LandingLayoutProps> = ({ children, isAuthenticated }): JSX.Element => {

  //Redirect if authenticated
  if(isAuthenticated) {
    return <Redirect to = "/dashboard" />
  }

  return (
    <>
      <Header isLandingPage = {true} />
        {children}
    </>
  );
}
const mapStateToProps = (state: AppState) => ({
  isAuthenticated: state.authReducer.isAuthenticated
})
export default connect(mapStateToProps)(LandingLayout);