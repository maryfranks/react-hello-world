// bring in React and Component from React

import React, {Component} from 'react';

// define our Hello component
class Hello extends Component {
  //what should happen when the component is first created
  constructor (props) {
    super()
    this.state = {
      moodPoints: 1
    }
  }
  // what should the component render?
  render () {
    // make sure to return some UI
    return (
      <div>
      <h1>Hello {this.props.name}!</h1>
      <h3>You are {this.props.age} years old.</h3>
      <p>You love: {this.props.animals[2]}</p>
      <p>You are this happy: {this.state.moodPoints}</p>
      </div>
    )
  }
}

export default Hello
