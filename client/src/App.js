import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import useRoutes from "./routes";

function App() {
    const routes = useRoutes(localStorage.getItem('accessToken'));

    return (
        <div className="App">
            <Router>
                { routes }
            </Router>
        </div>
    );
}

export default App;
