import './index.css'
import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  onClickGenerate = () => {
    this.setState({
      randomNumber: Math.floor(Math.random() * 101),
    })
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="bg-container">
        <div className="random-number-generator">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="button"
            onClick={this.onClickGenerate}
          >
            Generate
          </button>
          <p className="random-number-display">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
