import React from "react";

type imageProps = {
    src: string;
};

const Image: React.FC<imageProps> = ({ src }) => {
    return (
        <div className='w-full h-56 bg-gray-100 flex items-center justify-center mb-3 rounded overflow-hidden'>
            <img className='max-w-full max-h-full' src={src} alt='post_avatar' />
        </div>
    );
};
export default Image;
