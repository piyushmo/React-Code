import { Component } from 'react';
import './App.css';

// ------ Hai aahe Function base components  ---------------

//import ConditionalRendering from './components/ConditionalRendering';
//import { useState } from 'react';
//import UsedOfProps from './components/Props';
// import React {useState} from 'react';
// import UsedOfProps from './components/Props';
// import States from './components/States';
//import Counter from './components/Counter';
//import Destructuring from './components/Destructuring';
//import Destructuring from './components/destructuringPropsStates';

//import Parent from './components/Parent';
//import EventHandlers from './components/EventHandlers';
//import Football from './components/reactEvent';
//import EventBinding from './components/EventBinding';
//import EventBind from './components/EvengBind';
// import Parent from './components/method-as-props/Parent';
// import List from './components/list-rendering/List';
// import Employees from './components/list-rendering/Employee';
// import Login from './FromValidation/Login';
 //import StyleSheet from './components/Styling/StyleSheet';
import Inline from './components/Styling/Inline';
import './appStyles.css'
import  styles from './components/Styling/appStyle.module.css'

function App(){
  return(

    // <States/>
    // <Counter/>
    <div className='App'>
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>

      <Inline/>
      {/* <StyleSheet/> */}
    {/* <Destructuring name='Piyush' compName='IT'/> */}
    {/* <Destructuring name='Piyush' job='IT' title='BE' /> */}
    {/* <EventHandlers/> */}
    {/* <Football/> */}
    {/* <EventBinding/> */}
    {/* <EventBind/> */}
    {/* <Parent/> */}
    {/* // <List/>
    // <Employees/> */}
    {/* <Login/> */}
    {/* <Parent/> */}

    </div>
  )
}
export default App;

// function App() {
//   const name ='Piyush'
//   return (
//     <div className="App">
      
//       <h2>I am {name}</h2>
//       <h2>{5+5}</h2>
//       <h1>Hello World</h1>
//       <p>Paragraph</p>
//       <Greet/>
//       {/* <ConditionalRendering/> */}
//       <UsedOfProps/>
//     </div>
//   );
// }
// export default App;


//------props----used------
// function App(){
//   return (
//     <div>
//     <UsedOfProps name ='Anup' />
//     <UsedOfProps name ='Vivek' Class='5PM'/>
//     <UsedOfProps name ='Piyush' Class='5PM'/>
//     </div>
//   );
// }
// export default App;



//------------------ Hooks----------------------------
// function App() {
//   const [data, setData]= useState('Nobel')
//   return(
//     <div>
//       <h1>StudentList For {data}</h1>
//        <button type="button" onClick={() => setData("Piyush")} >Update Piyush</button>
//        <button type="button" onClick={() => setData("Kiran")} >Update Kiran</button>
//        <button type="button" onClick={() => setData("Tushar")} >Update Tushar</button>
//        <button type="button" onClick={() => setData("Bhushan")} >Update Bhushan</button>
//     </div>
//   );
// }
// export default App


//--------------------------------Hooks--------------------
// function App() {
//   const [color, setColor] = useState("Pink");
    
//   return (
//     <div>
//       <h1>My favorite color is {color}!</h1>
//       <button type="button" onClick={() => setColor("blue")} >Blue</button>
//       <button type="button" onClick={() => setColor("red")} >Red</button>
//       <button type="button" onClick={() => setColor("pink")} >Pink</button>
//       <button type="button" onClick={() => setColor("green")} >Green</button>
//     </div>
//   )
// }
// export default App



// ---------- Hai aahe Class Base Componente -----------
// import React from "react";

// class App extends React.Component{
//   render(){
//     return <h1>Hello World</h1>
//   }
// }
// export default App;

//--------The converted between a class base component---------
// class Greet extends React.Component{
//   render(){
//     return <h1>Good Morning</h1>
//   }
// }
// export default App;

