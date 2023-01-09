import React from 'react';
import { body } from '../store/action';
import { useSelector } from 'react-redux';

const Research = () => {
    const dataOrigine = useSelector((state) => state.dataOrigine);
    const filterData = (data, value) => {
        return data.filter(d => Object.values(d).some(valueData => valueData && valueData.toString().includes(value.toLowerCase())));
    }

    const searchBanner = (value, data) => {
        if(!data) return
        //retourne le resultat dans le store redux grâce à l'action body
        body(filterData(data, value));
    }

    return (
        <label>Search :
            <input onChange={(e) => searchBanner(e.target.value, dataOrigine)} type="search" id="search"></input>
        </label>
    )
}

export default Research