import React from "react";
import ReactDOM from "react-dom/client";
import restrautList from "./constant/rest"
import { useState } from "react";
import "./../index.css"
import RestrauntCard from "./Component/RestrauntCard"
import Body from "./Component/Body"


import Header from "./Component/Header"




const AppLayout=()=>{
  return(
    <>
    <Header/>
   <Body></Body>
    <h1>Footer</h1>
    </>
  )
 
}


  const root=ReactDOM.createRoot(document.getElementById("root"));
  // root.render(heaading2)  way of  rendering  the ReactElement

  //  way of rendering the Function Component
  root.render(<AppLayout></AppLayout>)  