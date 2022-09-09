import React from 'react'

const NevBar = ({filterdFun,uniquelist}) => {
  return (
    <>
    <div class="cont">
    {
      uniquelist.map((elem)=>{
        return (
      <button className='button' onClick={()=>filterdFun(elem)}>{elem}</button>
          
    )
       })
    }
    </div>
    </>
  )
}

export default NevBar
