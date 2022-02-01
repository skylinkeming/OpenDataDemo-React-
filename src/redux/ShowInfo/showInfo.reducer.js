import ShowInfoTypes from './showInfo.types'

const INITIAL_STATE = {
  pageNumber: 1,
  collectionsByPageNumber:null,
  collections: null,
  ieFetching: false,
  errorMessage: undefined,
}

const showReducer = (state = INITIAL_STATE, action) => {
    debugger;
  switch (action.type) {
    case ShowInfoTypes.FETCH_SHOW_INFO_START:
      return {
        ...state,
        isFetching: true,
        errorMessage: undefined,
      }
    case ShowInfoTypes.FETCH_SHOW_INFO_SUCCESS:
      return {
        ...state,
        collections: action.payload,
        isFetching: false,
      }
    case ShowInfoTypes.FETCH_SHOW_INFO_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      }
    case ShowInfoTypes.SELECT_BY_PAGE_NUMBER:
      return {
        ...state,
        pageNumber: action.payload,
        collectionsByPageNumber: state.collections.slice(action.payload*40-1, (action.payload*40+39)),
        isFetching: false,
        errorMessage: null,
      }
    
    default: {
      return state
    }
  }
}

export default showReducer
