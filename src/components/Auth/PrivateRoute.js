import React, { useContext } from 'react'

import {Route, Redirect, Router } from "react-router-dom";

import { AuthContext } from './auth';

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    const {currentUser} = useContext(AuthContext);
    return(
        <Route
        {...rest}
        render={routeProps => !!currentUser ? (
            <RouteComponent {...routeProps}/>
        ) : (
            <Redirect to={'/login'} />

        )}
        />
    );
    
};

export default PrivateRoute
