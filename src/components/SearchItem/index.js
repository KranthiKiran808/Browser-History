import './index.css'

const SearchItem = props => {
  const {eachHistorySearch} = props
  const {title, timeAccessed, logoUrl, domainUrl} = eachHistorySearch

  return (
    <li className="each-list-container">
      <p className="time">{timeAccessed}</p>
      <div className="each-list">
        <div className="each-item">
          <img src={logoUrl} alt="none" />
          <p>{title}</p>
          <p>{domainUrl}</p>
        </div>
        <button type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="none"
          />
        </button>
      </div>
    </li>
  )
}

export default SearchItem