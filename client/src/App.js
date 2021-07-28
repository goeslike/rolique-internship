import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import useRoutes from "./routes";

function App() {
    const token = localStorage.getItem('accessToken')
    const routes = useRoutes(token);

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
