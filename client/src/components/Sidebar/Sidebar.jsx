import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { logOut } from '../../actions/user';
import {SidebarContainer, SidebarLogo} from './Sidebar.style';

import logo from '../../assets/logo/logo.png';
import usersIcon from '../../assets/links-icons/users.png';
import compaignIcon from '../../assets/links-icons/compaign.png';
import influencerIcon from '../../assets/links-icons/influencer.png';

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

            <Link to='/create-compaign' style={{background: compaign ? 'rgba(255, 101, 14, 1)' : ''}}>
                <img src={compaignIcon} alt='compaignIcon'/>
            </Link>

            <Link to='/influencers' style={{background: influencer ? 'rgba(255, 101, 14, 1)' : ''}}>
                <img src={influencerIcon} alt='influencerIcon'/>
            </Link>

            <button onClick={logout}>log out</button>
        </SidebarContainer>
    );
};

export default Sidebar;
