import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Loading from "atoms/Loading";
// import "./tailwind.css";
import "../global.scss";
import { postPath } from "api/postApi";
import { channelPath } from "api/channelApi";
import { profilePath } from "api/profileApi";
import { checkLogin } from "templates/auth/authSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./store";

const HomeScreenPage = lazy(() => import("templates/homeScreen/HomeScreenPage"));
const SignUpScreen = lazy(() => import("templates/auth/SignUp"));
const SignInScreen = lazy(() => import("templates/auth/SignIn"));
const PostScreen = lazy(() => import("templates/post/PostScreen"));
const ChannelScreen = lazy(() => import("templates/channel/ChannelScreen"));
const ProfileScreen = lazy(() => import("templates/profile/ProfileScreen"));

type RouterProps = {};

const RootRouter: React.FC<RouterProps> = React.memo(() => {
    const dispatch: AppDispatch = useDispatch();

    React.useEffect(() => {
        dispatch(checkLogin());
    }, [dispatch]);

    return (
        <div className='w-full h-screen bg-gray-100'>
            <Suspense fallback={<Loading />}>
                <Router>
                    <Switch>
                        <Route path='/' exact component={HomeScreenPage} />
                        <Route path='/sign-up/' exact component={SignUpScreen} />
                        <Route path='/sign-in/' exact component={SignInScreen} />
                        <Route path={postPath()} exact component={PostScreen} />
                        <Route path={channelPath()} exact component={ChannelScreen} />
                        <Route path={profilePath()} exact component={ProfileScreen} />
                    </Switch>
                </Router>
            </Suspense>
        </div>
    );
});
export default RootRouter;
