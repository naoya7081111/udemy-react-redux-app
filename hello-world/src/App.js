import React from "react";

function App() {
  const dom = <h1>Hi!</h1>;
  const greeting = "Hi!, TOM";

  // return dom
  return (
    <>
      <h1 className="who">Hello World!!</h1>
      <h2>{greeting}</h2> 
      <label htmlFor="bar">bar</label>
      <input type="text" id='bar' onChange={ () => console.log("yeah!") }/>
    </>
  );
}


// function App() {
//   return React.createElement(
//     "div",
//     null,
//     "Hello World!!"
//   );
// }

export default App;
