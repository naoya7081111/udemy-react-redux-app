import React, { Component } from "react";


const App = () => (<Counter></Counter>)

class Counter extends Component { 
  constructor(props) {
    super(props)
    console.log(this.state);
    this.state = { count: 0 };
  }

  render() {
    const onClickAdd = () => {
      this.setState({ count: this.state.count + 1 })
    }  
    const onClickReduce = () => {
      this.state.count !== 0 && this.setState({ count: this.state.count - 1 })
    }  

    return (
      // React.Fragmentは<></>と同じ
      <React.Fragment>
        <div>count: { this.state.count }</div>
        <button onClick={onClickAdd}>+1</button>
        <button onClick={onClickReduce} >-1</button>
      </React.Fragment>
    )
  }
}


export default App;
