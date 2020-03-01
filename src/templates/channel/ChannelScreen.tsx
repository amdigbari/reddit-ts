import React from "react";
import { RouteChildrenProps, useParams } from "react-router-dom";

import { channelType, getChannelById } from "./channelActions";
import ChannelCard from "organisms/channelCard/ChannelCard";

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
                    <ChannelCard channel={channel} className='border border-gray-300 bg-white rounded px-4 py-3' />
                )}
            </div>
        </div>
    );
};
export default ChannelScreen;
