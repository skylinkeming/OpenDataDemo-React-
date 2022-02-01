import { FavoriteInfoActionTypes } from "./favoriteInfo.types";

export const addToFavorite = (newItem)=>({
    type:FavoriteInfoActionTypes.ADD_TO_FAVORITE,
    payload: newItem
})

export const deleteFromFavorite = (deleteItem)=>({
    type:FavoriteInfoActionTypes.DELETE_FROM_FAVORITE,
    payload:deleteItem
})


export const editFavorite = (editItem) =>({
    type:FavoriteInfoActionTypes.EDIT_FAVORITE,
    payload:editItem
})