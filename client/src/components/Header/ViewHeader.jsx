import React from 'react';
import {Header, HeaderTitle} from "./Header.style";
import CreateDropdown from "../CreateDropdown/CreateDropdown";

const ViewHeader = ({title}) => {
    return (
        <Header>
            <HeaderTitle>
                {title}
            </HeaderTitle>
            <CreateDropdown />
        </Header>
    );
};

export default ViewHeader;