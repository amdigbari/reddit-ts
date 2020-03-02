import { pkType } from "templates/post/postActions";
import { socialsApi, accountsApi } from "./baseApi";

export const channelPath: (pk?: pkType) => string = pk => `/channels/${pk || ":pk"}/`;

export const channelsApi: string = `${socialsApi}channel/`;

export const getChannelApi: (pk: pkType) => string = pk => `${channelsApi}?id=${pk}`;

export const followChannelApi: (pk: pkType, follow: boolean) => string = (pk, follow) =>
    `${accountsApi}follow/${pk}/channel/${follow ? "" : "?action=unfollow"}`;
