import React from 'react';
import {Route, Switch} from "react-router-dom";

import Sidebar from "../components/Sidebar/Sidebar";

import Compaigns from "../components/Compaigns/Compaigns";

const CompaignsPage = () => {
    return (
        <div style={{display: "flex"}}>
            <Sidebar compaign={true}/>
            <Switch>
                <Route path='/compaigns' exect component={Compaigns} />
            </Switch>
        </div>
    );
};

export default CompaignsPage;
