import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import './index.css'

class TextEditor extends Component {
  state = {text: '', bold: false, italic: false, underline: false}

  onChangeTextArea = event => {
    this.setState({text: event.target.value})
  }

  onClickBoldIcon = () => {
    this.setState(prevState => ({bold: !prevState.bold}))
  }

  onClickItalicIcon = () => {
    this.setState(prevState => ({italic: !prevState.italic}))
  }

  onClickUnderLineIcon = () => {
    this.setState(prevState => ({underline: !prevState.underline}))
  }

  render() {
    const {text, bold, italic, underline} = this.state
    const italicName = italic ? 'italic' : null
    const boldName = bold ? 'bold' : 'normal'
    const underlineName = underline ? 'underline' : 'none'
    const italicColor = italic ? '#faff00' : '#f1f5f9'
    const boldColor = bold ? '#faff00' : '#f1f5f9'
    const underlineColor = underline ? '#faff00' : '#f1f5f9'

    return (
      <div className="main-container">
        <div className="responsive-container">
          <div className="left-container">
            <h1 className="heading">Text Editor</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text-editor"
              className="text-editor-image"
            />
          </div>
          <div className="right-container">
            <ul className="header">
              <li>
                <button
                  onClick={this.onClickBoldIcon}
                  className="bold-button"
                  type="button"
                  data-testid="bold"
                  style={{color: boldColor}}
                >
                  {' '}
                  <VscBold />{' '}
                </button>
              </li>
              <li>
                <button
                  onClick={this.onClickItalicIcon}
                  className="italic-button"
                  type="button"
                  data-testid="italic"
                  style={{color: italicColor}}
                >
                  {' '}
                  <GoItalic />{' '}
                </button>
              </li>
              <li>
                <button
                  onClick={this.onClickUnderLineIcon}
                  className="under-button"
                  type="button"
                  data-testId="underline"
                  style={{color: underlineColor}}
                >
                  {' '}
                  <AiOutlineUnderline />{' '}
                </button>
              </li>
            </ul>
            <hr className="horizontal-line1" />
            <textarea
              value={text}
              rows="20"
              cols="50"
              className="text-input"
              onChange={this.onChangeTextArea}
              style={{
                fontWeight: boldName,
                textDecoration: underlineName,
                fontFamily: italicName,
              }}
            >
              {' '}
              {text}{' '}
            </textarea>
          </div>
        </div>
      </div>
    )
  }
}

export default TextEditor
