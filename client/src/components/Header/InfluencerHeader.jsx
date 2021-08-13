import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import redirectIcon from '../../assets/redirect-icon.png';
import CreateDropdown from '../Dropdown/CreateDropdown';
import { Header, HeaderTitle } from './Header.style';

const InfluencerHeader = ({title, id}) => {
    const history = useHistory();

    const employeeAccess = useSelector(({roleReducer: {employeeAccess}}) => employeeAccess);

    const goBack = () => {
        history.goBack();
    };
    
    return (
        <Header>
            <HeaderTitle>
                <img onClick={goBack} src={redirectIcon} alt="redirectIcon"/>
                {title}
            </HeaderTitle>
            {!employeeAccess && <CreateDropdown />}
        </Header>
    );
};

export default InfluencerHeader;
