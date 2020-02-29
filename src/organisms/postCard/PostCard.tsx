import React from "react";

import { postType } from "templates/post/postActions";
import CaptionContent from "molecules/CaptionContent";
import ScoreAndDate from "molecules/ScoreAndDate";
import { setScoreType } from "../../atoms/Score";

type postCardProps = {
    post: postType;
    link?: boolean;
};

type postCardType = {
    [propName: string]: any;
};

const PostCard: React.FC<postCardProps> = ({ post, link = false }) => {
    const setScore: setScoreType<postCardType> = score => {
        console.log(score);
        return {};
    };

    return (
        <div className='w-full max-w-2xl border border-gray-300 rounded bg-white px-6 pt-6'>
            {/* <div> TODO: header => channel </div> */}
            <CaptionContent post={post} link={link} />

            <ScoreAndDate<postCardType>
                score={post.like}
                feedbacks={post.no_feedbacks}
                createDate={post.create_time}
                setScore={setScore}
            />
        </div>
    );
};
export default PostCard;
