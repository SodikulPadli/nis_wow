import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Landing() {
  return (
    <div>
      <Container>
        <Row>
          <Col style={{ position: 'relative', marginTop: '50px', marginLeft: '20px' }}>
            <Card style={{ width: '25rem', border: 'none' }}>
              <Card.Body>
                <Card.Img variant="top" src="assets/Icon.png" />
                <Card.Text style={{ fontSize: '24px', fontFamily: 'avenir' }}>Sign-up now and subscribe to enjoy all the cool and latest books - The best book rental service provider in Indonesia</Card.Text>
                <Button variant="danger" style={{ marginRight: '20px', padding: '5px 30px' }}>
                  Sign Up
                </Button>
                <Button variant="secondary" style={{ marginLeft: '20px', padding: '5px 30px' }}>
                  Sign In
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col style={{ position: 'relative', marginTop: '-680px', width: '60rem' }}>
            <img src="assets/Vector 1.png"></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Landing;
