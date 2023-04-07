import { useState } from "react";
import restrautList from "../constant/rest"
import RestrauntCard from "./RestrauntCard"
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
  export default Body