import React, { Component } from 'react';

class DelayedButton extends Component {

  render() {
    return (
      <button onClick={this.handleClick}>Delayed Button</button>
    )
  }

  handleClick = (event) => {
    event.persist()
    setTimeout(() => this.props.onDelayedClick(event), this.props.delay)
  }

}

export default DelayedButton
