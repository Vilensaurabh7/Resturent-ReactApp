import React from 'react'

const MenuCard = ({menuData}) => {
    // console.log(props);
  return (
    <>
     <section class="main-card--cointainer">
       {  
          menuData.map((curElem)=>{
            const { id, name, category, image, description } = curElem;
            return(
        <div className="container">
        <div className="main">
        <div className="heading">
            <span>{id}</span>
            <br/>
            <p>{category}</p>
            <h1>{name}</h1>
        </div>
        <div className="body">{description}
                 <span>read</span> 
                  <img src={image} /> 
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
