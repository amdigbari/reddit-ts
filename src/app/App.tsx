import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Loading from "atoms/loading/Loading";
// import "./tailwind.css";
import "../global.scss";

const HomeScreenPage = lazy(() => import("templates/homeScreen/HomeScreenPage"));
const SignUpScreen = lazy(() => import("templates/auth/SignUp"));
const SignInScreen = lazy(() => import("templates/auth/SignIn"));

type RouterProps = {};

const RootRouter: React.FC<RouterProps> = React.memo(() => {
    return (
        <Suspense fallback={<Loading />}>
            <Router>
                <Switch>
                    <Route path='/' exact component={HomeScreenPage} />
                    <Route path='/sign-up' exact component={SignUpScreen} />
                    <Route path='/sign-in' exact component={SignInScreen} />
                </Switch>
            </Router>
        </Suspense>
    );
});
export default RootRouter;
