import { FavoriteInfoActionTypes } from './favoriteInfo.types'
import { editFavoriteItem } from './favaoriteInfo.utils';

const INITIAL_STATE = {
  favoriteList: [],
  error: null,
}

const favoriteInfoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FavoriteInfoActionTypes.ADD_TO_FAVORITE: {
      debugger;
      return {
        favoriteList: [...state.favoriteList, action.payload],
        error: null,
      }
    }
    case FavoriteInfoActionTypes.DELETE_FROM_FAVORITE: {
      debugger;
      var newList = state.favoriteList.filter(
        (item) => item.UID !== action.payload.UID,
      ).slice();
      return {
        favoriteList: newList,
        error: null,
      }
    }
    case FavoriteInfoActionTypes.EDIT_FAVORITE: {
        // var newList = state.favoriteList
        return {
            favoriteList:editFavoriteItem(state.favoriteList, action.payload),
            error:null,
        }
    }
    default: {
        return state;
    }
  }
}

export default favoriteInfoReducer;
