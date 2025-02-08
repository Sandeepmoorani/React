

// function App() {
//   return (
//     <div>
//       <h1>Hello, React! 🚀</h1>
//       <p>This is my first React app.</p>
//     </div>
//   );
// }

// export default App;

// function App(){
//   const nm = "React developer"
//   const isLoggedIn= false

//   return(
//     <>
//     <h1>Hello , {nm}</h1>
//     <p>{isLoggedIn ? "Welcome Back" : "Please Log in "}</p>
//     </>
//   );
  
// }
// export default App

// function App(){
//   return(
//     <div>
//       <h1>sum of 2 + 3 is :{2+3}</h1>
//     </div>
//   );
// }

// export default App;


// ********************COMPONENTS*********************import Greeting from "./Greeting"; // Import Component

// import Greeting from "./components/Greetings";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// function App() {
//   return (
//     <div>
//       <Greeting />
//       <p>This is my first react App using multiple react components</p>
//       <Header/>
//       <Footer/>
//     </div>
//   );
// }

// export default App;



// **********Props*****************


// import User from "./components/User";

// function App() {
//   return (
//     <div>
//       <User name="John" />
//       <User name="Alice" />
//       <User name="Bob" />
//       <User rollno="15"/>
//     </div>
//   );
// }

// export default App;


// *************Hooks**********

//useState hook *********

import { useState } from "react";

// function App(){
//   const [count, setCount]=useState(0);

//   return(
//     <div>
//       <h1>Counter : {count}</h1>
//       <button onClick={()=>{
//         setCount(count+1)
//       }}>increment</button>
//     </div>
//   );
// }

// export default App;

function App(){

  const [name,setName]=useState("Sandeep");
  const[age,setAge]= useState(22)

  return(
    <div>
      <h2>Name : {name}</h2>
      <h3>Age: {age}</h3>
      <button onClick={
        ()=>{
          setAge(age+1)
        }
      }>Increase age</button>
      <button onClick={()=>{
        setName(name+"Moorani")
      }}>Add Surname</button>
      <button onClick={()=>{
        setName(prevCount => prevCount- "Moorani")
      }}>remove Surname</button>
    </div>
  )
}

export default App;