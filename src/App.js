import React from 'react'
import './App.css'
import ShowInfoPageComponent from './components/ShowInfoPage.component'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      categoryNumber:6
    }
  }

  componentDidMount=()=>{
    // var _baseApiUrl = 'https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=';
    // return fetch(_baseApiUrl + this.state.categoryNumber, {
    //   method: "GET",
    // }).then(result => {
    //     return result.json();
    // }).then((resultList) => {
    //     // _resultList = resultList;
    //     // renderPageList(resultList);
    //     // return resultList.slice(0, _pageSize);
    // });
  }

  render() {
    return (
      <div className="App">
        <ShowInfoPageComponent/>
      </div>
    )
  }
}

export default App
