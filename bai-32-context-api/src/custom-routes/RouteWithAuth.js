import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { DataContext } from "../context/DataProvider";
import { useRouter } from '../hooks/useRouter';

export const RouteWithAuth = ({ redirectPath = '/login', path, children, ...rest }) => {
    const context = useContext(DataContext);
    const router = useRouter();
    if(context.auth.isAuthenticated){
        return(
            <Route path={path} {...rest}>
                {children}
            </Route>
        )
    }

	const from = router.pathname
    return <Redirect to={{ pathname: redirectPath, state: { from } }} />
}