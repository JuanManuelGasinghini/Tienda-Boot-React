import LogoFinal from "../../assets/img/LogoFinal.png";
import CartWidget from "../CartWidget/CartWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBarUno.css'

const NavBar = () => {

    return (
           <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
  <div className="logo"><img src={LogoFinal} alt="" className="logo" /></div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Cañerias</Nav.Link>
            <Nav.Link href="#About">Griferías</Nav.Link>
            <Nav.Link href="#Contact">Accesorios</Nav.Link>
          </Nav>
        </Navbar.Collapse>
          <CartWidget/>
      </Container>
    </Navbar>
    )
}

export default NavBar;