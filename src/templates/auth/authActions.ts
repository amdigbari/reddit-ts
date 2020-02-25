import Axios from "api/Axios";
import { getJWTTokenApi, refreshJWTTokenApi } from "api/authApi";
import { AxiosResponse } from "axios";
import { setHeaderBearerAuthorization } from "../../api/Axios";

type getJWTTokenType = {
    username: string;
    password: string;
};

type getJWTTokenResponseType = {
    access: string;
    refresh: string;
};

const getJWTToken: (request: getJWTTokenType) => Promise<AxiosResponse<getJWTTokenResponseType>> = request => {
    return Axios.post<getJWTTokenResponseType>(getJWTTokenApi, request).then(response => {
        localStorage.setItem("token", response.data.access);
        localStorage.setItem("refreshToken", response.data.refresh);

        setHeaderBearerAuthorization(response.data.access);

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

const refreshToken: () => void = () => {
    if (localStorage.getItem("refreshToken")) {
        const request: refreshJWTTokenType = {
            refresh: localStorage.getItem("refreshToken") as refreshJWTTokenType["refresh"],
        };

        Axios.post<refreshJWTTokenResponseType>(refreshJWTTokenApi, request).then(response => {
            localStorage.setItem("token", response.data.access);

            setHeaderBearerAuthorization(response.data.access);

            return response;
        });
    }
};

export type authActionsTypes = {
    getJWTToken: typeof getJWTToken;
    refreshToken: typeof refreshToken;
};

export const authActions: authActionsTypes = { getJWTToken, refreshToken };
