import React, { DOMAttributes } from "react";

export type changeFollowType = () => void;

type followButtonProps = {
    follow: boolean;
    changeFollow: changeFollowType;
};

const FollowButton: React.FC<followButtonProps> = ({ follow, changeFollow }) => {
    const clickHandler: DOMAttributes<HTMLButtonElement>["onClick"] = () => {
        changeFollow();
    };

    return (
        <button
            className={`w-32 rounded-full h-8 flex items-center justify-center border border-red-400 transition-colors duration-200 focus:outline-none ${
                follow ? "bg-red-400 text-white" : "bg-transparent text-red-400"
            } hover:bg-red-400 hover:text-white cursor-pointer`}
            onClick={clickHandler}>
            <span className='font-normal'>{follow ? "UnFollow" : "Follow"}</span>
        </button>
    );
};
export default FollowButton;
