import React from 'react';
import { search } from '../store/action';

const Research = () => {

    return (
        <label>Search :
            <input onChange={(e) => search(e.target.value)} type="search" id="search"></input>
        </label>
    )
}

export default Research