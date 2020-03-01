import React from "react";
import { Link } from "react-router-dom";

import Avatar, { avatarProps } from "atoms/Avatar";
import Name, { nameProps } from "atoms/Name";

type avatarAndNameProps = { path?: string; link?: boolean } & avatarProps & nameProps;

const AvatarAndName: React.FC<avatarAndNameProps> = ({ src, name, path = "/", link = false }) => {
    const Render: React.FC<{}> = () => {
        return (
            <div className='flex items-center'>
                <Avatar src={src} />
                <Name name={name} className='ml-3' />
            </div>
        );
    };

    return link ? (
        <Link to={path}>
            <Render />
        </Link>
    ) : (
        <Render />
    );
};
export default AvatarAndName;
