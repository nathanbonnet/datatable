import { store } from './index'

export const pageSelected = (page) => {
    store.dispatch({type: 'PAGE', page: page})
}

export const result = (result) => {
    store.dispatch({type: 'RESULT', result: result})
}

export const body = (sources) => {
    store.dispatch({type: 'BODY', sources: sources})
}

export const dataNumber = (dataNumber) => {
    store.dispatch({type: 'DATA_NUMBER', dataNumber: dataNumber})
}

export const order = (order, name) => {
    store.dispatch({type: 'ORDER', order: order, name: name})
}

