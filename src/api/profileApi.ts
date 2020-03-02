import { pkType } from "templates/post/postActions";
import { accountsApi } from "./baseApi";

export const profilePath: (pk?: pkType) => string = pk => `/profiles/${pk || ":pk"}/`;

export const profileApi: string = `${accountsApi}profile/`;

export const getUserApi: (pk: pkType) => string = pk => `${profileApi}?id=${pk}`;

export const changeUserFollowApi: (pk: pkType, follow: boolean) => string = (pk, follow) =>
    `${accountsApi}follow/${pk}/user/${follow ? "" : "?action=unfollow"}`;
