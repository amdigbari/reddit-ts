import { AxiosResponse } from "axios";

import { socialsApi } from "api/baseApi";
import Axios from "api/Axios";
import { profileType } from "templates/profile/profileActions";
import { channelType } from "templates/channel/channelActions";
import { commentType } from "templates/comment/commentActions";
import { getPostApi } from "api/postApi";

export type feedBackType = {
    likes: number;
    dislikes: number;
};

export type postType = {
    id: number;
    text: string;
    author: profileType;
    create_time: string;
    like: number;
    no_feedbacks: feedBackType;
    image?: string;
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

export const getPostById: (pk: string | number) => Promise<AxiosResponse<postType>> = pk => {
    return Axios.get<Array<postType>>(getPostApi(pk)).then(res => ({ ...res, data: res.data[0] }));
};

// export type postsActionsTypes = { searchApi: typeof searchApi };

// export const postsActions = { searchApi };
