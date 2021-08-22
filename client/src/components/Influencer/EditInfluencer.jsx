import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { CSSTransition } from 'react-transition-group';

import { updateInfluencer } from '../../actions/influencer';

import { yupResolver } from '@hookform/resolvers/yup';
import { createSchema } from '../../validators/influencer-schema';

import ErrorMessage from '../Errors/ErrorMessage';
import CreateHeader from '../Header/CreateHeader';

import { FileLabel, HelperText, Input, Label, SocialInput } from '../Inputs/CreateInputs.style';

import {
    InfluencerContainer,
    InfluencerSection,
    InfluencerSectionTitle,
    InfluencerSocial,
    InfluencerWrapper
} from './CreateInfluencer.style';

const EditInfluencer = () => {
    const history = useHistory();

    const [image, setImage] = useState();
    const [preview, setPreview] = useState();

    const influencer = useSelector(({influencersReducer : {influencer}}) => influencer);
    const updateError = useSelector(({errorsReducer: {updateError}}) => updateError);

    const defaultValues = {
        firstName: influencer.firstName,
        lastName: influencer.lastName,
        birthdate: influencer.birthdate,
        profession: influencer?.profession,
        instagram: influencer.socialProfiles?.instagram?.username,
        instagramFollowers: influencer.socialProfiles?.instagram.followers,
        youTube: influencer.socialProfiles?.youtube?.username,
        youTubeFollowers: influencer.socialProfiles?.youtube?.followers,
        facebook: influencer.socialProfiles?.facebook?.username,
        facebookFollowers: influencer.socialProfiles?.facebook?.followers,
        tiktok: influencer.socialProfiles?.tiktok?.username,
        tiktokFollowers: influencer.socialProfiles?.tiktok?.followers,
        twitter: influencer.socialProfiles?.twitter?.username,
        twitterFollowers: influencer.socialProfiles?.twitter?.followers,
        blog: influencer.socialProfiles?.blog?.username,
        blogFollowers: influencer.socialProfiles?.blog?.followers,
    };

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(createSchema),
        defaultValues: defaultValues
    });

    useEffect(() => {
        if (image) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            }
            reader.readAsDataURL(image);
        } else {
            setPreview(null);
        }
    }, [image]);

    const sendData = async (data) => {
        const formData = new FormData();

        for (let key in data) {
            if (key === 'avatar') {
                formData.append(key, data[key][0]);
            }
            if (data[key] !== '') {
                formData.append(key, data[key]);
            }
        }
        await updateInfluencer(influencer.id, formData);

        history.goBack();

        setPreview(null);
        reset();
    };

    return (
        <InfluencerWrapper>
            <CreateHeader title='Edit Influencer' form='create-influencer'/>
            <CSSTransition in={updateError} classNames={'alert'} timeout={300} unmountOnExit>
                <ErrorMessage error={updateError}/>
            </CSSTransition>

            <form id='edit-influencer' onSubmit={handleSubmit(sendData)} noValidate>
                <InfluencerContainer>
                    <InfluencerSection>
                        <InfluencerSectionTitle>General</InfluencerSectionTitle>

                        <Label>First Name</Label>
                        {errors?.firstname?.message && <HelperText>{errors?.firstname?.message}</HelperText>}
                        <Input
                            {...register('firstName', {required: true})}
                            id='firstName'
                            type='text'
                            required={errors?.firstname}
                        />

                        <Label>Last Name</Label>
                        {errors?.lastname?.message && <HelperText>{errors?.lastname?.message}</HelperText>}
                        <Input
                            {...register('lastName', {required: true})}
                            id='lastName'
                            type='text'
                            required={errors?.lastname}
                        />

                        <Label>Birthdate</Label>
                        <Input
                            {...register('birthdate', {required: true})}
                            id='birthdate'
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
                            type='file'
                            onInput={(event) => {
                                const file = event.target.files[0];
                                if (file) {
                                    setImage(file);
                                } else {
                                    setImage(null);
                                }
                            }}
                        />
                        <FileLabel style={{
                            backgroundImage: `url(${preview ? preview : influencer.avatar})`
                        }} htmlFor={'influencer-avater'}/>
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
                                    required={errors.instagramFollowers}/>
                            </div>
                        </InfluencerSocial>

                        <InfluencerSocial>
                            <div>
                                <Label>YouTube</Label>
                                <SocialInput
                                    {...register('youTube')}
                                    id='youtube'
                                    type='text'
                                    required={errors.youtube}
                                />
                            </div>
                            <div>
                                <Label>YouTube Followers</Label>
                                <SocialInput
                                    {...register('youTubeFollowers')}
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

export default EditInfluencer;
