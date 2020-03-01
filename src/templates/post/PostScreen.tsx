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

    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <div className='container h-screen flex flex-col items-center pt-6'>{post && <PostCard post={post} />}</div>
        </div>
    );
};
export default PostScreen;
