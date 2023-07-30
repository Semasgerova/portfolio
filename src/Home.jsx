import React from 'react'
import { Container } from 'react-bootstrap'

const Home = () => {
  return (
    <div className="home">
        <div className="main">
           <Container>
           <div className="left"></div>
            <div className="middle">
                <h1><span>Sama</span> Asgarova</h1>
                <p>FrontEnd Developer</p>
            </div>
            <div className="right"></div>
           </Container>
        </div>
    </div>
  )
}

export default Home