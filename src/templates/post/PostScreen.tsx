import React from "react";
import { useParams, RouteChildrenProps } from "react-router-dom";

import { postType, getPostById } from "./postActions";
import PostCard from "organisms/postCard/PostCard";

type postScreenParamsType = {
    pk: string;
};

type postScreenProps = RouteChildrenProps<postScreenParamsType>;

const PostScreen: React.FC<postScreenProps> = () => {
    let [post, setPost] = React.useState<postType>();

    const { pk: postPk } = useParams<postScreenParamsType>();

    React.useEffect(() => {
        postPk && getPostById(postPk).then(res => setPost(res.data));
    }, [postPk]);

    return post ? <PostCard post={post} /> : null;
};
export default PostScreen;
