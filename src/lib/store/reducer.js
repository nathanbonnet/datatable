const initialState = {
    page: 1,
    result: 10,
    sources: {
      firstName: 'John',
    },
    dataNumber: 10,
    order: "asc",
    name: "firstName",
}


export const reducer = (state = initialState, action) => {
    if (action.type === "PAGE") {
      return {
        ...state,
        page: state.page = action.page
      };
    }
    if (action.type === "RESULT") {
      return {
        ...state,
        result: state.result = action.result
      };
    }
    if (action.type === "BODY") {
      return {
        ...state,
        sources: state.sources = action.sources
      };
    }
    if (action.type === "DATA_NUMBER") {
      return {
        ...state,
        dataNumber: state.dataNumber = action.dataNumber
      };
    }
    if (action.type === "ORDER") {
      return {
        ...state,
        order: state.order = action.order,
        name: state.name = action.name
      };
    }
    return state
}