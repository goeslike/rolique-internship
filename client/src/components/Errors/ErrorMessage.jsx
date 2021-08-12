import React from 'react';

import errorImg from "../../assets/messages-icons/error.png";
import {Error} from './Error.style';

const ErrorMessage = ({error}) => {
    return (
        <>
            {error &&
                <Error>
                    <img src={errorImg} alt="error-img"/>
                    { error }
                </Error>
            }
        </>
    );
};

export default ErrorMessage;
