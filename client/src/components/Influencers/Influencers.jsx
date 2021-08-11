import React, { useEffect, useState } from 'react';
import editIcon from '../../assets/edit-icon.png';

import searchIcon from '../../assets/search-icon.png';
import instagramIcon from '../../assets/social-icons/istagram.png';
import twitterIcon from '../../assets/social-icons/twitter.png';
import youtubeIcon from '../../assets/social-icons/youtube.png';
import facebookIcon from '../../assets/social-icons/facebook.png';
import tiktokIcon from '../../assets/social-icons/tiktok.png';
import instagramStoriesIcon from '../../assets/social-icons/instagram-stories.png';

import ViewHeader from "../Header/ViewHeader";

import {useDispatch, useSelector} from "react-redux";
import {getInfluencers} from "../../actions/influencer";

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
    const dispatch = useDispatch();
    const influencers = useSelector(({influencersReducer: {influencers}}) => influencers);

    const [searchName, setSearchName] = useState('');

    useEffect(() => {
        dispatch(getInfluencers());
    }, [dispatch]);

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
                            if (influencer.socialProfiles.instagram.username.toLowerCase().includes(searchName.toLowerCase())) {
                                return influencer
                            }
                        }).map(influencer => {
                            return (
                                <InfluencersTR key={influencer.id}>
                                    <InfluencersTD style={{width: '250px'}}>
                                        {influencer.avatar && <img src={influencer.avatar} alt=''/>}
                                        {'@' + influencer.socialProfiles.instagram.username}
                                    </InfluencersTD>

                                    <InfluencersTD style={{width: '225px'}}>
                                        {influencer.firstName + influencer.lastName}
                                    </InfluencersTD>

                                    <InfluencersTD style={{width: '215px'}}>
                                        {influencer.socialProfiles.instagram &&
                                        <a
                                            href={`https://www.instagram.com/${influencer.socialProfiles.instagram.username}`}
                                            target={'_blank'}>
                                            <InfluencerSocialIcon src={instagramIcon} alt={'instagramIcon'}/>
                                        </a>}

                                        {influencer.socialProfiles.twitter &&
                                        <a href={influencer.twitter} target={'_blank'}>
                                            <InfluencerSocialIcon src={twitterIcon} alt={'twitterIcon'}/>
                                        </a>}

                                        {influencer.socialProfiles.youtube &&
                                        <a href={influencer.socialProfiles.youtube} target={'_blank'}>
                                            <InfluencerSocialIcon src={youtubeIcon} alt={'youtubeIcon'}/>
                                        </a>}

                                        {influencer.socialProfiles.facebook &&
                                        <a href={influencer.socialProfiles.facebook} target={'_blank'}>
                                            <InfluencerSocialIcon src={facebookIcon} alt={'facebookIcon'}/>
                                        </a>}

                                    </InfluencersTD>

                                    <InfluencersTD style={{width: '295px'}}>
                                        rating
                                    </InfluencersTD>

                                    <InfluencersTD style={{width: '28px'}}>
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
