import React from 'react';
import {Header, HeaderButton, HeaderTitle} from "./Header.style";

import redirectIcon from '../../assets/redirect-icon.png';
import {useHistory} from "react-router-dom";

const CreateHeader = ({title, form}) => {
    const history = useHistory();

    const goBack = () => {
        history.goBack();
    };

    return (
        <Header>
            <HeaderTitle>
                <img onClick={goBack} src={redirectIcon} alt="redirectIcon"/>
                { title }
            </HeaderTitle>
            <HeaderButton type='submit' form={form}>Save Changes</HeaderButton>
        </Header>
    );
};

export default CreateHeader;
