import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import useRoutes from "./routes";
import {useDispatch, useSelector} from "react-redux";
import {setAccessToken} from "./redux/action-creators";

function App() {
    const dispatch = useDispatch();
    const accessToken = useSelector(({userReducer: {accessToken}}) => accessToken);

    const token = localStorage.getItem('accessToken');
    if (token) {
        dispatch(setAccessToken(token));
    }

    const routes = useRoutes(accessToken);

    // localStorage.removeItem('accessToken')
    // localStorage.removeItem('refreshToken')

    return (
        <div className="App">
            <Router>
                { routes }
            </Router>
        </div>
    );
}

export default App;
