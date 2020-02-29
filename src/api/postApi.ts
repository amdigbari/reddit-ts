import { socialsApi } from "api/baseApi";
export const postApi = `${socialsApi}post/`;

export const getPostApi: (pk: string | number) => string = pk => `${postApi}?post_id=${pk}`;
