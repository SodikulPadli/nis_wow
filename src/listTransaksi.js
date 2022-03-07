import { Container, Dropdown, Table } from 'react-bootstrap';
import { JournalPlus, BoxArrowRight, CaretDownFill } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
function ListTransaksi() {
  const AddBook = useNavigate();
  const clikAddBook = () => {
    AddBook('/addbook');
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
              <Dropdown.Item onClick={clickLogout}>
                <BoxArrowRight size={20} variant={'danger'} />
                <span> Logout</span>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <Table striped bordered hover style={{ marginTop: '50px' }}>
          <thead>
            <h3>Incoming Transaction</h3>
            <br />
            <tr>
              <th>No</th>
              <th>Users</th>
              <th>Bukti Transfer</th>
              <th>Remaining Active</th>
              <th>Status User</th>
              <th>Status Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto.png</td>
              <td>26 / Hari</td>
              <td style={{ color: 'green' }}>Active</td>
              <td style={{ color: 'green' }}>Approve</td>
              <td>
                <CaretDownFill />
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>bca.png</td>
              <td>27 / Hari</td>
              <td style={{ color: 'green' }}>Active</td>
              <td style={{ color: 'green' }}>Approve</td>
              <td>
                <CaretDownFill />
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Jacob</td>
              <td>permata.png</td>
              <td>28 / Hari</td>
              <td style={{ color: 'red' }}>No Active</td>
              <td style={{ color: 'red' }}>Cancel</td>
              <td>
                <CaretDownFill />
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default ListTransaksi;
