const information = (dataStorage, numberOfResult, page) => {
    if(dataStorage === null) return
    return dataStorage.slice((page - 1) * numberOfResult, page * numberOfResult)
}

export default information;