import { Container, Row, Col, Figure } from 'react-bootstrap';
import { Person, CardChecklist, BoxArrowRight } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

function Home() {
  //init State
  const [counter, setCounter] = useState(0);

  //Create Function Add
  function Alert() {
    setCounter(alert('please make a payment to read the latest books'));
  }

  // call that hooks here and store to variable
  const navigate = useNavigate();
  // create function here for handle push to another pages
  const handleClick = () => {
    navigate('/subcribe');
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
            <span style={{ fontSize: '20px' }} onClick={handleClick}>
              <CardChecklist size={30} /> Subcribe
            </span>
            <br />
            <br />
            <hr />
            <span style={{ fontSize: '20px' }} onClick={clickLogout}>
              <BoxArrowRight size={30} /> Logout
            </span>
          </Col>
          <Col lg="3" style={{ position: 'relative', marginLeft: '-30px' }}>
            <img src="assets/Frame 1.png"></img>
          </Col>
          <Figure style={{ position: 'relative', marginLeft: '200px', marginTop: '30px' }}>
            <h3>List Books</h3>
            <Figure.Image width={171} height={180} alt="171x180" src="assets/list2.png" onClick={Alert} />
            <h4>Tess on the Road</h4>
            <Figure.Caption>Nulla vitae elit libero, a pharetra augue mollis interdum.</Figure.Caption>
          </Figure>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
