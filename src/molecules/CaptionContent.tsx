import React from "react";
import { Link } from "react-router-dom";

import { postType } from "templates/post/postActions";
import { postPath } from "api/postApi";
import Image from "atoms/Image";
import Caption from "atoms/Caption";

type captionContentProps = {
    post: postType;
    link?: boolean;
};

const CaptionContent: React.FC<captionContentProps> = ({ post, link = false }) => {
    const RenderContent = () => {
        return (
            <div className='w-full pb-6'>
                {post.image && <Image src={post.image} />}
                <Caption text={post.text} />
            </div>
        );
    };

    return link ? (
        <Link to={postPath(post.id)} className='w-full cursor-pointer'>
            <RenderContent />
        </Link>
    ) : (
        <RenderContent />
    );
};
export default CaptionContent;
