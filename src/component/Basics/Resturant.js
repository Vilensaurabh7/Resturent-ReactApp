import React  from 'react'
import "./Style.css"
import { useState } from "react"
import MenuCard from "./MenuCard"
import MenuApi from "./MenuApi"
import NevBar from "./NevBar"


const uniquelist= [...new Set( MenuApi.map((curElem)=>{
    return curElem.category;
})
),"all"
];
//  console.log(uniquelist);


const Resturant = () => {
   const [menuData, setMenuData]=useState(MenuApi);
  const [nevDeta, setNevDeta]=useState(uniquelist);


   const filterdFun=(categoryElem)=>{
     if(categoryElem==="all"){
        setMenuData(MenuApi);
        return;
     }
   const filteredCategory= MenuApi.filter((curElem)=>{
     return curElem.category===categoryElem;
    })
    setMenuData(filteredCategory);
}
 return (
 <>
    
   <NevBar filterdFun={filterdFun} uniquelist={nevDeta} />
    <MenuCard menuData={menuData} />
    </>
  );
};

export default Resturant
