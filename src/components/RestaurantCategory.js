import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems , setShowIndex })=>{
    console.log(data);

    
    const handleClick = ()=>{
      setShowIndex();
    }

    return (        // feature menu page - accordian 
        <div>
          <div className="w-6/12 bg-gray-200 mx-auto my-4 p-4 shadow-lg ">
            <div className=" flex justify-between cursor-pointer"
             onClick={handleClick}>
            <span className="font-bold">{data.title}({data.itemCards.length})</span>
            <span>&#8595;</span>
            </div>
          { showItems && <ItemList items={data.itemCards} showAddButton={true}/>} 
          </div>
         
        </div>
    )
}
export default RestaurantCategory;