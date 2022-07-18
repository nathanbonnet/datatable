import information from './information';
import PropTypes from 'prop-types';
import { dataNumber } from '../store/action';
import { useSelector } from 'react-redux';

const Body = (props) => {
    let sources = useSelector((state) => state.sources);
    const page = useSelector((state) => state.page)
    let numberOfResult = useSelector((state) => state.result);
    dataNumber(sources.length);
    const datas = information(sources, numberOfResult, page);
    return (
        !props.error ?
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
        : <p>Aucun élément trouvée</p>
    )
}

Body.prototype = {
    columns: PropTypes.object,
}

export default Body;