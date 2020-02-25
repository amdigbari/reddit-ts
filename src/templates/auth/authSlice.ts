import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Axios from "api/Axios";
import { registerApi } from "../../api/authApi";
import { signUpFormProps } from "./SignUp";
import { AppThunk } from "../../app/store";
import { signInFormProps } from "./SignIn";

type initialStateType = {};

let initialState: initialStateType = {};

const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        registerUser: (state, action: PayloadAction<signUpFormProps>) => action.payload,
        unregisterUser: () => ({}),
    },
});

export const { registerUser, unregisterUser } = authSlice.actions;

export const signUp: (request: signUpFormProps) => AppThunk = request => (dispatch, getState, extraActions) => {
    return Axios.post(registerApi, request).then(response => {
        extraActions.getJWTToken(request).then(res => {
            console.log("access", res.data.access);
            console.log("refresh", res.data.refresh);

            dispatch(registerUser(request));
        });
    });
};

export const login: (request: signInFormProps) => AppThunk = request => (dispatch, getState, extraActions) => {
    return extraActions.getJWTToken(request).then(res => {
        console.log("access", res.data.access);
        console.log("refresh", res.data.refresh);

        dispatch(registerUser(request));
    });
};

export default authSlice.reducer;
