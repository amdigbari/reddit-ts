import React from "react";

import defaultAvatar from "atoms/assets/default_profile.png";
import { baseUrl } from "api/baseApi";

export type avatarProps = {
    src: string | null;
};

const Avatar: React.FC<avatarProps> = ({ src }) => {
    let [mainSrc, setSrc] = React.useState<string>();

    React.useLayoutEffect(() => {
        let img = new Image();
        img.src = (!src?.match(/^http/) && src?.match(/\/image\//) ? `${baseUrl}${src}` : src) || defaultAvatar;

        img.onload = () => {
            setSrc(img.src);
        };
    }, [src]);

    return (
        <div className='h-12 w-12 rounded-full overflow-hidden flex items-center justify-center border border-gray-400'>
            <img className='max-w-full max-h-full' src={mainSrc} alt='avatar' />
        </div>
    );
};
export default Avatar;
