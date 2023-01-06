const information = (dataStorage, numberOfResult, page) => {
    if(dataStorage === null) return
    // retourne la data en fonction de la page on l'on se trouve et du nombre d'element que l'on souhaite afficher
    return dataStorage.slice((page - 1) * numberOfResult, page * numberOfResult)
}

export default information;