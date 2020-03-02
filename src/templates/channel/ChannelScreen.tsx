import React from "react";
import { RouteChildrenProps, useParams } from "react-router-dom";

import { channelType, getChannelById } from "./channelActions";
import ChannelCard from "organisms/channelCard/ChannelCard";
import PostCard from "organisms/postCard/PostCard";
import FollowStatusSection from "molecules/FollowStatusSection";
import Divider from "atoms/Divider";
import TitleAndDescriptionSection from "molecules/TitleAndDescriptionSection";

type channelScreenParamsType = {
    pk: string;
};

type channelScreenProps = RouteChildrenProps<channelScreenParamsType>;

const ChannelScreen: React.FC<channelScreenProps> = () => {
    let [channel, setChannel] = React.useState<channelType>();

    const { pk: channelPk } = useParams<channelScreenParamsType>();

    React.useEffect(() => {
        channelPk && getChannelById(channelPk).then(res => setChannel(res.data));
    }, [channelPk]);

    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <div className='container h-screen flex flex-col items-center pt-6'>
                {channel && (
                    <>
                        <div className='w-full max-w-2xl border border-gray-300 bg-white rounded px-4 py-3'>
                            <ChannelCard channel={channel} />

                            <Divider />

                            {channel.rules.length && (
                                <TitleAndDescriptionSection title='Rules' description={channel.rules} />
                            )}

                            <Divider />

                            <FollowStatusSection
                                followersCount={channel.no_followers as number}
                                postsCount={channel.no_posts as number}
                            />
                        </div>

                        {channel.posts?.map(post => (
                            <PostCard post={post} className='mt-3' />
                        ))}
                    </>
                )}
            </div>
        </div>
    );
};
export default ChannelScreen;
