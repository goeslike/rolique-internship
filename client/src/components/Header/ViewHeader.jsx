import React from 'react';
import {Header, HeaderTitle, HeaderSelect} from "./Header.style";
import {Link, useHistory} from "react-router-dom";

const ViewHeader = ({title}) => {
    const history = useHistory();

    const redirect = () => {
        history.push('/users/create')
    }

    return (
        <Header>
            <HeaderTitle>
                {title}
            </HeaderTitle>
            <div style={{cursor: 'pointer'}} onClick={redirect}>create user</div>
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