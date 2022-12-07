// import logo from "./logo.svg";
// import './App.css';
// import User from './User';
// import UserClass from './User';
// import React, { Component } from "react";
// // import {User} from './User';//without default in in app we are exporting user
// function App() {
//   function cwithinc(){
//     return(
//       <h2>I am example of component within component</h2>
//     )
//   }
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>React started</h1>
//       </header>
//       <User/>
//       <User/>
//       <User/>
//       <User/>
//       <UserClass/>
//       <Userinsamefile/>
//       <Use/>
//       {cwithinc()}
//       <cwithinc/>
//     </div>
//   );
// }

// function Userinsamefile()
// {

//   return(
//     <h1>"I am example of same file </h1>
//   )

// }

//  class Use extends Component {
//   render() {
//     return(
//       <h1>I am exapmle of class component IN SAME FILE</h1>

//       )
//    }
// }

// import Jsx from "./Jsx";

// function App()
// {
//   return(
//     <div className='App'>
//       <h2>
//         Jsx!
//       </h2>
//       <Jsx/>
//     </div>
//   );
// }

//click event and sfunction

// alert("hello");
// function App()
// {
//   let data="Jyoti Kuamri";
//   function Apple()
//   {

//       // alert("click event initiated")
//       data="peter";
//       alert(data);

//   }
//   return(
//     <div className='App'>
//       <h2>{data}</h2>
//       {/* <button onClick={Apple()}>Click me</button> */}
//       <button onClick={Apple}>Click me</button>//now alert will initiated when you click onclick me
//       {/* <button onClick={()=>alert("hello after clicking on cck me")}>Click Me</button>//any function apple can be called with arroe function
//       */}
//     </div>
//   )
// }

//States in Javascript

// import States from './States';

// function App()
// {

//  let data="Jyogi"
//  function UpdateData1()
//   {
//       data="Kumari";
//       alert(data);
//   }
//   console.warn("_+_+_+_++_++_+_+_+__++_+_+_+_++")//signifyies that data has been send
//   return(
//     <div className='App'>
//       <h1>States in REACT</h1>
//       <h2>{data}</h2>
//       <button onClick={UpdateData1}>Update Data</button>
//       <States/>
//       <Component/>
//     </div>
//   )
// }

//states in classs component
import React, { Component } from "react";
class App extends Component {
  constructor() {
    super();
    this.state = {
      data: "Anil",
    };
  }
  render() {
    return (
      <div className="App">
        <h1>Hello states class component{this.state.data}</h1>
      </div>
    );
  }
}
export default App;
