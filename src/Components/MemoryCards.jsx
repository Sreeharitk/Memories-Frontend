import { Card, Col, Container, Row } from "react-bootstrap";
import travelling1 from "../assets/travelling1.jpg";
import { Link } from "react-router-dom";
import EditMemories from "./EditMemories";

function MemoryCards() {
  return (
    <div>
      <Container>
        <Row>
          <Col
            lg={6}
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "15px",
            }}
          >
            <Card style={{ width: "18rem" }} className="shadow-lg">
              <Card.Img variant="top" src={travelling1} />
              <Card.Body>
                <Card.Title>Memory Title</Card.Title>
                <p>Author</p>
                <p>Memory Description</p>
                <p>Tags</p>
                <p>Public or Private</p>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Link to={"/Memories"} className="btn btn-warning">
                    More...
                  </Link>
                  <EditMemories />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col
            lg={6}
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "15px",
            }}
          >
            <Card style={{ width: "18rem" }} className="shadow-lg">
              <Card.Img variant="top" src={travelling1} />
              <Card.Body>
                <Card.Title>Memory Title</Card.Title>
                <p>Author</p>
                <p>Memory Description</p>
                <p>Tags</p>
                <p>Public or Private</p>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Link to={"/Memories"} className="btn btn-warning">
                    More...
                  </Link>
                  <EditMemories />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col
            lg={6}
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "15px",
            }}
          >
            <Card style={{ width: "18rem" }} className="shadow-lg">
              <Card.Img variant="top" src={travelling1} />
              <Card.Body>
                <Card.Title>Memory Title</Card.Title>
                <p>Author</p>
                <p>Memory Description</p>
                <p>Tags</p>
                <p>Public or Private</p>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Link to={"/Memories"} className="btn btn-warning">
                    More...
                  </Link>
                  <EditMemories />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MemoryCards;
