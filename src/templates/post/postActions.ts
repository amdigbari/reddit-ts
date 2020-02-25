import { socialsApi } from "api/baseApi";
import { AxiosResponse } from "axios";
import Axios from "api/Axios";

export type postType = {
    [propName: string]: any;
};

type searchResponseType = {
    posts: Array<postType>;
    channels: Array<postType>;
    users: Array<postType>;
};

export const searchApi: (query: string) => Promise<AxiosResponse<searchResponseType>> = query => {
    return Axios.get<searchResponseType>(`${socialsApi}search/?q=${query}`);
};

// export type postsActionsTypes = { searchApi: typeof searchApi };

// export const postsActions = { searchApi };
