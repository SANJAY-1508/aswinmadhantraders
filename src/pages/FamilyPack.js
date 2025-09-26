import React, { useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";

const FamilyPack = () => {
  const [show3000, setShow3000] = useState(false);
  const [show5000, setShow5000] = useState(false);

  return (
    <Container fluid className="family-pack-container overflow-hidden">
      <Row className="text-center">
        <Col>
          <h2 className="family-pack-heading mb-4">Family Pack</h2>
        </Col>
      </Row>

      <Row className="align-items-center justify-content-around">
        {/* 🔥 Crackers GIF Left */}
        <Col xs={3} className="text-end">
          <img
            src={require("../assets/images/rocket.gif")}
            alt="Crackers Left"
            className="crackers-gif"
          />
        </Col>

        {/* 3000 Pack Button */}
        <Col xs={3} className="text-center">
          <Button
            className="pack-btn pack-3000"
            onClick={() => setShow3000(true)}
          >
            3000 Pack Details
          </Button>
        </Col>

        {/* 5000 Pack Button */}
        <Col xs={3} className="text-center">
          <Button
            className="pack-btn pack-5000"
            onClick={() => setShow5000(true)}
          >
            5000 Pack Details
          </Button>
        </Col>

        {/* 🔥 Crackers GIF Right */}
        <Col xs={3} className="text-start">
          <img
            src={require("../assets/images/rocket.gif")}
            alt="Crackers Right"
            className="crackers-gif"
          />
        </Col>
      </Row>

      {/* Popup for 3000 Pack */}
      <Modal
        show={show3000}
        onHide={() => setShow3000(false)}
        backdrop="static"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>3000 Pack</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img
            src={require("../assets/images/3000.jpg")}
            className="img-fluid w-100 rounded shadow"
            alt="3000 Pack"
          />
        </Modal.Body>
      </Modal>

      {/* Popup for 5000 Pack */}
      <Modal
        show={show5000}
        onHide={() => setShow5000(false)}
        backdrop="static"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>5000 Pack</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img
            src={require("../assets/images/5000.jpg")}
            className="img-fluid w-100 rounded shadow"
            alt="5000 Pack"
          />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default FamilyPack;
