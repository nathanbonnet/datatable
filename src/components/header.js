import React, { useState } from 'react';
import { faSort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { order } from '../store/action';
import { body } from '../store/action';

const Header = (props) => {
    let sources = useSelector((state) => state.sources);
    let orderStore = useSelector((state) => state.order)
console.log(orderStore)
    const sortFunction = (sources, name) => {
        if(orderStore === 'asc') {
            sources.sort((a, b) => (a[name].toLowerCase() > b[name].toLowerCase()) ? 1 : -1);
            order('desc', name)
        }
        if(orderStore === 'desc') {
            sources.sort((a, b) => (a[name].toLowerCase() < b[name].toLowerCase()) ? 1 : -1);
            order('asc', name)
        }
        body([...sources])
    }
    

    return (
        <>
            <th onClick={() => sortFunction(sources, props.name)}>
                {props.label}
                <FontAwesomeIcon id="sortIcon" className="icon" icon={faSort} />
            </th>
        </>
    )
}

Header.prototype = {
    label: PropTypes.string,
    name: PropTypes.string
}

export default Header;