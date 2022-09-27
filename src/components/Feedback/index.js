import {Component} from 'react'
import EmojiItem from '../EmojiItem/index'

import './index.css'

class Feedback extends Component {
  state = {isSubmit: false}

  renderFirstFeedbackTab = () => {
    const {resources} = this.props
    const {emojis} = resources

    const getSecondTab = () => {
      this.setState({isSubmit: true})
    }

    return (
      <div className="bg-container">
        <h1 className="description">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emojis-container">
          {emojis.map(eachEmoji => (
            <EmojiItem
              key={eachEmoji.id}
              emojiDetails={eachEmoji}
              getSecondTab={getSecondTab}
            />
          ))}
        </ul>
      </div>
    )
  }

  renderSecondFeedbackTab = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="bg-container">
        <img src={loveEmojiUrl} alt=" love emoji" className="emoji-image" />
        <h1 className="heading">Thank you</h1>
        <p className="name">
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isSubmit} = this.state
    return (
      <div className="container">
        <div className="main-container">
          {isSubmit
            ? this.renderSecondFeedbackTab()
            : this.renderFirstFeedbackTab()}
        </div>
      </div>
    )
  }
}

export default Feedback
