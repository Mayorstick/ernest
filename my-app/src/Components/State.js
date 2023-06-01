import React, { Component } from 'react'

 class State extends Component {
    state={
        message: "Thank you for Subscribing"
    }

    change=()=>{
        this.setState({
            message:"Thank u  we love u"
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.change}>Subscribe</button>
      </div>
    )
  }
}

export default State;
