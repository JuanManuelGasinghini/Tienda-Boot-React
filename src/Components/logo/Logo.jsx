import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import logo from '../../assets/img/Logo3ConSG.png';
import './Logo.css';

function Logo() {
  return (
<Container className='Conatainer'>
      <Row>
        <Col xs={6} md={4}>
          <Image src={logo} className='ImageLogo' roundedCircle />
        </Col>
        </Row>
    </Container>
  );
}

export default Logo