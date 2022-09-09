import React from 'react'

const MenuCard = ({menuData}) => {
    // console.log(props);
  return (
    <>
     <section class="main-card--cointainer">
       {  
          menuData.map((curElem)=>{
//             const { id, name, category, image, description } = curElem;
            return(
                <div className="container">
        <div className="main">
        <div className="heading">
            <span>{curElem.id}</span>
            <br/>
            <p>{curElem.category}</p>
            <h1>{curElem.name}</h1>
        </div>
        <div className="body">{curElem.description}
                 <span>read</span> 
                  <img src={curElem.image} /> 
        </div>
        </div>
    </div>
      ) }) 
       }
       </section>
    </>
  )
}

export default MenuCard
