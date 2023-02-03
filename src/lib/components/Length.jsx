import React from 'react';
import { itemPerPage } from '../store/action';
import { useSelector } from 'react-redux';

const changeLength = () => {
    itemPerPage(document.getElementById('show').value)
}

const Length = () => {
    const length = useSelector((state) => state.itemPerPage);
    
    return (
        <label htmlFor="show">Show
            <select defaultValue={length} onChange={() => changeLength()} name="show" id="show">
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </select>
            entries
        </label>
    )
}

export default Length;