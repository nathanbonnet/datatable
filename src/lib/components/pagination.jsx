import React from 'react';
import { pageSelected } from '../store/action';
import { useSelector } from 'react-redux';

const Pagination = () => {
    let dataLength = useSelector((state) => state.dataNumber);
    let numberResults = useSelector((state) => state.result);
    let numberOfPage = Math.ceil(dataLength / numberResults)
    let buttonArray = new Array(numberOfPage);
    if(buttonArray.length) {
        return (
            <>
                <span>Prévious</span>
                {/* fill(null) permet de mettre la valeur (null) autant de fois qu'il y a de buttonArray.length dans 
                le tableau pour pouvoir ensuite faire un map dessus */}
                {buttonArray.fill(null).map((v, k) => {
                    return (
                        <button onClick={() => pageSelected(k + 1)}>{k + 1}</button>
                    )
                })}
                <span>Next</span>
            </>
        )
    }
}

export default Pagination;