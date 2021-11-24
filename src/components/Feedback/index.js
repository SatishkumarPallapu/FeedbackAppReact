// Write your React code here.

import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    isFeedBackGiven: false,
  }

  getTheThanksResponse = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="main-container">
        <div className="sub-container">
          <div className="thank-you-section">
            <img src={loveEmojiUrl} alt="love emoji" avatar="" />
            <h1>Thank You</h1>
            <p>
              We will use your feedback to improve our customer service support.
            </p>
          </div>
        </div>
      </div>
    )
  }

  updateState = () => {
    const {isFeedBackGiven} = this.state

    this.setState(prevState => ({isFeedBackGiven: !prevState.isFeedBackGiven}))
  }

  getTheEmojisSection = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="main-container">
        <div className="sub-container">
          <h1>How satisfied are you with our customer support performance?</h1>

          <ul className="lists-container">
            {emojis.map(eachResources => (
              <li key={eachResources.id} onClick={this.updateState}>
                <div className="emojis-container">
                  <img
                    src={eachResources.imageUrl}
                    alt={eachResources.name}
                    className=""
                  />
                  <p>{eachResources.name}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const {isFeedBackGiven} = this.state
    return (
      <div>
        {isFeedBackGiven
          ? this.getTheThanksResponse()
          : this.getTheEmojisSection()}
      </div>
    )
  }
}

export default Feedback
