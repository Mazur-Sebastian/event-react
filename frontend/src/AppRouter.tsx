import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { routes } from 'config/routes';

export const AppRouter = () => (
    <>
        <Router>
            {routes.map(props => (
                <Route to={props.path} key={props.path} component={props.component} />
            ))}
        </Router>
    </>
);
