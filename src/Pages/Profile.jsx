import { Col, Container, Row } from "react-bootstrap";
import Header from "../Components/Header";
import MemoryCards from "../Components/MemoryCards";
import ProfileCards from "../Components/ProfileCards";

function Profile() {
  return (
    <>
      <Header />
      <div
        style={{
          paddingTop: "70px",
          paddingBottom: "100px",
          backgroundColor: "#ede2dc",
        }}
      >
        <Container>
          <div className="d-flex justify-content-center">
            <input
              type="text"
              className="form-control w-50 mb-4"
              placeholder="search for tags..."
            />
          </div>
          <Row>
            <Col lg={8}>
              <MemoryCards />
            </Col>
            <Col lg={4}>
              <ProfileCards />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Profile;
