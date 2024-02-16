// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => {
        console.log(`previous state id${prevState.count}`)
        return {count: prevState.count + 10}
      })
    }
  }

  onApplyBreak = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => {
        console.log(`previous state id${prevState.count}`)
        return {count: prevState.count - 10}
      })
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
          className="img"
          alt="speedometer"
        />
        <h1 className="speed">Speed is {count}mph</h1>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="">
          <button
            type="button"
            className="button button1"
            onClick={this.onIncrement}
          >
            Accelerate
          </button>
          <button
            type="button"
            className="button button2"
            onClick={this.onApplyBreak}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
