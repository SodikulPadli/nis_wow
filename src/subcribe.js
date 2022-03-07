import { Person, CardChecklist, BoxArrowRight } from 'react-bootstrap-icons';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Subcribe() {
  // call that hooks here and store to variable
  const navigate = useNavigate();
  // create function here for handle push to another pages
  const handleClick = () => {
    navigate('/successubcribe');
  };

  // navigate logout
  const logout = useNavigate();
  const clickLogout = () => {
    logout('/');
  };
  return (
    <div>
      <Container style={{ marginTop: '20px' }}>
        <Row>
          <Col lg="3" style={{ marginLeft: '-80px', position: 'relative' }}>
            <img src="assets/Icon2.png"></img>
            <br />
            <img src="assets/user.png"></img>
            <h4>Egi Ganteng</h4>
            <h4 style={{ color: 'red' }}>Not Subscribed Yet </h4>
            <hr />
            <span style={{ fontSize: '20px' }} onClick={() => alert('please subscribe first')}>
              <Person size={30} /> Profile
            </span>
            <br />
            <br />
            <span style={{ fontSize: '20px' }}>
              <CardChecklist size={30} /> Subcribe
            </span>
            <br />
            <br />
            <hr />
            <span style={{ fontSize: '20px' }} onClick={clickLogout}>
              <BoxArrowRight size={30} /> Logout
            </span>
          </Col>
          <Col lg="5" style={{ position: 'relative', margin: '100px auto', textAlign: 'center' }}>
            <h1>Premium</h1>
            <br />
            Pay now and access all the latest books from<img src="assets/wow.png"></img>
            <br />
            <img src="assets/wow.png" />: 0981312323 <br />
            <br />
            <Form>
              <Form.Group className="mb-3 " controlId="formBasicEmail" size="md">
                <Form.Control type="email" placeholder="input Your Account Number" />
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Control type="file" placeholder="Atteche proof of transfer" />
              </Form.Group>
              <Button onClick={handleClick} variant="danger" type="submit">
                Send
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Subcribe;
