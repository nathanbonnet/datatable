import { pageSelected } from '../store/action';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const Pagination = (props) => {
    let dataLength = useSelector((state) => state.dataNumber);
    let numberOfPage = Math.ceil(dataLength / props.numberResults)
    let buttonArray = new Array(numberOfPage);
    return (
        <>
            <span>Prévious</span>
            {buttonArray.fill(null).map((v, k) => {
                return (
                    <button onClick={() => pageSelected(k + 1)}>{k + 1}</button>
                )
            })}
            <span>Next</span>
        </>
    )
}

Pagination.prototype = {
    dataNumber: PropTypes.number,
    numberResults: PropTypes.number
}

export default Pagination;