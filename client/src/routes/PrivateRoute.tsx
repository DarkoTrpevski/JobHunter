import React from 'react'
import { connect } from 'react-redux';
import { Redirect, Route, RouteComponentProps } from 'react-router-dom';
import { AppState, UserState } from '../redux/types/types';

interface PrivateRouteProps {
  Component: React.FC<RouteComponentProps>,
  exact?: boolean,
  path: string,
  auth: UserState
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ Component, exact = false, path, auth: { loading, isAuthenticated }, ...otherProps }): JSX.Element => {
  return (
    <Route
      exact={exact}
      path={path}
      render={(props: RouteComponentProps) => !isAuthenticated && !loading ? (< Redirect to="/login" />) : (<Component {...props} />)} />
  )
}

const mapStateToProps = (state: AppState) => ({
  auth: state.authReducer
})
export default connect(mapStateToProps)(PrivateRoute);