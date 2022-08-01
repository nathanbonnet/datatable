import React from 'react';
import { result } from '../store/action';

const changeLength = () => {
    result(document.getElementById('show').value)
}

const Length = () => {
    return (
        <label for="show">Show
            <select onChange={() => changeLength()} name="show" id="show">
                {/* afficher les boutons seulement si il y a assez d'employer */}
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