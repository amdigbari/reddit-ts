import { socialsApi } from "api/baseApi";
import { pkType } from "templates/post/postActions";

export const postPath: (pk?: pkType) => string = pk => `/posts/${pk || ":pk"}/`;

export const postApi = `${socialsApi}post/`;

export const getPostApi: (pk: pkType) => string = pk => `${postApi}?post_id=${pk}`;

export const scorePostApi: (score: number) => string = score => `${postApi}feedback/?like=${score}`;
