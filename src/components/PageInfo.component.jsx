import React from 'react'
import { connect } from 'react-redux'
import { selectByPageNumber } from '../redux/ShowInfo/showInfo.actions'

class PageInfo extends React.Component {
  constructor({ showInfos, isFetching }) {
    super()
    this.state = {
      pageSize: 40,
    }
  }

  handleClickPageNumber = (e, pageNum) => {
    e.stopPropagation()
    document.querySelector('.current').classList.remove('current')
    e.currentTarget.classList.add('current')
    this.props.changePageNumber(pageNum)
  }

  render() {
    const { showInfos, isFavoriteMode } = this.props
    if (isFavoriteMode) {
      return (
        <div
          className="pageInfo"
          onClick={(e) => {
            e.stopPropagation()
          }}
        ></div>
      )
    }

    if (!!showInfos) {
      var pageNumber = showInfos.length / this.state.pageSize
    }
    var pageList = []
    for (var i = 1; i <= pageNumber; i++) {
      pageList.push(i)
    }

    return (
      <div
        className="pageInfo"
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        {pageList.map((pageNumber, index) => {
          return (
            <span
              key={index + 1}
              className={index === 0 ? 'pageNumber current' : 'pageNumber'}
              onClick={(e) => {
                this.handleClickPageNumber(e, pageNumber)
              }}
            >
              {pageNumber}
            </span>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    showInfos: state.show.collections,
    isFetching: state.show.isFetching,
  }
}

const mapDispatchToProps = (dispatch) => ({
  changePageNumber: (pageNum) => {
    dispatch(selectByPageNumber(pageNum))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(PageInfo)
