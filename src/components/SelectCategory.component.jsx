import React, { useState } from 'react'
import arrowDown from './down-arrow.png'
import PageInfoComponent from './PageInfo.component'

const SelectCategory = ({clickCategory, isFavoriteMode}) => {
  const [showMenu, setShowMenu] = useState(false)
  const [displayCategory, setDisplayCategory] = useState("展覽")

  var CategoryTypes = {
    音樂: 1,
    戲劇: 2,
    舞蹈: 3,
    親子: 4,
    獨立音樂: 5,
    展覽: 6,
    講座: 7,
    電影: 8,
    綜藝: 11,
    競賽: 13,
    徵選: 14,
    其他: 15,
    演唱會: 17,
    研習課程: 19,
  }

  var handleClickArrow = () => {
    setShowMenu(!showMenu)
  }

  var handleClickCategory = (e,clickNumber) =>{
    setDisplayCategory(e.currentTarget.innerText);
    clickCategory(clickNumber)
  }

  return (
    <div className="selectCategory" onClick={()=>{ handleClickArrow()}}>
      <div className="word">
        <img
          src={arrowDown}
          alt=""
        />
        <span>選擇類別．{displayCategory}｜</span>
      </div>
      <PageInfoComponent isFavoriteMode={isFavoriteMode}/>
      {showMenu ? 
        <div className="categoryMenu">
        {Object.keys(CategoryTypes).map((category,index)=>{
            return <div key={index} onClick={(e)=>{handleClickCategory(e,CategoryTypes[category])}}>{category}</div>
        })}
        </div> : null
      }
    </div>
  )
}

export default SelectCategory
