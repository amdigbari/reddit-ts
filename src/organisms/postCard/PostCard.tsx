import React from "react";

import { postType, scorePost } from "templates/post/postActions";
import CaptionContent from "molecules/CaptionContent";
import ScoreAndDate from "molecules/ScoreAndDate";
import { setScoreType } from "atoms/Score";
import ChannelCard from "organisms/channelCard/ChannelCard";
import Divider from "atoms/Divider";

type postCardProps = {
    post: postType;
    link?: boolean;
    className?: string;
};

const PostCard: React.FC<postCardProps> = ({ post, link = false, className = "" }) => {
    const setScore: setScoreType = score => {
        scorePost(post.id, score);
    };

    return (
        <div className={`w-full max-w-2xl border border-gray-300 rounded bg-white px-6 pt-6 ${className}`}>
            {post.channel && (
                <>
                    <ChannelCard channel={post.channel} link />
                    <Divider />
                </>
            )}
            {/* <div> TODO: header => channel and author </div> */}
            <CaptionContent post={post} link={link} />

            <ScoreAndDate
                score={post.like}
                feedbacks={post.no_feedbacks}
                createDate={post.create_time}
                setScore={setScore}
            />
        </div>
    );
};
export default PostCard;
