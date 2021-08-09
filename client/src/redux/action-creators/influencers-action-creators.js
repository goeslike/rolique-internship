import {
    SET_INFLUENCERS
} from "../action-types";

const setInfluencers = response => ({type: SET_INFLUENCERS, payload: response});

export {
    setInfluencers
};
