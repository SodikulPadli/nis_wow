import { Container, Row, Col, Card, Button, Figure } from 'react-bootstrap';
import { Person, CardChecklist, BoxArrowRight, EnvelopeFill, GenderAmbiguous, TelephoneFill, GeoAltFill } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
function Profile() {
  // call that hooks here and store to variable
  const profile = useNavigate();
  // create function here for handle push to another pages
  const clickProfile = () => {
    profile('/profile');
  };

  // navigate logout
  const logout = useNavigate();
  const clickLogout = () => {
    logout('/');
  };

  const detailBook = useNavigate();
  const clickBook = () => {
    detailBook('/succesaddbook');
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
            <h4 style={{ color: 'green' }}>Subcribe</h4>
            <hr />
            <span style={{ fontSize: '20px' }} onClick={clickProfile}>
              <Person size={30} /> Profile
            </span>
            <br />
            <br />
            <span style={{ fontSize: '20px' }} onClick={() => alert('You Have Subcribe')}>
              <CardChecklist size={30} /> Subcribe
            </span>
            <br />
            <br />
            <hr />
            <span style={{ fontSize: '20px' }} onClick={clickLogout}>
              <BoxArrowRight size={30} /> Logout
            </span>
          </Col>
          <Col style={{ position: 'relative', marginLeft: '-30px' }}>
            <Card>
              <Card.Body style={{ backgroundColor: 'pink' }}>
                <span style={{ fontSize: '20px' }}>
                  <EnvelopeFill size={30} /> egigans@gmail.com
                </span>
                <br />
                <br />
                <span style={{ fontSize: '20px' }}>
                  <GenderAmbiguous size={30} /> Male
                </span>
                <br />
                <br />
                <span style={{ fontSize: '20px' }}>
                  <TelephoneFill size={30} /> 089672256032
                </span>
                <br />
                <br />
                <span style={{ fontSize: '20px' }}>
                  <GeoAltFill size={30} /> Kp kawaron Ilir
                </span>
                <br />
                <br />
                <div style={{ postion: 'relative', marginTop: '-220px', marginLeft: '580px' }}>
                  <img src="assets/Avatar.png"></img>
                  <br></br>
                  <Button variant="danger" style={{ margin: '10px auto', padding: '5px 75px' }}>
                    Edit Profile
                  </Button>
                </div>
              </Card.Body>
            </Card>
            <br />
            <h3>My List Book</h3>
            <br />
            <Figure>
              <Figure.Image width={171} height={180} alt="171x180" src="assets/list2.png" onClick={clickBook} />
              <h4>Tess on the Road </h4>
              <Figure.Caption>Nulla vitae elit libero, a pharetra augue mollis interdum.</Figure.Caption>
            </Figure>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Profile;
