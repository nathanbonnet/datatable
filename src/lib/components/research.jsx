import React from 'react';
import { search } from '../store/action';
import { useSelector } from 'react-redux';

const Research = () => {
    const page = useSelector((state) => state.page);

    return (
        <label>Search :
            <input onChange={(e) => search(e.target.value, page)} type="search" id="search"></input>
        </label>
    )
}

export default Research