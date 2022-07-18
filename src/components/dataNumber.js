import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const DataNumber = (props) => {
    let dataLength = useSelector((state) => state.dataNumber);
    return (
        <span className="show">Showing 1 to {props.numberEntries} of {dataLength} entries</span>
    )
}

DataNumber.prototype = {
    numberEntries: PropTypes.number,
    dataNumber: PropTypes.number,
}

export default DataNumber;