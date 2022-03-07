import { Carousel } from 'react-bootstrap';

function ReadBook() {
  return (
    <div style={{ margin: '50px 50px' }}>
      <img src="assets/icon2.png"></img>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="assets/readbook.png" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="assets/readbook.png" alt="Second slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default ReadBook;
