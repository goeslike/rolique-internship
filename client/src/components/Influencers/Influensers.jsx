import React, {useEffect} from 'react';
import ViewHeader from "../Header/ViewHeader";

import {InfluencersWrapper} from "./Influencers.style";
import {useDispatch, useSelector} from "react-redux";
import {getInfluencers} from "../../actions/influencer";

const Influensers = () => {
    const dispatch = useDispatch();
    const influencers = useSelector(({influencersReducer: {influencers}}) => influencers);

    useEffect(() => {
        dispatch(getInfluencers())
    });

    return (
        <InfluencersWrapper>
            <ViewHeader title='Influencers' />

        </InfluencersWrapper>
    );
};

export default Influensers;
