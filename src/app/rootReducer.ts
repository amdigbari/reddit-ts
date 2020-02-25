import { combineReducers } from "@reduxjs/toolkit";

import AuthReducer from "templates/auth/authSlice";

const rootReducer = combineReducers({
    loginUser: AuthReducer,
});

export type RootStateType = ReturnType<typeof rootReducer>;

export default rootReducer;
