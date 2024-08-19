import {Component} from 'react'

import './index.css'

import SearchItem from '../SearchItem'

class SearchContainer extends Component {
  state = {
    search: '',
  }

  onChangeStatus = event => {
    const userInput = event.target.value
    this.setState({search: userInput})
  }

  render() {
    const {historyList} = this.props
    const {search} = this.state
    const newHistoryList = historyList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(search.toLowerCase()),
    )
    return (
      <div className="history-bg-search-container">
        <div className="history-search-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="none"
          />
          <div className="search-container">
            <button type="button">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="none"
              />
            </button>
            <input
              type="search"
              placeholder="Search History"
              onChange={this.onChangeStatus}
            />
          </div>
        </div>
        <ul className="history-container">
          {newHistoryList.map(eachItem => (
            <SearchItem eachHistorySearch={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default SearchContainer
