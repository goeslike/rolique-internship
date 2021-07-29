import React from 'react';
import CreateHeader from "../Header/CreateHeader";

import {
    InfluencerWrapper,
    InfluencerContainer,
    InfluencerSection,
    InfluencerSectionTitle,
    InfluencerSocial
} from "./CreateInfluencer.style";
import {FileLabel, Input, Label, SocialInput} from "../Inputs/CreateInputs.style";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {createSchema} from "../../validators/influencer-schema";

const CreateInfluencer = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(createSchema),
    });

    return (
        <InfluencerWrapper>
            <CreateHeader title='Create Influencer' form='create-form'/>

            <form id='create-influencer'>
                <InfluencerContainer>
                    <InfluencerSection>
                        <InfluencerSectionTitle>General</InfluencerSectionTitle>

                        <Label>First Name</Label>
                        <Input
                            {...register('firstname', {required: true})}
                            id='firstname'
                            type='text'/>

                        <Label>Last Name</Label>
                        <Input
                            {...register('lastname', {required: true})}
                            id='lastname'
                            type='text'/>

                        <Label>Birthdate</Label>
                        <Input
                            {...register('date', {required: true})}
                            id='date'
                            type='date' />

                        <Label>Profession</Label>
                        <Input />

                        <Label>Profile Picture</Label>
                        <Input
                            style={{display: 'none'}}
                            {...register('avatar', {required: true})}
                            id='influencer-avater'
                            type='file'/>
                        <FileLabel for={'influencer-avater'}/>
                    </InfluencerSection>

                    <InfluencerSection>
                        <InfluencerSectionTitle>Social Profiles</InfluencerSectionTitle>

                        <InfluencerSocial>
                            <div>
                                <Label>Instagram</Label>
                                <SocialInput />
                            </div>
                            <div>
                                <Label>Instagram Followers</Label>
                                <SocialInput />
                            </div>
                        </InfluencerSocial>

                        <InfluencerSocial>
                            <div>
                                <Label>YouTube</Label>
                                <SocialInput />
                            </div>
                            <div>
                                <Label>YouTube Followers</Label>
                                <SocialInput />
                            </div>
                        </InfluencerSocial>

                        <InfluencerSocial>
                            <div>
                                <Label>Facebook</Label>
                                <SocialInput />
                            </div>
                            <div>
                                <Label>Facebook Followers</Label>
                                <SocialInput />
                            </div>
                        </InfluencerSocial>

                        <InfluencerSocial>
                            <div>
                                <Label>Tiktok</Label>
                                <SocialInput />
                            </div>
                            <div>
                                <Label>Tiktok Followers</Label>
                                <SocialInput />
                            </div>
                        </InfluencerSocial>

                        <InfluencerSocial>
                            <div>
                                <Label>Twitter</Label>
                                <SocialInput />
                            </div>
                            <div>
                                <Label>Twitter Followers</Label>
                                <SocialInput />
                            </div>
                        </InfluencerSocial>

                        <InfluencerSocial>
                            <div>
                                <Label>Blog</Label>
                                <SocialInput />
                            </div>
                            <div>
                                <Label>Blog Followers</Label>
                                <SocialInput />
                            </div>
                        </InfluencerSocial>

                    </InfluencerSection>
                </InfluencerContainer>
            </form>
        </InfluencerWrapper>
    );
};

export default CreateInfluencer;