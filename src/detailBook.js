import { Container, Row, Col, Button } from 'react-bootstrap';
import { Person, CardChecklist, BoxArrowRight, JournalBookmarkFill, ArrowBarRight } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

function DetailBook() {
  const profile = useNavigate();
  // create function here for handle push to another pages
  const clickProfile = () => {
    profile('/profile');
  };
  const logout = useNavigate();
  const clickLogout = () => {
    logout('/');
  };
  const AddBook = useNavigate();
  const clickaddmybook = () => {
    AddBook('/profile');
  };

  const ReadBook = useNavigate();
  const clickRead = () => {
    ReadBook('/readbook');
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
          <Col style={{ position: 'relative' }}>
            <div style={{ position: 'relative', width: '20px' }}>
              <img src="assets/list2.png"></img>
            </div>
            <div style={{ position: 'relative', marginTop: '-550px', marginLeft: '450px' }}>
              <h1>Tess on The Road</h1>
              <p>Rachel Hartman</p>
              <br />
              <h3>Publication date</h3>
              <p>April 2020</p>
              <br />
              <h3>Pages</h3>
              <p>436</p>
              <br />
              <h3 style={{ color: 'red' }}>ISBN</h3>
              <p>9781789807554</p>
            </div>
          </Col>
          <div style={{ margin: '80px 200px', width: '800px' }}>
            <h2>About This Book</h2>
            <br />
            <p style={{ textAlign: 'justify' }}>
              In the medieval kingdom of Goredd, women are expected to be ladies, men are their protectors, and dragons get to be whomever they want. Tess, stubbornly, is a troublemaker. You can’t make a scene at your sister’s wedding and{' '}
              <br />
              break a relative’s nose with one punch (no matter how pompous he is) and not suffer the consequences. As her family plans to send her to a nunnery, Tess yanks on her boots and sets out on a journey across the Southlands, alone
              and pretending to be a boy. Where Tess is headed is a mystery, even to her. So when she runs into an old friend, it’s a stroke of luck. This friend is a quigutl—a subspecies of dragon—who gives her both a purpose and
              <br />
              protection on the road. But Tess is guarding a troubling secret. Her tumultuous past is a heavy burden to carry, and the memories she’s tried to forget threaten to expose her to the world in more ways than one. Returning to
              the fascinating world she created in the award-winning and New York Times bestselling Seraphina, Rachel Hartman introduces readers to a new character and a new quest, pushing the boundaries of genre once again in this wholly
              original fantasy.
            </p>
            <div style={{ float: 'right' }}>
              <Button style={{ marginRight: '10px' }} variant="danger" onClick={clickaddmybook}>
                Add My Book <JournalBookmarkFill />
              </Button>
              <Button variant="secondary" onClick={clickRead}>
                Read Book <ArrowBarRight />
              </Button>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default DetailBook;
