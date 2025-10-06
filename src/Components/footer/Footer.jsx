import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


const Footer = () => {
  return (
  <div>
        <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Desarrolled by JMGDEV</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">JMG DEV</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>

  )
}

export default Footer