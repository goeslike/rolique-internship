import React from 'react';

import {
    CompaignWrapper,
    CompaignContainer
} from './Compaign.style';

import CreateHeader from "../Header/CreateHeader";

const CreateCompaign = () => {
    return (
        <CompaignWrapper>
            <CreateHeader title={'Create Compaign'} form={'create-compaign'}/>

            <form id={'create-compaign'}>
                <CompaignContainer>

                </CompaignContainer>
            </form>
        </CompaignWrapper>
    );
};

export default CreateCompaign;
