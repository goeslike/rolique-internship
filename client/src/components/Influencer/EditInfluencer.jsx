import React, { useEffect, useState } from 'react';
import './Ifluencer.css';
import { useForm } from 'react-hook-form';
import {useSelector} from 'react-redux';
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

import {DatePickerComponent} from "@syncfusion/ej2-react-calendars";

const minDate = new Date('1950-01-01');

const EditInfluencer = () => {
    const history = useHistory();

    const [error, setError] = useState('');

    const [image, setImage] = useState();
    const [preview, setPreview] = useState();

    const influencer = useSelector(({influencersReducer : {influencer}}) => influencer);

    const defaultValues = {
        firstName: influencer.firstName,
        lastName: influencer.lastName,
        birthdate: influencer.birthdate,
        profession: influencer?.profession,
        instagram: influencer.socialProfiles?.instagram?.username,
        instagramFollowers: influencer.socialProfiles?.instagram?.followers,
        youTube: influencer.socialProfiles?.youTube?.username,
        youTubeFollowers: influencer.socialProfiles?.youTube?.followers,
        facebook: influencer.socialProfiles?.facebook?.username,
        facebookFollowers: influencer.socialProfiles?.facebook?.followers,
        tikTok: influencer.socialProfiles?.tikTok?.username,
        tikTokFollowers: influencer.socialProfiles?.tikTok?.followers,
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
        setError('');
        const formData = new FormData();

        for (let key in data) {
            if (key === 'avatar') {
                formData.append(key, data[key][0]);
            }
            if (data[key] !== '') {
                formData.append(key, data[key]);
            }
        }
        const resp = await updateInfluencer(influencer.id, formData);

        if (resp) {
            setError(resp);
        } else {
            history.goBack();
            setPreview(null);

            reset();
        }
    };

    return (
        <InfluencerWrapper>
            <CreateHeader title='Edit Influencer' form='update-influencer'/>
            <CSSTransition in={!!error} classNames={'alert'} timeout={300} unmountOnExit>
                <ErrorMessage error={error}/>
            </CSSTransition>

            <form id='update-influencer' onSubmit={handleSubmit(sendData)} noValidate>
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
                        <DatePickerComponent
                            className={'date'}
                            placeholder={'dd/mm/yyyy'}
                            min={minDate}
                            max={new Date()}
                            format={'dd-MM-yyyy'}
                            {...register('birthdate')}
                        />

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
                                    id='youTube'
                                    type='text'
                                    required={errors.youtube}
                                />
                            </div>
                            <div>
                                <Label>YouTube Followers</Label>
                                <SocialInput
                                    {...register('youTubeFollowers')}
                                    id='youTubeFollowers'
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
                                    {...register('tikTok')}
                                    id='tikTok'
                                    type='text'
                                    required={errors.tiktok}
                                />
                            </div>
                            <div>
                                <Label>Tiktok Followers</Label>
                                <SocialInput
                                    {...register('tikTokFollowers')}
                                    id='tikTokFollowers'
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
