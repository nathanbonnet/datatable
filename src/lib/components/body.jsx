import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { order } from '../store/action';
import { useSelector } from 'react-redux';

const Body = (props) => {
    let data = useSelector((state) => state.data);
    useEffect(() => {
        order()
    }, []);

    return (
        data && data.length ?
            data.map(data => {
                return (
                    <tr key={data}>
                        {props.columns && Object.keys(props.columns).map(column => {
                            return (
                                <td key={column}>{data[column]}</td>
                            )
                        })}
                    </tr>
                )
            })
        : 
            <tr>
                <th>
                    Aucun élément trouvé
                </th>
            </tr>
    )
}

Body.prototype = {
    columns: PropTypes.object,
}

export default Body;