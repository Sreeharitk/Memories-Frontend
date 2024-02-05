import Header from "../Components/Header";
import { Col, Container, Row } from "react-bootstrap";
import homeImg from "../assets/homeImg.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Header insideHome/>
      <div
        style={{
          backgroundColor: "#ede2dc",
          height: "89svb",
          paddingTop: "150px",
        }}
      >
        <Container>
          <Row>
            <Col
              lg={6}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h1>Welcome to Memories!!</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
                impedit, hic corrupti vel eligendi exercitationem molestias
                libero magnam rem sunt sit rerum aspernatur. Accusantium rem,
                quos impedit non numquam ad?
              </p>
              <Link className="btn btn-warning w-25" to={"/login"}>Get started now!!</Link>
            </Col>
            <Col
              lg={6}
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img src={homeImg} alt="" height={"300px"}/>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Home;
