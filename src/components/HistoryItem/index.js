import './index.css'

const HistoryItem = props => {
  const {historyItem, deleteHistoryItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItem

  const onClickDelete = () => {
    deleteHistoryItem(id)
  }

  return (
    <li>
      <p className="time">{timeAccessed}</p>
      <div className="history-details-div">
        <img src={logoUrl} alt="domain logo" className="domain-logo" />
        <div className="domain-info-div">
          <h1 className="domain-title">{title}</h1>
          <p className="domain-url">{domainUrl}</p>
        </div>
        <div>
          <button type="button" onClick={onClickDelete} tesid="delete">
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
              className="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default HistoryItem
