import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import UsersPage from "./pages/UsersPage";
import InfluencersPage from "./pages/InfluencersPage";
import CompaignsPage from "./pages/CompaignsPage";

const useRoutes = isAuth => {
    if (isAuth) {
        return (
            <Switch>
                <Route path='/users' exect>
                    <UsersPage />
                </Route>
                <Route path='/influencers' exect>
                    <InfluencersPage />
                </Route>
                <Route path='/compaigns' exect>
                    <CompaignsPage />
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
