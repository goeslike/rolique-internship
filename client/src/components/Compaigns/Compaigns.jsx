import React from 'react';

import searchIcon from '../../assets/search-icon.png';

import {
    CompaignsWrapper,
    CompaignsContainer,
    Filters,
    FiltersTitle,
    Search,
    SearchIcon
} from './Compaigns.style';

import ViewHeader from "../Header/ViewHeader";

import {SearchInput, Label} from "../Inputs/CreateInputs.style";
import Channels from "./Channels";

const Compaigns = () => {
    return (
        <CompaignsWrapper>
            <ViewHeader title={'Compaigns'} />

            <CompaignsContainer>
                <Filters>
                    <FiltersTitle>Filters</FiltersTitle>
                    <Search>
                        <SearchInput placeholder={'Search by title...'} />
                        <SearchIcon src={searchIcon} alt={'searchIcon'} />
                    </Search>

                    <Label>Planned channels</Label>
                    <Channels />

                </Filters>
            </CompaignsContainer>
        </CompaignsWrapper>
    );
};

export default Compaigns;
