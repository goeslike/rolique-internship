import React from 'react';
import {Header, HeaderButton, HeaderTitle} from "./Header.style";

import redirectIcon from '../../assets/redirect-icon.png';
import {Link} from "react-router-dom";

const CreateHeader = ({title, buttonText, func}) => {
    return (
        <Header>
            <HeaderTitle>
                <Link to={'/users'}><img src={redirectIcon} alt="redirectIcon"/></Link>
                { title }
            </HeaderTitle>
            <HeaderButton onClick={func}>{ buttonText }</HeaderButton>
        </Header>
    );
};

export default CreateHeader;