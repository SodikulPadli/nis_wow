import { Modal, Button, Form } from 'react-bootstrap';
import React from 'react';

function Register(props) {
  return (
    <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Button className="px-5 my-2" variant="danger" style={{ marginInlineStart: '150px', border: 'none' }}>
            Sign Up
          </Button>
          <p>
            Already have an account ? Klik <b>Here</b>
          </p>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
export default Register;
