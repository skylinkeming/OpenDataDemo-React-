import React, { useEffect, useState } from 'react'
import {
  fetchShowInfoStartAsync,
  selectByPageNumber,
} from '../redux/ShowInfo/showInfo.actions'
import { connect } from 'react-redux'
import ShowInfoCard from './ShowInfoCard.component'
import SelectCategory from './SelectCategory.component'

const ShowInfoPage = ({
  fetchShowInfoStart,
  isFetching,
  showInfoByPageNum,
  favoriteList,
}) => {
  var row1 = []
  var row2 = []
  var row3 = []
  var row4 = []

  useEffect(() => {
    fetchShowInfoStart(6)
  }, [fetchShowInfoStart])

  const [isFavoriteMode, setFavoriteMode] = useState(false)

  let divideTo4Rows = () => {
    if (!showInfoByPageNum) {
      return
    }
    var infoToShow = !isFavoriteMode ? showInfoByPageNum : favoriteList
    infoToShow.forEach((showInfo, index) => {
      if (index % 4 === 0) {
        row1.push(showInfo)
      }
      if (index % 4 === 1) {
        row2.push(showInfo)
      }
      if (index % 4 === 2) {
        row3.push(showInfo)
      }
      if (index % 4 === 3) {
        row4.push(showInfo)
      }
    })
  }
  divideTo4Rows()

  let mapRowToCards = (row) => {
    return row.map((showInfo, index) => {
      return <ShowInfoCard key={showInfo.UID} showInfo={showInfo} isFavoriteMode={isFavoriteMode} />
    })
  }

  let handleClickCategory = (cateNumber) => {
    setFavoriteMode(false)
    console.log(cateNumber)
    fetchShowInfoStart(cateNumber)
  }

  return (
    <div>
      <div className="navbar">
        <SelectCategory
          clickCategory={(categoryNumber) => {
            handleClickCategory(categoryNumber)
          }}
          isFavoriteMode={isFavoriteMode}
        />
        <div
          className="myFavorite"
          onClick={() => {
            setFavoriteMode(true)
          }}
        >
          我的最愛
        </div>
      </div>
      {!!showInfoByPageNum && !isFetching ? (
        <div className="container">
          <div className="col">{mapRowToCards(row1)}</div>
          <div className="col">{mapRowToCards(row2)}</div>
          <div className="col">{mapRowToCards(row3)}</div>
          <div className="col">{mapRowToCards(row4)}</div>
        </div>
      ) : (
        <div className="loader"></div>
      )}
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  fetchShowInfoStart: (categoryNumber) =>
    dispatch(fetchShowInfoStartAsync(categoryNumber)),
  selectByPageNumber: (pageNum) => dispatch(selectByPageNumber(pageNum)),
})

const mapStateToProps = (state) => {
  return {
    showInfos: state.show.collections,
    showInfoByPageNum: state.show.collectionsByPageNumber,
    isFetching: state.show.isFetching,
    pageNumber: state.show.pageNumber,
    favoriteList: state.favorite.favoriteList,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowInfoPage)
