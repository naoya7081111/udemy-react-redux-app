import React from "react";
import PropTypes from "prop-types";

function App() {
  const dom = <h1>Hi!</h1>;
  const greeting = "Hi!, TOM";

  const profiles = [
    {name: "Taro", age:10},
    {name:"Hanako", age:5},
    {name:"NoName"}
  ]

  // return dom
  return (
    <>
      {/* <h1 className="who">Hello World!!</h1>
      <h2>{greeting}</h2> 
      <label htmlFor="bar">bar</label>
      <input type="text" id='bar' onChange={ () => console.log("yeah!") }/> */}
      {profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index} />
      })}
          </>
  );
}

const User = (props) => {  
  return (
    <>
      <div>I am {props.name}, and {props.age} years old!</div>
    </>
  )
}

// User.defaultProps = {
//   age: 1
// }

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number
}

// function App() {
//   return React.createElement(
//     "div",
//     null,
//     "Hello World!!"
//   );
// }

export default App;
