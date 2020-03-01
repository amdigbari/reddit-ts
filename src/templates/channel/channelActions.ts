import { AxiosResponse } from "axios";

import { pkType, postType } from "templates/post/postActions";
import { profileType } from "templates/profile/profileActions";
import Axios from "api/Axios";
import { getChannelApi, followChannelApi } from "api/channelApi";

export type channelType = {
    id: pkType;
    name: string;
    admin: number;
    rules: string;
    avatar: string | null;
    follow: boolean;
    no_followers?: number;
    no_posts?: number;
    authors?: Array<profileType>;
    user_admin?: profileType;
    posts?: Array<postType>;
};

export const getChannelById: (pk: pkType) => Promise<AxiosResponse<channelType>> = pk => {
    return Axios.get<Array<channelType>>(getChannelApi(pk)).then(res => ({ ...res, data: res.data[0] }));
};

export const changeChannelFollowStatus: (pk: pkType, newStatus: boolean) => Promise<AxiosResponse<{}>> = (
    pk,
    newStatus,
) => {
    return Axios.put<{}>(followChannelApi(pk, newStatus));
};
