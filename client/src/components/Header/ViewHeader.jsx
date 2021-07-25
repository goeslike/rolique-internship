import React from 'react';
import {Header, HeaderTitle, HeaderSelect} from "./Header.style";
import {Link} from "react-router-dom";

const ViewHeader = ({title}) => {
    return (
        <Header>
            <HeaderTitle>
                {title}
            </HeaderTitle>
            <Link to={'/users/create'}>create user</Link>
            {/*<HeaderSelect>*/}
            {/*    <option value='' disabled selected hidden>Create New</option>*/}
            {/*    <option value='Compaign'>*/}
            {/*        Compaign*/}
            {/*    </option>*/}
            {/*    <option value='Influencer'>*/}
            {/*        Influencer*/}
            {/*    </option>*/}
            {/*    <option value='Internal User'>*/}
            {/*        Internal User*/}
            {/*    </option>*/}
            {/*</HeaderSelect>*/}
        </Header>
    );
};

export default ViewHeader;