import React from "react";

function App() {
  const dom = <h1>Hi!</h1>;
  const greeting = "Hi!, TOM";

  const profiles = [
    {name: "Taro", age:"10"},
    {name:"Hanako", age:"5"},
    {name:"kanako"}
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

User.defaultProps = {
  age: 1
}


// function App() {
//   return React.createElement(
//     "div",
//     null,
//     "Hello World!!"
//   );
// }

export default App;
