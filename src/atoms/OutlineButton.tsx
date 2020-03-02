import React, { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

type outlineButtonProps = {
    text: string;
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const OutlineButton: React.FC<outlineButtonProps> = ({ text, className = "", ...props }) => {
    return (
        <button
            className={`w-32 rounded-full h-8 flex items-center justify-center border border-red-400 transition-colors duration-200 focus:outline-none bg-transparent text-red-400 hover:bg-red-400 hover:text-white cursor-pointer ${className}`}
            {...props}>
            <span className='font-normal'>{text}</span>
        </button>
    );
};
export default OutlineButton;
