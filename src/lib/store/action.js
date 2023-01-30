import { store } from './index'

export const pageSelected = (page) => {
    store.dispatch({type: 'PAGE', page: page})
}
export const save = (sources) => {
    store.dispatch({type: 'SAVE', sources: sources})
}

export const itemPerPage = (itemPerPage) => {
    store.dispatch({type: 'ITEM_PER_PAGE', itemPerPage: itemPerPage})
}

export const search = (search, page) => {
    store.dispatch({type: 'SEARCH', search: search, page: page})
}
export const order = (order, columnFilter) => {
    store.dispatch({type: 'ORDER', order: order, name: columnFilter})
}