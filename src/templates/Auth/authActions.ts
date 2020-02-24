import Axios from "api/Axios";
import { getJWTTokenApi, refreshJWTTokenApi } from "api/authApi";
import { AxiosResponse } from "axios";

type getJWTTokenType = {
    username: string;
    password: string;
};

type getJWTTokenResponseType = {
    access: string;
    refresh: string;
};

export const getJWTToken: (request: getJWTTokenType) => Promise<AxiosResponse<getJWTTokenResponseType>> = request => {
    return Axios.post<getJWTTokenResponseType>(getJWTTokenApi, request).then(response => {
        console.log(response);

        localStorage.setItem("token", response.data.access);
        localStorage.setItem("refreshToken", response.data.refresh);

        setInterval(refreshToken, 180000);

        return response;
    });
};

type refreshJWTTokenType = {
    refresh: string;
};

type refreshJWTTokenResponseType = {
    access: string;
};

export const refreshToken: () => void = () => {
    if (localStorage.getItem("refreshToken")) {
        const request: refreshJWTTokenType = {
            refresh: localStorage.getItem("refreshToken") as refreshJWTTokenType["refresh"],
        };

        Axios.post<refreshJWTTokenResponseType>(refreshJWTTokenApi, request).then(response => {
            localStorage.setItem("token", response.data.access);

            return response;
        });
    }
};
