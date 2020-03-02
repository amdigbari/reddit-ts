import React from "react";
import { RouteChildrenProps, useParams } from "react-router-dom";

import ChannelCard from "organisms/channelCard/ChannelCard";
import FollowStatusSection from "molecules/FollowStatusSection";
import Divider from "atoms/Divider";
import TitleAndDescriptionSection from "molecules/TitleAndDescriptionSection";
import { profileType, getUserById } from "./profileActions";
import ProfileCard from "organisms/profileCard/ProfileCard";

type profileScreenParamsType = {
    pk: string;
};

type profileScreenProps = RouteChildrenProps<profileScreenParamsType>;

const ProfileScreen: React.FC<profileScreenProps> = () => {
    let [user, setUser] = React.useState<profileType>();

    const { pk: userPk } = useParams<profileScreenParamsType>();

    React.useEffect(() => {
        userPk && getUserById(userPk).then(res => setUser(res.data));
    }, [userPk]);

    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <div className='container h-screen flex flex-col items-center pt-6'>
                {user && (
                    <>
                        <div className='w-full max-w-2xl border border-gray-300 bg-white rounded px-4 py-3'>
                            <ProfileCard user={user} />

                            <Divider />

                            {user.bio?.length && <TitleAndDescriptionSection title='Bio' description={user.bio} />}

                            <Divider />

                            <FollowStatusSection
                                followersCount={user.no_followers as number}
                                postsCount={user.no_posts as number}
                                followingsCount={user.no_followings}
                            />
                        </div>

                        <div className='w-full max-w-2xl mt-5'>
                            {user.channels?.map(channel => (
                                <ChannelCard
                                    channel={channel}
                                    key={channel.id}
                                    className='mt-3 border border-gray-300 bg-white rounded px-4 py-3'
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
export default ProfileScreen;
