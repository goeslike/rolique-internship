import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import redirectIcon from '../../assets/redirect-icon.png';
import editIcon from '../../assets/edit-influencer.png';

import CreateDropdown from '../Dropdown/CreateDropdown';
import { Header, HeaderTitle, EditButton } from './Header.style';

const InfluencerHeader = ({title, id}) => {
    const history = useHistory();

    const employeeAccess = useSelector(({roleReducer: {employeeAccess}}) => employeeAccess);

    const goBack = () => {
        history.goBack();
    };

    const openEditPage = () => {
        history.push(`/influencers/edit/id${id}`);
    };

    return (
        <Header>
            <HeaderTitle>
                <img onClick={goBack} src={redirectIcon} alt="redirectIcon"/>
                {title}
            </HeaderTitle>
            <div style={{display: 'flex'}}>
                <EditButton onClick={openEditPage}>
                    <img src={editIcon} alt="editIcon"/>
                    Edit
                </EditButton>
                {!employeeAccess && <CreateDropdown />}
            </div>
        </Header>
    );
};

export default InfluencerHeader;
