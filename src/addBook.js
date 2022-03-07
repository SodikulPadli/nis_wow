import { Container, Dropdown, Form, Button } from 'react-bootstrap';
import { JournalPlus, BoxArrowRight, JournalBookmarkFill } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
function AddBook() {
  const AddBook = useNavigate();
  const clikAddBook = () => {
    AddBook('/addbook');
  };

  const List = useNavigate();
  const clikList = () => {
    List('/listtransaksi');
  };
  // navigate logout
  const logout = useNavigate();
  const clickLogout = () => {
    logout('/');
  };
  return (
    <div>
      <Container style={{ margin: '50px auto' }}>
        <div style={{ position: 'relative' }}>
          <img src="assets/icon2.png"></img>
        </div>
        <div style={{ position: 'relative', float: 'right', marginTop: '-100px' }}>
          <Dropdown>
            <Dropdown.Toggle variant="none" id="dropdown-basic">
              <img src="assets/User.png" style={{ width: '80px' }}></img>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={clikAddBook}>
                <JournalPlus size={20} />
                <span> Add Book</span>
              </Dropdown.Item>
              <Dropdown.Item nClick={clickLogout}>
                <BoxArrowRight size={20} variant={'danger'} />
                <span> Logout</span>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <Form style={{ margin: '50px auto', width: '500px' }}>
          <h3>Add Book</h3>
          <br />
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Title" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Publicator" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Pages" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Author" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="ISBN" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows={5} placeholder="About This Book" />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3" placeholder="Attache Book File">
            <Form.Control type="file" />
          </Form.Group>
          <div style={{ float: 'right' }}>
            <Button onClick={clikList} style={{ marginRight: '10px' }} variant="danger">
              Add My Book <JournalBookmarkFill />
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default AddBook;
