import React from "react";
import defaultAvatar from "atoms/assets/default_profile.png";

export type avatarProps = {
    src: string | null;
};

const Avatar: React.FC<avatarProps> = ({ src }) => {
    return (
        <div className='h-12 w-12 rounded-full overflow-hidden flex items-center justify-center border border-gray-400'>
            <img className='max-w-full max-h-full' src={src || defaultAvatar} alt='avatar' />
        </div>
    );
};
export default Avatar;
