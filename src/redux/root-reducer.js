import { combineReducers } from 'redux'

import showReducer from './ShowInfo/showInfo.reducer'
import favoriteInfoReducer from './FavoriteInfo/favoriteInfo.reducer';

const rootReducer = combineReducers({
    show:showReducer,
    favorite:favoriteInfoReducer
})

export default rootReducer;