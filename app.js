import React from "react";
import ReactDOM from "react-dom/client";
const heading1=React.createElement("h1",{
    id:"headingfirst",
    key:"3",
    world:"hello"
  },"Heading wit ssr")
  const heaading2= React.createElement("p",{
    id:"para1",
    key:"1",
    hello:"paragraphddd"
  } ,"Paragraph with ssr") 
  //  for adding multiple child we Add content in array 
  const container=React.createElement("div" ,{
    id:"container",
    key:"2",
    root:"divcontainer with ssr"
  },[heading1,heaading2])
  

  const root=ReactDOM.createRoot(document.getElementById("root"));
  root.render(container)