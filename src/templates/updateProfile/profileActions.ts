import { accountsApi } from "./../../api/baseApi";
import Axios from "api/Axios";
import { AxiosResponse, AxiosRequestConfig } from "axios";

export const updateProfile: (request: FormData, configs?: AxiosRequestConfig) => Promise<AxiosResponse<any>> = (
    request,
    config = {},
) => {
    return Axios.put(`${accountsApi}update/`, request, config);
};
