import React, { useState } from "react";

const Size = () =>{
  const [fontSize, setFontSize] = useState()


  return(
    <>
    <input onChange={(event)=>{
    setFontSize(event.target.value)
    }} type="range" max={50} min={1} />
    <h1 style={{fontSize: `${fontSize}px`}}>Adjust my size!</h1>
    </>
  )
}

export  default Size;