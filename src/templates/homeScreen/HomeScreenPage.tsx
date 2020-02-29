import React from "react";

import logo from "atoms/assets/logo.svg";

import { RouteComponentProps } from "react-router-dom";
import Searchbar from "atoms/Searchbar";
import { searchbarProps } from "../../atoms/Searchbar";
import { searchApi } from "../post/postActions";

const HomeScreenPage: React.FC<RouteComponentProps> = React.memo(() => {
    const search: searchbarProps["search"] = query => {
        searchApi(query).then(res => console.log(res.data));
    };

    return (
        <div className='w-full h-screen flex flex-col overflow-hidden'>
            <div className='w-full flex items-center justify-between shadow px-4'>
                <img src={logo} alt='logo' className='w-16 h-16 rounded-full' />

                <div className='flex-1 px-4 flex items-end justify-center'>
                    <div className='relative w-4/5 md:w-3/5 max-w-lg'>
                        <Searchbar search={search} />
                    </div>
                </div>

                <img src={logo} alt='logo' className='w-16 h-16 rounded-full' />
            </div>
        </div>
    );
});

export default HomeScreenPage;
