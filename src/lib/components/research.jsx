import React from 'react';
import { body } from '../store/action';

const Research = (props) => {
  
    const filterData = (data, value) => {
        return data.filter(d => Object.values(d).some(valueData => valueData && valueData.toString().includes(value.toLowerCase())));
    }

    const searchBanner = (value, data) => {
        if(!data) return
        body(filterData(data, value));
    }

    return (
        <label>Search :
            <input onChange={(e) => searchBanner(e.target.value, props.data)} type="search" id="search"></input>
        </label>
    )
}

export default Research