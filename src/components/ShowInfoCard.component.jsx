import React from 'react'
import { connect } from 'react-redux'
import {
  addToFavorite,
  deleteFromFavorite,
  editFavorite,
} from '../redux/FavoriteInfo/favaoriteInfo.actions'

import star from '../star.png'
import star_n from '../star_n.png'
import edit_btn from '../edit.png'

class ShowInfoCard extends React.Component {
  constructor({ showInfo, favoriteList, isFavoriteMode, editFavorite }) {
    super()
    let favoriteUIDS = favoriteList.map((info) => info.UID)
    // console.log(favoriteUIDS);
    this.state = {
      isFavorite: favoriteUIDS.indexOf(showInfo.UID) >= 0,
      isFavoriteMode: isFavoriteMode,
      isEdit: false,
      noteInput: '',
    }
  }

  componentWillReceiveProps = ({ showInfo, favoriteList, isFavoriteMode }) => {
    //   let favoriteUIDS = favoriteList.map((info) => info.UID)
    this.setState({
      isFavoriteMode: isFavoriteMode,
    })
  }

  clickCard = (url) => {
    if (!url) {
      return
    }
    window.location.href = url
  }

  clickStar = (e) => {
    e.stopPropagation()
    const { showInfo, addToFavorite, removeFromFavorite } = this.props
    if (this.state.isFavorite) {
      removeFromFavorite(showInfo)
    } else {
      addToFavorite(showInfo)
    }
    this.setState({ isFavorite: !this.state.isFavorite })
  }

  clickEdit = (e) => {
    e.stopPropagation()
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (!e.target.value) {
        alert('請輸入內容！')
        return
      }
      var note = e.target.value

      const { showInfo, editFavorite } = this.props
      showInfo.note = note
      editFavorite(showInfo)
      alert('編輯備註成功！')
      this.setState({ isEdit: false })
    }
  }

  handleTextChange = (e) => {
    e.stopPropagation()
    this.setState({
      noteInput: e.target.value,
    })
  }

  render() {
    var { showInfo } = this.props
    return (
      <div
        className="card"
        onClick={() => {
          this.clickCard(showInfo.sourceWebPromote)
        }}
      >
        <div className="content">
          <div className="title">{showInfo.showInfo[0].locationName}</div>
          <div className="name">{showInfo.title}</div>
          {showInfo.imageUrl ? (
            <img src={showInfo.imageUrl} alt=""></img>
          ) : null}
          <div className="desc">{showInfo.descriptionFilterHtml}</div>
          <div className="notePart">
            <div className="bottom">
              {!!this.state.isFavoriteMode ? (
                <div
                  className="editBtn"
                  onClick={() => {
                    this.setState({
                      isEdit: !this.state.isEdit,
                    })
                  }}
                >
                  <img src={edit_btn} alt="編輯備註"></img>
                </div>
              ) : null}
              <div
                className="favoriteBtn"
                onClick={(e) => {
                  this.clickStar(e)
                }}
              >
                <img src={this.state.isFavorite ? star : star_n} alt=""></img>
              </div>
            </div>
            {this.state.isFavoriteMode && !!showInfo.note ? (
                <div className="note">
                  {!!showInfo.note ? showInfo.note : null}
                </div>
              ) : null}
            {this.state.isEdit ? (
              <div
                className="editNote"
                onClick={(e) => {
                  this.clickEdit(e)
                }}
              >
                <textarea
                  value={showInfo.note ? showInfo.note : this.state.noteInput}
                  onKeyPress={(e) => {
                    this.handleKeyPress(e)
                  }}
                  onChange={(e) => {
                    this.handleTextChange(e)
                  }}
                ></textarea>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}

var mapStateToProps = (state) => {
  return {
    favoriteList: state.favorite.favoriteList,
  }
}

var mapDispatchToProps = (dispatch) => {
  return {
    addToFavorite: (showInfo) => {
      dispatch(addToFavorite(showInfo))
    },
    removeFromFavorite: (showInfo) => {
      dispatch(deleteFromFavorite(showInfo))
    },
    editFavorite: (showInfo) => {
      dispatch(editFavorite(showInfo))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowInfoCard)
