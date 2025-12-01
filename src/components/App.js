
import React from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = React.useState("");
  return (
    <div>
      <label htmlFor="name">Enter your Name : </label>
      <br />
      <input type="text" placeholder="Enter your name" id="name" onChange={(e)=>setName(e.target.value)}/>
     {name && <p>Hello {name}!</p>}
    </div>
  )
}

export default App
