import React from 'react';
import { useSelector } from 'react-redux';
import {Header, HeaderTitle} from "./Header.style";
import CreateDropdown from "../Dropdown/CreateDropdown";

const ViewHeader = ({title}) => {
    const employeeAccess = useSelector(({roleReducer: {employeeAccess}}) => employeeAccess);

    return (
        <Header>
            <HeaderTitle>
                {title}
            </HeaderTitle>
            {!employeeAccess && <CreateDropdown />}
        </Header>
    );
};

export default ViewHeader;
