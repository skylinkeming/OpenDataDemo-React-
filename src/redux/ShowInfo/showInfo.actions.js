import ShowInfoTypes from "./showInfo.types";


var _baseApiUrl = 'https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=';


export const fetchShowInfoStart = ()=>({
    type:ShowInfoTypes.FETCH_SHOW_INFO_START
})

export const fetchShowInfoSuccess = (showInfo)=>({
    type:ShowInfoTypes.FETCH_SHOW_INFO_SUCCESS,
    payload:showInfo
})

export const fetchShowInfoFailure = (errorMessage)=>({
    type:ShowInfoTypes.FETCH_SHOW_INFO_FAILURE,
    payload:errorMessage
})

export const selectByPageNumber = (pageNumber) =>({
    type:ShowInfoTypes.SELECT_BY_PAGE_NUMBER,
    payload:pageNumber
})


export const fetchShowInfoStartAsync = (categoryNumber)=>{
  return dispatch =>{
        dispatch(fetchShowInfoStart());
        if(!categoryNumber){
            categoryNumber = 6;
        }
        fetch(_baseApiUrl + categoryNumber, {
            method: "GET",
        }).then(result => {
            return result.json();
        }).then((resultList) => {
            console.log(resultList);

            dispatch(fetchShowInfoSuccess(resultList))
            dispatch(selectByPageNumber(1))
        }).catch(error=>{
            dispatch(fetchShowInfoFailure(error.message))
        });

    }
}