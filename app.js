import React from "react";
import ReactDOM from "react-dom/client";
import restrautList from "./src/constant/rest"
import { useState } from "react";
import "./index.css"

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
    />
  </a>
);
const Header =()=>{
  return (
  <div className="header">
       <Title />

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const RestrauntCard =({name,cuisines,cloudinaryImageId,lastMileTravelString}) => {
  return(
<div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString} minutes</h4>
    </div>
  ); 
}
const Body=()=>{
  let [searchText,setSearchText]=useState("")
  let [returantdata,setResturantdata]=useState(restrautList)
  console.log({searchText})
  // let setSearchText="kfc"
  const setSearchResturant=()=>{
console.log(" click btn")
let filteredresturant=restrautList.filter((restaurant)=>{
 return restaurant.data.name.includes(searchText)
})
console.log({filteredresturant} ,{searchText})
setResturantdata(filteredresturant)


  }
  return(
       <div className="search-container"> 
       <input type="text" className="search-input"placeholder="Search"  value={searchText}  onChange={ (e)=>{  setSearchText(e.target.value) }   }   > 
       
        
       </input>
        <button onClick={()=>{setSearchResturant()}}>Search</button> 

    <div className="restaurant-list">
      {returantdata.map((rest)=>{
return <RestrauntCard {...rest.data} key={rest.data.id}> </RestrauntCard>
      })

    }
    </div>
    </div>
 
  )
}
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