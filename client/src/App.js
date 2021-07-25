import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import useRoutes from "./routes";
import {useSelector} from "react-redux";

function App() {
    const isAuth = useSelector(({userReducer: {isAuth}}) => isAuth);
    const routes = useRoutes(isAuth);

    return (
        <div className="App">
            <Router>
                { routes }
            </Router>
        </div>
    );
}

export default App;
