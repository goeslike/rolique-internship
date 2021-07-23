import React from 'react';
import {UserWrapper, UserHeader, UserContainer, UserFirstSection, UserSecondSection} from './CreateUser.style'

const CreateUser = () => {
    return (
        <UserWrapper>
            <UserHeader>a</UserHeader>

            <UserContainer>
                <UserFirstSection>
                    <h3>General</h3>
                </UserFirstSection>

                <UserSecondSection>
                    <h3>Role & Permissions</h3>
                    <img src="" alt=""/>
                </UserSecondSection>
            </UserContainer>
        </UserWrapper>
    );
};

export default CreateUser;