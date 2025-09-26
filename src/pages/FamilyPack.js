import React, { useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";

const FamilyPack = () => {
  const [show3000, setShow3000] = useState(false);
  const [show5000, setShow5000] = useState(false);

  return (
    <Container className="my-5">
      <Row className="text-center">
        <Col>
          <h2 className="mb-4">Family Pack</h2>
        </Col>
      </Row>
      <Row className="justify-content-between">
        <Col xs={6} className="text-start">
          <Button variant="primary" onClick={() => setShow3000(true)}>
            3000 Pack
          </Button>
        </Col>
        <Col xs={6} className="text-end">
          <Button variant="success" onClick={() => setShow5000(true)}>
            5000 Pack
          </Button>
        </Col>
      </Row>

      {/* Popup for 3000 Pack */}
      <Modal show={show3000} onHide={() => setShow3000(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>3000 Pack</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img
            src={require("../assets/images/banner_two.jpg")}
            className="img-fluid w-100"
            alt="product name"
          />
        </Modal.Body>
      </Modal>

      {/* Popup for 5000 Pack */}
      <Modal show={show5000} onHide={() => setShow5000(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>5000 Pack</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img
            src={require("../assets/images/banner_two.jpg")}
            className="img-fluid w-100"
            alt="product name"
          />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default FamilyPack;
