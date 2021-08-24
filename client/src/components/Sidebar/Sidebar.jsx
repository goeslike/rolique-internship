import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { logOut } from '../../actions/user';

import logo from '../../assets/logo/logo.png';
import logoutIcon from '../../assets/logout-16.png';
import usersIcon from '../../assets/links-icons/users.png';
import compaignIcon from '../../assets/links-icons/compaign.png';
import influencerIcon from '../../assets/links-icons/influencer.png';

import {SidebarContainer, SidebarLogo} from './Sidebar.style';

const Sidebar = ({user, compaign, influencer}) => {
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(logOut());
    };

    return (
        <SidebarContainer>
            <SidebarLogo src={logo} alt='logo'/>
            <Link to='/users' style={{background: user ? 'rgba(255, 101, 14, 1)' : ''}}>
                <img src={usersIcon} alt='usersIcon'/>
            </Link>

            <Link to='/compaigns' style={{background: compaign ? 'rgba(255, 101, 14, 1)' : ''}}>
                <img src={compaignIcon} alt='compaignIcon'/>
            </Link>

            <Link to='/influencers' style={{background: influencer ? 'rgba(255, 101, 14, 1)' : ''}}>
                <img src={influencerIcon} alt='influencerIcon'/>
            </Link>

            <Link to={''} onClick={() => logout()}>
                <img src={logoutIcon} alt="logoutIcon"/>
            </Link>
        </SidebarContainer>
    );
};

export default Sidebar;
