import React from "react";

import logo from "atoms/assets/logo.svg";

import { RouteComponentProps } from "react-router-dom";
import SearchBar from "atoms/searchbar/Searchbar";
import { searchBarProps } from "../../atoms/searchbar/Searchbar";
import { searchApi } from "../post/postActions";

type mapStateType = {};

const HomeScreenPage: React.FC<mapStateType & RouteComponentProps> = React.memo(() => {
    const search: searchBarProps["search"] = query => {
        searchApi(query).then(res => console.log(res.data));
    };

    return (
        <div className='w-full h-screen flex flex-col overflow-hidden'>
            <div className='w-full flex items-center justify-between shadow px-4'>
                <img src={logo} alt='logo' className='w-16 h-16 rounded-full' />

                <div className='flex-1 px-4 flex items-end justify-center'>
                    <div className='relative w-4/5 md:w-3/5 max-w-lg'>
                        <SearchBar search={search} />
                    </div>
                </div>

                <img src={logo} alt='logo' className='w-16 h-16 rounded-full' />
            </div>
        </div>
    );
});

export default HomeScreenPage;
