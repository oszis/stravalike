import React, {lazy} from 'react';
import {Switch, Route, Redirect} from "react-router";

const Home = lazy(() => import('./home'));
const New = lazy(() => import('./new'));

const App: React.FC = () => {
    return (
        <React.Suspense fallback={<div>loading...</div>}>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/new" component={New}/>
                <Redirect from='*' to="/"/>
            </Switch>
        </React.Suspense>
    );
}

export default App;
