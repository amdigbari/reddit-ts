import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, RouteComponentProps } from "react-router-dom";

const HomeScreenPage: React.FC<RouteComponentProps> = lazy(() => import("./templates/homeScreen/HomeScreenPage"));

type RouterProps = {};
const Fallback: React.FC<{}> = () => {
    return <div></div>;
};

const RootRouter: React.FC<RouterProps> = React.memo(() => {
    return (
        <Suspense fallback={<Fallback />}>
            <Router>
                <Switch>
                    <Route path='/' component={HomeScreenPage} />
                </Switch>
            </Router>
        </Suspense>
    );
});
export default RootRouter;
