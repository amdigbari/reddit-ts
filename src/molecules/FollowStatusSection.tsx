import React from "react";
import ItemCountAndLink from "atoms/ItemCountAndLink";

type followStatusSectionProps = {
    followersCount: number;
    postsCount: number;
    followingsCount?: number;
};

const FollowStatusSection: React.FC<followStatusSectionProps> = ({ followersCount, postsCount, followingsCount }) => {
    return (
        <div className='w-full flex items-center justify-between px-4'>
            <ItemCountAndLink text='followers' count={followersCount} />

            {followingsCount && <ItemCountAndLink text='followings' count={followingsCount} />}

            <ItemCountAndLink text='posts' count={postsCount} />
        </div>
    );
};
export default FollowStatusSection;
