import { removeAuthorization } from "./../../api/Axios";
import { refreshToken } from "./authActions";
import { profileType } from "./../profile/profileActions";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Axios from "api/Axios";
import { registerApi } from "api/authApi";
import { signUpFormProps } from "./SignUp";
import { AppThunk } from "app/store";
import { signInFormProps } from "./SignIn";
import { AxiosRequestConfig } from "axios";

type initialStateType = {};

let initialState: initialStateType = {};

const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        registerUser: (state, action: PayloadAction<Partial<profileType>>) => action.payload,
        unregisterUser: () => ({}),
    },
});

export const { registerUser, unregisterUser } = authSlice.actions;

export const signUp: (request: signUpFormProps, config?: AxiosRequestConfig) => AppThunk = (request, config = {}) => (
    dispatch,
    getState,
    extraActions,
) => {
    return Axios.post(registerApi, request, config).then(response => {
        extraActions.getJWTToken(request).then(res => {
            dispatch(registerUser(request));
        });
    });
};

export const login: (request: signInFormProps) => AppThunk = request => (dispatch, getState, extraActions) => {
    return extraActions.getJWTToken(request).then(res => {
        dispatch(registerUser(request));
    });
};

export const checkLogin: () => AppThunk = () => dispatch => {
    if (localStorage.getItem("token")) {
        return Axios.get<Array<profileType>>(registerApi)
            .then(res => {
                dispatch(registerUser(res.data[0]));
                refreshToken();
                return res;
            })
            .catch(() => {
                removeAuthorization();
            });
    }
};

export default authSlice.reducer;
