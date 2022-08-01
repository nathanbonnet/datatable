import React from 'react';
import { useSelector } from 'react-redux';

const DataNumber = (props) => {
    let numberEntries = useSelector((state) => state.result);
    let dataLength = useSelector((state) => state.dataNumber);
    return (
        <span className="show">Showing 1 to {numberEntries} of {dataLength} entries</span>
    )
}

export default DataNumber;