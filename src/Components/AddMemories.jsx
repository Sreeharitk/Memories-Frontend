import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import addImg from "../assets/addImg.png";

function AddMemories() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button className="btn btn-danger mt-3 w-75" onClick={handleShow}>
        New Memory <i className="fa-solid fa-plus"></i>
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add a memory!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col lg={6}>
                <label style={{ cursor: "pointer" }}>
                  <input type="file" style={{ display: "none" }} />
                  <img src={addImg} alt="Project image" className="img-fluid" />
                </label>
              </Col>
              <Col lg={6}>
                <div className="d-flex flex-column justify-content-center align-items-center h-100">
                  <input
                    type="text"
                    className="w-100 form-control border-dark"
                    placeholder="Memory Title"
                  />
                  <input
                    type="text"
                    className="w-100 form-control mt-3 border-dark"
                    placeholder="Memory Description"
                  />
                  <input
                    type="text"
                    className="w-100 form-control mt-3 border-dark"
                    placeholder="Tags"
                  />
                  <input
                    type="text"
                    className="w-100 form-control mt-3 border-dark"
                    placeholder="Extra Notes"
                  />
                  <div style={{ display: "flex", marginTop: "15px" }}>
                    <Form.Check
                      label="Private"
                      name="group1"
                      type={"radio"}
                      id={`private-radio`}
                      className="me-3"
                    />
                    <Form.Check
                      label="Public"
                      name="group1"
                      type={"radio"}
                      id={`public-radio`}
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMemories;
