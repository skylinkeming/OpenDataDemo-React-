
export const editFavoriteItem = (favoriteList, showInfo)=>{
    let targetShowInfo = favoriteList.find(favorite=>favorite.UID === showInfo.UID)
    targetShowInfo.note = showInfo.note;
    return favoriteList;
}