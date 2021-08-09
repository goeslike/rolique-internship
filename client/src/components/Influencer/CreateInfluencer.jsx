import React from 'react';
import {useForm} from "react-hook-form";

import CreateHeader from "../Header/CreateHeader";

import {
    InfluencerWrapper,
    InfluencerContainer,
    InfluencerSection,
    InfluencerSectionTitle,
    InfluencerSocial
} from "./CreateInfluencer.style";

import {FileLabel, HelperText, Input, Label, SocialInput} from "../Inputs/CreateInputs.style";
import {yupResolver} from "@hookform/resolvers/yup";
import {createSchema} from "../../validators/influencer-schema";

const CreateInfluencer = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(createSchema),
    });

    const sendData = (data) => {
        console.log(data);
    };

    const dotSeparator = (value) => {

    }

    return (
        <InfluencerWrapper>
            <CreateHeader title='Create Influencer' form='create-influencer'/>

            <form id='create-influencer' onSubmit={handleSubmit(sendData)} noValidate>
                <InfluencerContainer>
                    <InfluencerSection>
                        <InfluencerSectionTitle>General</InfluencerSectionTitle>

                        <Label>First Name</Label>
                        {errors?.firstname?.message && <HelperText>{errors?.firstname?.message}</HelperText>}
                        <Input
                            {...register('firstname', {required: true})}
                            id='firstname'
                            type='text'
                            required={errors?.firstname}
                        />

                        <Label>Last Name</Label>
                        {errors?.lastname?.message && <HelperText>{errors?.lastname?.message}</HelperText>}
                        <Input
                            {...register('lastname', {required: true})}
                            id='lastname'
                            type='text'
                            required={errors?.lastname}
                        />

                        <Label>Birthdate</Label>
                        <Input
                            {...register('date', {required: true})}
                            id='date'
                            type='date' />

                        <Label>Profession</Label>
                        {errors?.profession?.message && <HelperText>{errors?.profession?.message}</HelperText>}
                        <Input
                            {...register('profession', {required: true})}
                            id='profession'
                            type='text'
                            required={errors.profession}
                        />

                        <Label>Profile Picture</Label>
                        <Input
                            style={{display: 'none'}}
                            {...register('avatar', {required: true})}
                            id='influencer-avater'
                            type='file'/>
                        <FileLabel htmlFor={'influencer-avater'}/>
                    </InfluencerSection>

                    <InfluencerSection>
                        <InfluencerSectionTitle>Social Profiles</InfluencerSectionTitle>

                        <InfluencerSocial>
                            <div>
                                <Label>Instagram</Label>
                                <SocialInput
                                    {...register('instagram')}
                                    id='instagram'
                                    type='text'
                                    required={errors.instagram}
                                />
                            </div>
                            <div>
                                <Label>Instagram Followers</Label>
                                <SocialInput
                                    {...register('instagramFollowers')}
                                    id='instagramFollowers'
                                    type='string'
                                    required={errors.instagramFollowers}
                                    onChange={(event) => {
                                        event.target.value = dotSeparator(event.target.value);
                                    }}/>
                            </div>
                        </InfluencerSocial>

                        <InfluencerSocial>
                            <div>
                                <Label>YouTube</Label>
                                <SocialInput
                                    {...register('youtube')}
                                    id='youtube'
                                    type='text'
                                    required={errors.youtube}
                                />
                            </div>
                            <div>
                                <Label>YouTube Followers</Label>
                                <SocialInput
                                    {...register('youtubeFollowers')}
                                    id='youtubeFollowers'
                                    type='number'
                                    required={errors.youtubeFollowers}/>
                            </div>
                        </InfluencerSocial>

                        <InfluencerSocial>
                            <div>
                                <Label>Facebook</Label>
                                <SocialInput
                                    {...register('facebook')}
                                    id='facebook'
                                    type='text'
                                    required={errors.facebook}
                                />
                            </div>
                            <div>
                                <Label>Facebook Followers</Label>
                                <SocialInput
                                    {...register('facebookFollowers')}
                                    id='facebookFollowers'
                                    type='number'
                                    required={errors.facebookFollowers}/>
                            </div>
                        </InfluencerSocial>

                        <InfluencerSocial>
                            <div>
                                <Label>Tiktok</Label>
                                <SocialInput
                                    {...register('tiktok')}
                                    id='tiktok'
                                    type='text'
                                    required={errors.tiktok}
                                />
                            </div>
                            <div>
                                <Label>Tiktok Followers</Label>
                                <SocialInput
                                    {...register('tiktokFollowers')}
                                    id='tiktokFollowers'
                                    type='number'
                                    required={errors.tiktokFollowers}/>
                            </div>
                        </InfluencerSocial>

                        <InfluencerSocial>
                            <div>
                                <Label>Twitter</Label>
                                <SocialInput
                                    {...register('twitter')}
                                    id='twitter'
                                    type='text'
                                    required={errors.twitter}
                                />
                            </div>
                            <div>
                                <Label>Twitter Followers</Label>
                                <SocialInput
                                    {...register('twitterFollowers')}
                                    id='twitterFollowers'
                                    type='number'
                                    required={errors.twitterFollowers}/>
                            </div>
                        </InfluencerSocial>

                        <InfluencerSocial>
                            <div>
                                <Label>Blog</Label>
                                <SocialInput
                                    {...register('blog')}
                                    id='blog'
                                    type='text'
                                    required={errors.blog}
                                />
                            </div>
                            <div>
                                <Label>Blog Followers</Label>
                                <SocialInput
                                    {...register('blogFollowers')}
                                    id='blogFollowers'
                                    type='number'
                                    required={errors.blogFollowers}/>
                            </div>
                        </InfluencerSocial>

                    </InfluencerSection>
                </InfluencerContainer>
            </form>
        </InfluencerWrapper>
    );
};

export default CreateInfluencer;
