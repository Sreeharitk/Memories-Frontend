import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import memoryIcon from "../assets/memoryIcon.png";

// eslint-disable-next-line react/prop-types
function Header({ insideHome }) {
  return (
    <div>
      <Navbar className="p-3" style={{ backgroundColor: "#edc8b8" }}>
        <Container fluid>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Navbar.Brand style={{ fontSize: "30px" }}>
              <img src={memoryIcon} alt="" width={"30%"} height={"50px"} />
              Memories
            </Navbar.Brand>
          </Link>
          {insideHome && (
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={"/profile"}
            >
              <i className="fa-solid fa-user fa-2xl me-5"></i>
            </Link>
          )}
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
