import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import UsersPage from "./pages/UsersPage";

const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path='/users' exect>
                    <UsersPage />
                </Route>
                <Redirect to={'/users'} />
            </Switch>
        );
    }

    return (
        <Switch>
            <Route path='/login' exect>
                <LoginPage />
            </Route>
            <Redirect to='/login'/>
        </Switch>
    );
};

export default useRoutes;