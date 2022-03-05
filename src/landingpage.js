import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useState } from 'react';
import Login from './signIn';
import Register from './signUp';
function Landing() {
  const [modalShow, setModalShow] = useState(false);
  const [register, setModal] = useState(false);
  return (
    <div>
      <Container>
        <Row>
          <Col style={{ position: 'relative', marginTop: '50px', marginLeft: '20px' }}>
            <Card style={{ width: '25rem', border: 'none' }}>
              <Card.Body>
                <Card.Img variant="top" src="assets/Icon.png" />
                <Card.Text style={{ fontSize: '24px', fontFamily: 'avenir' }}>Sign-up now and subscribe to enjoy all the cool and latest books - The best book rental service provider in Indonesia</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col style={{ position: 'relative', marginTop: '-680px', width: '60rem' }}>
            <img src="assets/Vector 1.png"></img>
          </Col>
        </Row>
        <div style={{ position: 'relative', marginTop: '-230px' }}>
          <Button style={{ padding: '5px 20px', marginLeft: '30px', border: 'none' }} variant="danger" onClick={() => setModal(true)}>
            Sign Up
          </Button>
          <Register show={register} onHide={() => setModal(false)} />
          <Button style={{ padding: '5px 20px', marginLeft: '30px', border: 'none' }} variant="secondary" onClick={() => setModalShow(true)}>
            Sign In
          </Button>
          <Login show={modalShow} onHide={() => setModalShow(false)} />
        </div>
      </Container>
    </div>
  );
}
export default Landing;
