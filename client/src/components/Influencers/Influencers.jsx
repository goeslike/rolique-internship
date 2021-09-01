import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import editIcon from '../../assets/edit-icon.png';

import searchIcon from '../../assets/search-icon.png';
import instagramIcon from '../../assets/social-icons/istagram.png';
import twitterIcon from '../../assets/social-icons/twitter.png';
import youtubeIcon from '../../assets/social-icons/youtube.png';
import facebookIcon from '../../assets/social-icons/facebook.png';
import tiktokIcon from '../../assets/social-icons/tiktok.png';

import ViewHeader from "../Header/ViewHeader";

import {useDispatch, useSelector} from "react-redux";
import {getInfluencers, getInfluencer} from "../../actions/influencer";

import { Search, SearchIcon, SearchInput } from '../Inputs/CreateInputs.style';

import {
    InfluencersContainer,
    InfluencersWrapper,
    InfluencersTable,
    InfluencersTR,
    InfluencersTD,
    InfluencerSocialIcon
} from './Influencers.style';

const Influencers = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const influencers = useSelector(({influencersReducer: {influencers}}) => influencers);

    const [searchName, setSearchName] = useState('');

    useEffect(() => {
        dispatch(getInfluencers());
    }, [dispatch]);

    const getInfluencerById = async (id) => {
        await dispatch(getInfluencer(id));
    }

    const redirect = (id) => {
        history.push(`/influencers/id${id}`);
    };

    const getUsername = (socialProfiles) => {
        if (socialProfiles?.instagram) return '@' + socialProfiles.instagram.username;
        if (socialProfiles?.tikTok) return '@' + socialProfiles.tikTok.username;
        if (socialProfiles?.youTube) return '@' + socialProfiles.youTube.username;
        if (socialProfiles?.twitter) return '@' + socialProfiles.twitter.username;

        return '—';
    };

    return (
        <InfluencersWrapper>
            <ViewHeader title='Influencers' />

            <InfluencersContainer>
                <Search>
                    <SearchInput type={'text'} placeholder={'Search'} onChange={e => setSearchName(e.target.value)}/>
                    <SearchIcon src={searchIcon} alt={'searchIcon'} />
                </Search>

                <InfluencersTable>
                    <thead style={{marginBottom: '5px'}}>
                        <InfluencersTR>
                            <th style={{width: '250px'}}>Username</th>
                            <th style={{width: '225px'}}>Name</th>
                            <th style={{width: '215px'}}>Channels</th>
                            <th style={{width: '295px'}}>Rating</th>
                            <th style={{width: '28px'}}></th>
                        </InfluencersTR>
                    </thead>
                    <tbody>
                    {influencers.filter(influencer => {
                            if (searchName === '') {
                                return influencer
                            }
                            if (getUsername(influencer.socialProfiles).toLowerCase().includes(searchName.toLowerCase())) {
                                return influencer
                            }
                        }).map(influencer => {
                            return (
                                <InfluencersTR key={influencer.id}>
                                    <InfluencersTD style={{width: '250px'}}>
                                        {influencer.avatar && <img src={influencer.avatar} alt=''/>}
                                        {getUsername(influencer.socialProfiles)}
                                    </InfluencersTD>

                                    <InfluencersTD style={{width: '225px'}}>
                                        {influencer.firstName + ' ' + influencer.lastName}
                                    </InfluencersTD>

                                    <InfluencersTD style={{width: '215px'}}>
                                        {influencer.socialProfiles.instagram &&
                                        <a
                                            href={`https://www.instagram.com/${influencer.socialProfiles?.instagram?.username}`}
                                            target={'_blank'}
                                            rel="noreferrer">
                                            <InfluencerSocialIcon src={instagramIcon} alt={'instagramIcon'}/>
                                        </a>}

                                        {influencer.socialProfiles.twitter &&
                                        <a
                                            href={`https://twitter.com/${influencer.socialProfiles?.twitter?.username}`}
                                            target={'_blank'}
                                            rel="noreferrer"
                                        >
                                            <InfluencerSocialIcon src={twitterIcon} alt={'twitterIcon'}/>
                                        </a>}

                                        {influencer.socialProfiles.youTube &&
                                        <a
                                            href={`https://www.youtube.com/c/${influencer.socialProfiles?.youTube?.username}`}
                                            target={'_blank'}
                                            rel="noreferrer"
                                        >
                                            <InfluencerSocialIcon src={youtubeIcon} alt={'youtubeIcon'}/>
                                        </a>}

                                        {influencer.socialProfiles.facebook &&
                                        <a href={influencer.socialProfiles.facebook} target={'_blank'} rel="noreferrer">
                                            <InfluencerSocialIcon src={facebookIcon} alt={'facebookIcon'}/>
                                        </a>}

                                        {influencer.socialProfiles.tikTok &&
                                        <a
                                            href={`https://www.tiktok.com/@${influencer.socialProfiles?.tikTok?.username}`}
                                            target={'_blank'}
                                            rel="noreferrer"
                                        >
                                            <InfluencerSocialIcon src={tiktokIcon} alt={'tiktokIcon'}/>
                                        </a>}

                                    </InfluencersTD>

                                    <InfluencersTD style={{width: '295px'}}>
                                        rating
                                    </InfluencersTD>

                                    <InfluencersTD onClick={async() => {
                                        await getInfluencerById(influencer.id);
                                        redirect(influencer.id);
                                    }} style={{width: '28px'}}>
                                        <span>
                                            <div>Open Influencer</div>
                                            <img src={editIcon} alt='editIcon' />
                                        </span>
                                    </InfluencersTD>
                                </InfluencersTR>
                            );
                        })}
                    </tbody>
                </InfluencersTable>

            </InfluencersContainer>
        </InfluencersWrapper>
    );
};

export default Influencers;
