import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import LoginPage from './pages/LoginPage';

const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <div>
                A U T H E N T I C A T E D
            </div>
        );
    }


    return (
        <Switch>
            <Route path='/' exect>
                <LoginPage />
            </Route>
            <Redirect to='/'/>
        </Switch>
    );
};

export default useRoutes;