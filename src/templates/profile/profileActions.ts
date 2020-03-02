import { channelType } from "templates/channel/channelActions";
import { pkType } from "templates/post/postActions";
import { AxiosResponse } from "axios";
import Axios from "api/Axios";
import { getUserApi, changeUserFollowApi } from "api/profileApi";

export type profileType = {
    id: pkType;
    username: string;
    picture: string | null;
    follow: boolean;
    email?: string;
    phone?: string;
    city?: string;
    birth_date?: string;
    no_followings?: number;
    no_followers?: number;
    no_posts?: number;
    channels?: Array<channelType>;
    bio?: string;
};

export const getUserById: (pk: pkType) => Promise<AxiosResponse<profileType>> = pk => {
    return Axios.get<Array<profileType>>(getUserApi(pk)).then(res => ({ ...res, data: res.data[0] }));
};

export const changeUserFollowStatus: (pk: pkType, follow: boolean) => Promise<AxiosResponse<{}>> = (pk, follow) => {
    return Axios.put<{}>(changeUserFollowApi(pk, follow));
};
