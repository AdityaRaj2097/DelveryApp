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
  // console.log({heading1})
  const Headercomponent=()=>{
    return(
      <>
First way of writing compoennet

      </>
    )
  }
  const Headercomponent1=function(){
    return(
      <>
second way of writing compoennet

      </>
    )
  }
   

  console.log({Headercomponent})
  // it was not Working  recheck and tell us 
  const Headercomnpoent2 = () =>{
    <h1>This is the Third way of Writing the function but its not working checking   </h1>

  }


  //  do frpm here
  const root=ReactDOM.createRoot(document.getElementById("root"));
  root.render(Headercomnpoent2)  
  root.render(<Headercomnpoent2></Headercomnpoent2>)  