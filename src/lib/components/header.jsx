import React from 'react';
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { order } from '../store/action';
import { body } from '../store/action';

const Header = (props) => {
    let sources = useSelector((state) => state.sources);
    let orderStore = useSelector((state) => state.order);
    let columnFilter = useSelector((state) => state.name);

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
            <th>
                <div className="blocFilter" onClick={() => props.name === columnFilter && sortFunction(sources, props.name)}>
                    {props.label}
                    {props.name === columnFilter ? 
                        orderStore === 'desc' ?
                            <FontAwesomeIcon id="sortIconUp" className="icon fa-sm" icon={faSortUp} fixedWidth />
                        :
                            <FontAwesomeIcon id="sortIconDown" className="icon fa-sm" icon={faSortDown} fixedWidth />
                    :
                        false
                    }
                </div>
            </th>
        </>
    )
}

Header.prototype = {
    label: PropTypes.string,
    name: PropTypes.string
}

export default Header;