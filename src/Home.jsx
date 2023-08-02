import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Home = () => {

  const [activeNumber, setActiveNumber] = useState('00');

  const handleNumberClick =(number)=>{
      setActiveNumber(number)
  };


  return (
    <div className="home">
        <div className="main">
           <Container>
           <div className="left">
            <div className="social-media">
              <a href="https://github.com/Semasgerova"><i className="fa-brands fa-github"></i></a>
              <a href="https://www.linkedin.com/in/semasgerova/"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
           </div>
            <div className="middle">
                <h1><span>Sama</span> Asgarova</h1>
                <p>I'm a <span className='typewriter'></span></p>
            </div>
            <div className="right">
              <div className="numbers">
                <span className={activeNumber === '00' ? 'active' : ''} onClick={() => handleNumberClick('00')}>00</span>
                <span className={activeNumber === '01' ? 'active' : ''} onClick={() => handleNumberClick('01')}>01</span>
                <span className={activeNumber === '02' ? 'active' : ''} onClick={() => handleNumberClick('02')}>02</span>
                <span className={activeNumber === '03' ? 'active' : ''} onClick={() => handleNumberClick('03')}>03</span>
                <span className={activeNumber === '04' ? 'active' : ''} onClick={() => handleNumberClick('04')}>04</span>
              </div>
              <div className="line"></div>
            </div>
           </Container>
        </div>
        <div className="about">
          <Container>
            <Row className='h-100'>
              <Col sm={12} md={6} className='h-100'>
                <div className="text">
                <h1>About</h1>
                </div>
              </Col>
              <Col sm={12} md={6} className='h-100'>
                <div className="text">
                  <p></p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    </div>
  )
}

export default Home