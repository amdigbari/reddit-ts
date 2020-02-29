import React from "react";

import { postType } from "templates/post/postActions";

type postCardProps = {
    post: postType;
};

const PostCard: React.FC<postCardProps> = ({ post }) => {
    return <div>{Object.keys(post).join(" ")}</div>;
};
export default PostCard;
