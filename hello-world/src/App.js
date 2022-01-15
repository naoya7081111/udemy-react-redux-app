import React, { Component } from "react";
// import PropTypes from "prop-types";

// function App() {
//   const dom = <h1>Hi!</h1>;
//   const greeting = "Hi!, TOM";

//   const profiles = [
//     {name: "Taro", age:10},
//     {name:"Hanako", age:5},
//     {name:"NoName"}
//   ]

//   return dom
//   return (
//     <>
//       {/* <h1 className="who">Hello World!!</h1>
//       <h2>{greeting}</h2> 
//       <label htmlFor="bar">bar</label>
//       <input type="text" id='bar' onChange={ () => console.log("yeah!") }/> */}
//       {profiles.map((profile, index) => {
//         return <User name={profile.name} age={profile.age} key={index} />
//       })}
//           </>
//   );

// }

// User.defaultProps = {
//   age: 1
// }

// const User = (props) => {  
//   return (
//     <>
//       <div>I am {props.name}, and {props.age} years old!</div>
//     </>
//   )
// }

// User.propTypes = {
//   name: PropTypes.string.isRequired,
//   age: PropTypes.number
// }

// function App() {
//   return React.createElement(
//     "div",
//     null,
//     "Hello World!!"
//   );
// }


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
