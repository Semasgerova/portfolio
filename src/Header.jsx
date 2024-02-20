import { useState } from 'react';
import { Container, Button } from 'react-bootstrap'
import logo from "./photo/logo.png"

const Header = () => {

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 10) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  const handleClick =()=>{
    window.scrollTo({
      top: 3500,
    });
  }

  return (
    <div  className={colorChange ? "header colorChange" : "header"} >
      <Container>
        <div className="logo"><img src={logo} alt="" /></div>
        <Button onClick={handleClick}>Contact</Button>
      </Container>
    </div>
  )
}

export default Header