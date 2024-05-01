import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data})=>{
    console.log(data);

    const[showItems , setShowItems] = new useState(false);

    const handleClick = ()=>{
      setShowItems(!showItems)
    }

    return (
        <div>
          <div className="w-6/12 bg-gray-200 mx-auto my-4 p-4 shadow-lg ">
            <div className=" flex justify-between cursor-pointer"
             onClick={handleClick}>
            <span className="font-bold">{data.title}({data.itemCards.length})</span>
            <span>&#8595;</span>
            </div>
          { showItems && <ItemList items={data.itemCards}/>}
          </div>
         
        </div>
    )
}
export default RestaurantCategory;