// function User() {//function and file name should be same functional component
//      return (
//        <div className="App">

//            <h1>Hello User</h1>//if more than 1 elemnt than wrap them in 1 tag totherwise it will give error
//            <h3>hello user2</h3>
//        </div>
//      );
//    }

//  export default User;//with export default user
// export function User() {   //this is without export default Usre
//   return (
//     <div className="App">

//         <h1>Hello User</h1>//if more than 1 elemnt than wrap them in 1 tag totherwise it will give error
//         <h3>hello user2</h3>
//     </div>
//   );
// }

// Class component

import React, { Component } from "react";
export default class UserClass extends Component {
  render() {
    return(
      <h1>I am exapmle of class component</h1>
    )
   }
}
