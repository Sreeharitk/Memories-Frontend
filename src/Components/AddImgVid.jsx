import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import addImg from "../assets/addImg.png";

function AddImgVid() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="btn" onClick={handleShow}>
        <i className="fa-solid fa-plus fa-2xl"></i>
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add an image or video</Modal.Title>
        </Modal.Header>
        <div
          style={{ padding: "10px", display: "flex", justifyContent: "center" }}
        >
          <label style={{ cursor: "pointer" }}>
            <input type="file" style={{ display: "none" }} />
            <img
              src={addImg}
              alt="Project image"
              height={"300px"}
              width={"100%"}
            />
          </label>
        </div>
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

export default AddImgVid;
