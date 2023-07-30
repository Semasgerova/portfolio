import { Container, Button } from 'react-bootstrap'
import logo from "./photo/logo.png"

const Header = () => {
  return (
    <div className='header'>
      <Container>
        <div className="logo"><img src={logo} alt="" /></div>
        <Button>Contact</Button>
      </Container>
    </div>
  )
}

export default Header