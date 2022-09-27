import './index.css'

const EmojiItem = props => {
  const {emojiDetails, getSecondTab} = props
  const {id, name, imageUrl} = emojiDetails

  const getSubmitFeedback = () => {
    getSecondTab(id)
  }

  return (
    <li className="emoji-button-container">
      <button className="button" type="button" onClick={getSubmitFeedback}>
        <img src={imageUrl} alt={name} className="emoji-image" />
        <p className="name">{name}</p>
      </button>
    </li>
  )
}

export default EmojiItem
