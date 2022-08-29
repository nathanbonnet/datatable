import React, { useEffect } from 'react';
import information from './information';
import PropTypes from 'prop-types';
import { dataNumber, body } from '../store/action';
import { useSelector } from 'react-redux';
import { order } from '../store/action';

const Body = (props) => {
    let sources = useSelector((state) => state.sources);
    const page = useSelector((state) => state.page)
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

    useEffect(() => {
        sortFunction(sources, columnFilter)
    }, []);

    let numberOfResult = useSelector((state) => state.result);
    const datas = information(sources, numberOfResult, page);
    dataNumber(sources.length);
    return (
        datas.length ?
            datas.map(data => {
                return (
                    <tr>
                        {props.columns && Object.keys(props.columns).map(column => {
                            return (
                                <td>{data[column]}</td>
                            )
                        })}
                    </tr>
                )
            })
        : <p>Aucun élément trouvé</p>
    )
}

Body.prototype = {
    columns: PropTypes.object,
}

export default Body;