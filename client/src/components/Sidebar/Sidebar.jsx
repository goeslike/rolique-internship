import React from 'react';
import {useLocation} from "react-router-dom";
import { Link } from "react-router-dom";
import {SidebarContainer, SidebarLogo} from './Sidebar.style';

import logo from '../../assets/logo/logo.png';
import usersIcon from '../../assets/links-icons/users.png';
import compaignIcon from '../../assets/links-icons/compaign.png';
import influencerIcon from '../../assets/links-icons/influencer.png';

const Sidebar = ({user, compaign, influencer}) => {
    const location = useLocation();
    console.log(location.pathname)

    return (
        <SidebarContainer>
            <SidebarLogo src={logo} alt='logo'/>
            <Link to='/users' style={{background: user ? 'rgba(255, 101, 14, 1)' : ''}}>
                <img src={usersIcon} alt='usersIcon'/>
            </Link>

            <Link to='/create-compaign' style={{background: compaign ? 'rgba(255, 101, 14, 1)' : ''}}>
                <img src={compaignIcon} alt='compaignIcon'/>
            </Link>

            <Link to='/create-influencer' style={{background: influencer ? 'rgba(255, 101, 14, 1)' : ''}}>
                <img src={influencerIcon} alt='influencerIcon'/>
            </Link>
        </SidebarContainer>
    );
};

export default Sidebar;