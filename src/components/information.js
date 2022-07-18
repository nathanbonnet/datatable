const information = (dataStorage, numberOfResult, page) => {
    return dataStorage.slice((page - 1) * numberOfResult, page * numberOfResult)
}

export default information;