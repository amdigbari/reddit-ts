import React from "react";
import { Link } from "react-router-dom";

type itemCountAndLinkProps = {
    path?: string;
    text: string;
    count: number;
};

const ItemCountAndLink: React.FC<itemCountAndLinkProps> = ({ text, count, path }) => {
    const Render: React.FC<{}> = () => {
        return (
            <p className='font-normal text-gray-700'>
                <span className='text-red-600'>{count}</span> {text}
            </p>
        );
    };

    return path ? (
        <Link to={path}>
            <Render />
        </Link>
    ) : (
        <Render />
    );
};
export default ItemCountAndLink;
