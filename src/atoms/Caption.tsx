import React from "react";

type captionProps = {
    text: string;
};

const Caption: React.FC<captionProps> = ({ text }) => {
    return <p className='text-justify w-full font-normal text-gray-800'>{text}</p>;
};
export default Caption;
