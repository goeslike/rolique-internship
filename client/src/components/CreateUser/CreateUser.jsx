import React from 'react';
import infoIcon from '../../assets/info-icon.png';
import {
    UserWrapper,
    UserHeader,
    UserContainer,
    UserFirstSection,
    UserSecondSection,
    UserSectionTitle
} from './CreateUser.style';
import {Input, Label, PictureInput} from "../Inputs/CreateInputs.style";

const CreateUser = () => {
    return (
        <UserWrapper>
            <UserHeader>header</UserHeader>

            <UserContainer>
                <UserFirstSection>
                    <UserSectionTitle>General</UserSectionTitle>

                    <Label>Profile Picture</Label>
                    <PictureInput
                        id='profilePicture'
                        name='profilePicture'
                        type='file'/>

                    <Label>First Name</Label>
                    <Input
                        id='firstName'
                        name='firstName'
                        type='text'
                        required/>

                    <Label>Last Name</Label>
                    <Input
                        id='lastName'
                        name='lastName'
                        type='text'
                        required/>

                    <Label>Email</Label>
                    <Input
                        id='email'
                        name='email'
                        type='email'
                        required/>

                    <Label>Phone</Label>
                    <Input
                        id='phone'
                        name='phone'
                        type='tel'
                        onKeyUp="this.value = this.value.replace(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/);"/>

                </UserFirstSection>

                <UserSecondSection>
                    <UserSectionTitle>
                        Role & Permissions
                        <img src={infoIcon} alt="infoIcon"/>
                    </UserSectionTitle>

                </UserSecondSection>
            </UserContainer>
        </UserWrapper>
    );
};

export default CreateUser;