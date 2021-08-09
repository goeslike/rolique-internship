import {SET_INFLUENCERS} from "../action-types";

const initialState = {
    influencers: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INFLUENCERS: {
            return {
                ...state,
                influencers: action.payload
            }
        }

        default: return state;
    }
};

export default reducer;
