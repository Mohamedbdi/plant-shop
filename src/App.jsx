// // import React from "react";
// // import Header from "./Header"; 
// // import './style.css'

// import { useState } from "react"

// // function App(){
  
// //   return (
// //     <>
// //   <Header name="Mohamed hareri"/> 
// //   <h1 className="prop">hello world </h1>
// //   </>
// //    )
// // }
// // export default App;

// // // import React from "react";
// // // class main extends React.Component{
// // //   render(){
// // //     return(
// // //       <h1>
// // //         hello mohamed 
// // //       </h1>
// // //     )
// // //   }
// // // }
// // // export default main;



//           //  ==================counting Number

// // import {useState} from "react";

// // function App(){
// //   const [count , setcount] = useState(0);
// //   const increment = ()=> {
// //     setcount(count + 1 )
// //   }
// //   return(
// //     <>
// //     <h1>hello mohamed </h1>
// //     <p> click to add 2 in {count} here </p>
// //     <button onClick={increment}>Click</button>
    
// //     </>
// //   )
// // }
// // export default App;


// // function App() {
// //   const [isVisible, setIsVisible] = useState(false);

// //   const toggle = () => {
// //     setIsVisible(!isVisible);
// //   };

// //   return (
// //     <>
// //       <button onClick={toggle}>
// //         {isVisible ? "Hide" : "Show"} message
// //       </button>

// //       {isVisible && <p>This is the toggle message</p>}
// //     </>
// //   )
// // }
// // export default App;
// function App(){
//   return (
//     <>
//     <div className="container-fluild">
//       <div className="row">
// <div className="col-4">
// <h4>hello mohamed </h4>
// </div><div className="col-4">
// <h4>hello mohamed </h4>
// </div><div className="col-4">
// <h4>hello mohamed </h4>
// </div>
//       </div>
//     </div>
//     </>
//   )
// }export default App;
// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Header from './components/Header';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
