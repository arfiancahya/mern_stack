import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Home, Login, Register } from '../../pages';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
            </Switch>
        </Router>
    );
}

export default Routes;
