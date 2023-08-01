import React, { useState } from 'react'
import Header from './Header'
import Home from './Home'

const App = () => {

  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();

  window.addEventListener('mousemove',(e)=>{
      setCursorX(e.pageX)
      setCursorY(e.pageY)
  })

  return (
    <>
      <div className="cursor"
      style={{left:cursorX + "px", top:cursorY + "px"}}
      ></div>
      <Header/>
      <Home/>
    </>
  )
}

export default App