import {
    SET_INFLUENCERS,
    SET_INFLUENCER
} from "../action-types";

const setInfluencers = response => ({type: SET_INFLUENCERS, payload: response});
const setInfluencer = response => ({type: SET_INFLUENCER, payload: response});

export {
    setInfluencers,
    setInfluencer
};
