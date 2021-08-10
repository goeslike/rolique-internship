import axios from "axios";
import {BASE_URL} from '../constants';

import {setInfluencers} from "../redux/action-creators";

const getInfluencers = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(BASE_URL + 'influencers');
            console.log(response.data);

            dispatch(setInfluencers(response.data));
        } catch (e) {
            console.log(e);
        }
    };
};

const createInfluencer = async (data) => {
    const token = localStorage.getItem('accessToken');

    const config = {
        headers: {Authorization: token}
    };

    try {
        await axios.post(BASE_URL + 'influencers', data, config);
    } catch (e) {
        console.log(e);
    }
}

export {
    getInfluencers,
    createInfluencer
};
