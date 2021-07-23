import React from 'react';
import {useLocation} from "react-router-dom";
import { Link } from "react-router-dom";
import {SidebarContainer, SidebarLogo} from './Sidebar.style';

import logo from '../../assets/logo/logo.png';
import usersIcon from '../../assets/links-icons/users.png';
import compaignIcon from '../../assets/links-icons/compaign.png';
import influencerIcon from '../../assets/links-icons/influencer.png';

const Sidebar = () => {
    const location = useLocation();
    console.log(location.pathname)

    return (
        <SidebarContainer>
            <SidebarLogo src={logo} alt='logo'/>
            <Link to='/create-user'><img src={usersIcon} alt='usersIcon'/></Link>
            <Link to='/create-compaign'><img src={compaignIcon} alt='compaignIcon'/></Link>
            <Link to='/create-influencer'><img src={influencerIcon} alt='influencerIcon'/></Link>
        </SidebarContainer>
    );
};

export default Sidebar;