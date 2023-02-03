const initialState = {
  page: 1,
  itemPerPage: 10,
  sources: [],
  data: [],
  order: "asc",
  name: "firstName",
  search: ""
}


function paginate(state) {
  let offset = (state.page - 1) * state.itemPerPage;

  let search = state.search
  let page = state.page
  
  const sourcesFiltered = state.sources.filter((item) => Object.values(item).some((value) => value && value.toString().toLowerCase().includes(state.search.toLowerCase())));
  const data = sourcesFiltered.slice(offset, offset + parseInt(state.itemPerPage));
  
  if (sourcesFiltered.length < offset) {
    offset = 0;
    state.page = 1;
  }
  
  return {
    ...state,
    data,
    offset,
    search,
    page,
    sourcesFiltered
  };
}

export const reducer = (state = initialState, action) => {
  if (action.type === "PAGE") {
    return paginate({...state, page: action.page});
  }
  if (action.type === "SEARCH") {
    return paginate({...state, search: action.search, page: action.page});
  }
  if (action.type === "ITEM_PER_PAGE") {
    return paginate({...state, itemPerPage: action.itemPerPage});
  }
  if (action.type === "SAVE") {
    return paginate({...state, sources: [...state.sources, ...action.sources]});
  }
  if (action.type === "ORDER") {
    if(action.order === 'asc') {
      state.sources.sort((a, b) => (a.firstName.toLowerCase() > b.firstName.toLowerCase()) ? 1 : -1);
    } else {
      state.sources.sort((a, b) => (a.firstName.toLowerCase() < b.firstName.toLowerCase()) ? 1 : -1);
    }
    return paginate({
      ...state,
      order: action.order,
      name: action.name,
      page: 1
    });
  }
  
  return state
}