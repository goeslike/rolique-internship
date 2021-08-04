import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import useRoutes from "./routes";
import { CheckUser } from './helpers/checkUser';

function App() {
    const routes = useRoutes(CheckUser());

    return (
        <div className="App">
            <Router>
                { routes }
            </Router>
        </div>
    );
}

export default App;
