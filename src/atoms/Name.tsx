import React, { DetailedHTMLProps, HTMLAttributes } from "react";

export type nameProps = {
    name: string;
} & DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;

const Name: React.FC<nameProps> = ({ name, className = "", ...props }) => {
    return (
        <p className={`font-normal text-gray-700 ${className}`} {...props}>
            {name}
        </p>
    );
};
export default Name;
