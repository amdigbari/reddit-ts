import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Loading from "atoms/Loading";
// import "./tailwind.css";
import "../global.scss";
import { checkLogin } from "templates/auth/authActions";
import { postPath } from "api/postApi";

const HomeScreenPage = lazy(() => import("templates/homeScreen/HomeScreenPage"));
const SignUpScreen = lazy(() => import("templates/auth/SignUp"));
const SignInScreen = lazy(() => import("templates/auth/SignIn"));
const PostScreen = lazy(() => import("templates/post/PostScreen"));

type RouterProps = {};

const RootRouter: React.FC<RouterProps> = React.memo(() => {
    React.useEffect(() => {
        console.log("change route");

        checkLogin();
    }, []);

    return (
        <div className='w-screen h-screen bg-gray-100'>
            <Suspense fallback={<Loading />}>
                <Router>
                    <Switch>
                        <Route path='/' exact component={HomeScreenPage} />
                        <Route path='/sign-up/' exact component={SignUpScreen} />
                        <Route path='/sign-in/' exact component={SignInScreen} />
                        <Route path={postPath()} exact component={PostScreen} />
                    </Switch>
                </Router>
            </Suspense>
        </div>
    );
});
export default RootRouter;
