import React from "react";

import AvatarAndName from "molecules/AvatarAndName";
import { channelPath } from "api/channelApi";
import FollowButton, { changeFollowType } from "atoms/FollowButton";
import { useToggle } from "app/customHooks";
import { profileType, changeUserFollowStatus } from "templates/profile/profileActions";
import { useSelector } from "react-redux";
import { RootStateType } from "app/rootReducer";
import OutlineButton from "atoms/OutlineButton";

type profileCardProps = {
    user: profileType;
    link?: boolean;
    className?: string;
};

const ProfileCard: React.FC<profileCardProps> = ({ user, link = false, className = "" }) => {
    let [follow, toggleFollow] = useToggle(user.follow);

    let loginUser = useSelector<RootStateType, Partial<profileType>>(state => state.loginUser);

    const changeFollow: changeFollowType = () => {
        changeUserFollowStatus(user.id, !follow).then(() => {
            toggleFollow();
        });
    };

    return (
        <div className={`w-full flex items-center justify-between ${className}`}>
            <AvatarAndName src={user.picture} name={user.username} link={link} path={channelPath(user.id)} />

            {loginUser.username === user.username ? (
                <OutlineButton text='Edit Profile' />
            ) : (
                <FollowButton follow={follow} changeFollow={changeFollow} />
            )}
        </div>
    );
};
export default ProfileCard;
