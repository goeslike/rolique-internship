import React, {useState} from 'react';

import searchIcon from '../../assets/search-icon.png';
import arrowsIcon from '../../assets/compaigns/arrows.png';

import {
    CompaignsWrapper,
    CompaignsContainer,
    Filters,
    FiltersTitle,
    Search,
    SearchIcon,
    MinMaxInput,
    CompaignsTable,
    CompaignsTR
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

                <CompaignsTable>
                    <thead style={{marginBottom: '5px'}}>
                        <CompaignsTR>
                            <th style={{width: '302px'}}>Compaign Title <img src={arrowsIcon} alt="arrowsIcon"/></th>
                            <th style={{width: '103px'}}>Brand <img src={arrowsIcon} alt="arrowsIcon"/></th>
                            <th style={{width: '64px'}}>Start <img src={arrowsIcon} alt="arrowsIcon"/></th>
                            <th style={{width: '86px'}}>End <img src={arrowsIcon} alt="arrowsIcon"/></th>
                            <th style={{width: '128px'}}>Status</th>
                            <th style={{width: '53px'}}>TL</th>
                            <th style={{width: '82px'}}>Budget <img src={arrowsIcon} alt="arrowsIcon"/></th>
                            <th style={{width: '90px'}}>Profit <img src={arrowsIcon} alt="arrowsIcon"/></th>
                            <th style={{width: '28px'}}></th>
                        </CompaignsTR>
                    </thead>

                </CompaignsTable>
            </CompaignsContainer>
        </CompaignsWrapper>
    );
};

export default Compaigns;
