import React, {useState} from 'react';

import searchIcon from '../../assets/search-icon.png';

import {
    CompaignsWrapper,
    CompaignsContainer,
    Filters,
    FiltersTitle,
    Search,
    SearchIcon,
    MinMaxInput
} from './Compaigns.style';

import ViewHeader from "../Header/ViewHeader";

import {SearchInput, Label} from "../Inputs/CreateInputs.style";

import Channels from "./Channels";
import BrandSelect from "../Dropdown/BrandSelect";
import EffortSelect from "../Dropdown/EffortSelect";
import StatusSelect from "../Dropdown/StatusSelect";
import TlSelect from "../Dropdown/TLSelect";

const Compaigns = () => {
    const [brand, setBrand] = useState('');
    const [effort, setEffort] = useState('');
    const [status, setStatus] = useState('');
    const [TL, setTL] = useState('');

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

                    <Label>Brand</Label>
                    <BrandSelect brand={brand} setBrands={setBrand}/>

                    <Label>Effort</Label>
                    <EffortSelect effort={effort} setEffort={setEffort}/>

                    <Label>Status</Label>
                    <StatusSelect status={status} setStatus={setStatus}/>

                    <Label>TL</Label>
                    <TlSelect TL={TL} setTL={setTL}/>

                    <Label>Budget</Label>
                    <MinMaxInput placeholder={'Min'} /> <MinMaxInput placeholder={'Max'} />

                    <Label>Profit</Label>
                    <MinMaxInput placeholder={'Min'} /> <MinMaxInput placeholder={'Max'} />

                </Filters>
            </CompaignsContainer>
        </CompaignsWrapper>
    );
};

export default Compaigns;
