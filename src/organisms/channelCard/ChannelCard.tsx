import React from "react";

import { channelType, changeChannelFollowStatus } from "templates/channel/channelActions";
import AvatarAndName from "molecules/AvatarAndName";
import { channelPath } from "api/channelApi";
import FollowButton, { changeFollowType } from "atoms/FollowButton";
import { useToggle } from "app/customHooks";

type channelCardProps = {
    channel: channelType;
    link?: boolean;
    className?: string;
};

const ChannelCard: React.FC<channelCardProps> = ({ channel, link = false, className = "" }) => {
    let [follow, toggleFollow] = useToggle(channel.follow);

    const changeFollow: changeFollowType = () => {
        changeChannelFollowStatus(channel.id, !follow).then(() => {
            toggleFollow();
        });
    };

    return (
        <div className={`w-full flex items-center justify-between ${className}`}>
            <AvatarAndName src={channel.avatar} name={channel.name} link={link} path={channelPath(channel.id)} />

            <FollowButton follow={follow} changeFollow={changeFollow} />
        </div>
    );
};
export default ChannelCard;
