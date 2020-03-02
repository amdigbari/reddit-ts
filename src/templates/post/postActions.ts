import { AxiosResponse } from "axios";

import { socialsApi } from "api/baseApi";
import Axios from "api/Axios";
import { profileType } from "templates/profile/profileActions";
import { channelType } from "templates/channel/channelActions";
import { commentType } from "templates/comment/commentActions";
import { getPostApi, scorePostApi } from "api/postApi";

export type pkType = string | number;

export type feedBackType = {
    likes: number;
    dislikes: number;
};

export type scoreResponse = {
    status: "NEGATIVE" | "POSITIVE" | null;
};

export type postType = {
    id: pkType;
    text: string;
    author: profileType;
    create_time: string;
    like: number;
    no_feedbacks: feedBackType;
    image?: string | null;
    channel?: channelType;
    comments?: Array<commentType>;
    no_comments?: number;
};

type searchResponseType = {
    posts: Array<postType>;
    channels: Array<channelType>;
    users: Array<profileType>;
};

export const searchApi: (query: string) => Promise<AxiosResponse<searchResponseType>> = query => {
    return Axios.get<searchResponseType>(`${socialsApi}search/?q=${query}`);
};

export const getPostById: (pk: pkType) => Promise<AxiosResponse<postType>> = pk => {
    return Axios.get<Array<postType>>(getPostApi(pk)).then(res => ({ ...res, data: res.data[0] }));
};

export const scorePost: (pk: pkType, score: number) => Promise<AxiosResponse<scoreResponse>> = (pk, score) => {
    return Axios.put(scorePostApi(score), { id: pk });
};

// export type postsActionsTypes = { searchApi: typeof searchApi };

// export const postsActions = { searchApi };
