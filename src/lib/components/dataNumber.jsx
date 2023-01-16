import React from 'react';
import { useSelector } from 'react-redux';

const DataNumber = () => {
    let numberEntries = useSelector((state) => state.itemPerPage);
    let dataLength = useSelector((state) => state.sources.length);
    return (
        <span className="show">Showing 1 to {numberEntries} of {dataLength} entries</span>
    )
}

export default DataNumber;