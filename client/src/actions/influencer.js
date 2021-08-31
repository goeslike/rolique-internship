import axios from "axios";
import {BASE_URL} from '../constants';

import { setCreateError, setInfluencer, setInfluencers, setUpdateError } from '../redux/action-creators';

const getInfluencers = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(BASE_URL + 'influencers');
            dispatch(setInfluencers(response.data));
        } catch (e) {
            console.log(e);
        }
    };
};

const getInfluencer = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(BASE_URL + `influencers/${id}`);
            dispatch(setInfluencer(response.data));
        } catch (e) {
            console.log(e);
        }
    };
};

const createInfluencer = (data) => {
    return async (dispatch) => {
        const token = localStorage.getItem('accessToken');

        const config = {
            headers: {Authorization: token}
        };

        try {
            dispatch(setCreateError(null));
            await axios.post(BASE_URL + 'influencers', data, config);
        } catch (e) {
            dispatch(setCreateError(e.message));
        }
    }
};

const updateInfluencer = (id, data) => {
    const token = localStorage.getItem('accessToken');

    const config = {
        headers: {Authorization: token}
    };

    return async (dispatch) => {
        try {
            dispatch(setUpdateError(null));
            await axios.put(BASE_URL + `influencers/${id}`, data, config);
        } catch (e) {
            dispatch(setUpdateError(e.message));
        }
    };
};

export {
    getInfluencers,
    createInfluencer,
    getInfluencer,
    updateInfluencer
};
