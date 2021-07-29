import React from 'react';
import { Link } from "react-router-dom";
import {SidebarContainer, SidebarLogo} from './Sidebar.style';

import logo from '../../assets/logo/logo.png';
import usersIcon from '../../assets/links-icons/users.png';
import compaignIcon from '../../assets/links-icons/compaign.png';
import influencerIcon from '../../assets/links-icons/influencer.png';

const Sidebar = ({user, compaign, influencer}) => {
    return (
        <SidebarContainer>
            <SidebarLogo src={logo} alt='logo'/>
            <Link to='/users' style={{background: user ? 'rgba(255, 101, 14, 1)' : ''}}>
                <img src={usersIcon} alt='usersIcon'/>
            </Link>

            <Link to='/create-compaign' style={{background: compaign ? 'rgba(255, 101, 14, 1)' : ''}}>
                <img src={compaignIcon} alt='compaignIcon'/>
            </Link>

            <Link to='/influencers' style={{background: influencer ? 'rgba(255, 101, 14, 1)' : ''}}>
                <img src={influencerIcon} alt='influencerIcon'/>
            </Link>
        </SidebarContainer>
    );
};

export default Sidebar;