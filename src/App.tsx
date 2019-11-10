import React from 'react';
import {Route, RouteComponentProps, Router, Switch} from "react-router-dom";
import {createBrowserHistory} from 'history';

import Contract from './component/Contract'
import Main from './component/Main'

export const history = createBrowserHistory();

const renderContracts = (rProps: RouteComponentProps<{ id: string }>) => {
    return <Contract {...rProps} />
};

const App: React.FC = () => {
    return (
        <div>
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route path="/contracts/:id" render={renderContracts}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
