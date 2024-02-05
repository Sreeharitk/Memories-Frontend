import { Col, Container, Row } from "react-bootstrap";
import Header from "../Components/Header";
import "./memories.css";
import travelling1 from "../assets/travelling1.jpg";
import travelling2 from "../assets/travelling2.jpg";
import travelling3 from "../assets/travelling3.jpg";
import AddImgVid from "../Components/AddImgVid";

function Memories() {
  return (
    <>
      <Header />
      <div className="memory-main">
        <Container className="memory-container p-5">
          <h1 className="text-center">
            Memory Title!! <span className="fs-4">-Author</span>
          </h1>
          <h2 className="text-center mt-3">Memory Description...</h2>
          <h4 className="text-center mt-3">#Tags</h4>
          <p>
            Extra Memory notes... Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Itaque labore vel saepe? Velit aliquam dolores
            sint ducimus doloremque ullam nulla voluptates distinctio harum
            perspiciatis! Magnam accusantium iure nemo corrupti facilis!
          </p>
          <Row className="mt-5 memory-files">
            <h1 className="mb-5 text-center">
              Add images/videos here...
              <AddImgVid />
            </h1>
            <Col lg={4} style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={travelling1}
                alt=""
                className="rounded"
                height={"300px"}
                width={"80%"}
              />
            </Col>
            <Col lg={4} style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={travelling2}
                alt=""
                className="rounded"
                height={"300px"}
                width={"80%"}
              />
            </Col>
            <Col lg={4} style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={travelling3}
                alt=""
                className="rounded"
                height={"300px"}
                width={"80%"}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Memories;
