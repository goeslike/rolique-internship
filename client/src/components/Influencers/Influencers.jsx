import React, {useEffect} from 'react';
import searchIcon from '../../assets/search-icon.png';

import ViewHeader from "../Header/ViewHeader";

import {useDispatch} from "react-redux";
import {getInfluencers} from "../../actions/influencer";

import { Search, SearchIcon, SearchInput } from '../Inputs/CreateInputs.style';
import {
    InfluencersContainer,
    InfluencersWrapper,
    InfluencersTable,
    InfluencersTR
} from './Influencers.style';

const Influencers = () => {
    const dispatch = useDispatch();
    // const influencers = useSelector(({influencersReducer: {influencers}}) => influencers);

    useEffect(() => {
        dispatch(getInfluencers());
    }, [dispatch]);

    return (
        <InfluencersWrapper>
            <ViewHeader title='Influencers' />

            <InfluencersContainer>
                <Search>
                    <SearchInput type={'text'} placeholder={'Search'}/>
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
                </InfluencersTable>

            </InfluencersContainer>
        </InfluencersWrapper>
    );
};

export default Influencers;
