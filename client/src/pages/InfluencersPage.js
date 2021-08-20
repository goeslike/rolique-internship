import React from 'react';
import {Route, Switch} from "react-router-dom";

import Sidebar from "../components/Sidebar/Sidebar";
import Influencer from '../components/Influencer/Influencer';
import Influencers from '../components/Influencers/Influencers';
import CreateInfluencer from '../components/Influencer/CreateInfluencer';
import EditInfluencer from '../components/Influencer/EditInfluencer';

const InfluencersPage = () => {
    return (
        <div style={{display: "flex"}}>
            <Sidebar influencer={true}/>
            <Switch>
                <Route path='/influencers/edit/id:id' exect component={EditInfluencer} />
                <Route path='/influencers/id:id' exect component={Influencer} />
                <Route path='/influencers/create' exect component={CreateInfluencer} />
                <Route path='/influencers' exect component={Influencers} />
            </Switch>
        </div>
    );
};

export default InfluencersPage;
