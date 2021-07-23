import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import CreateUserPage from "./pages/CreateUserPage";

const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path='/create-user' exect>
                    <CreateUserPage />
                </Route>
                <Redirect to='/create-user'/>
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