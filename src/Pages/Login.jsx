import { Container, Form } from "react-bootstrap";
import Header from "../Components/Header";
import "./login.css";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Login({ insideRegister }) {
  return (
    <>
      <Header />
      <div
        style={{
          paddingTop: "100px",
          paddingBottom: "100px",
          backgroundColor: "#ede2dc",
        }}
      >
        <Container>
          <div style={{ display: "grid", placeItems: "center" }}>
            <div
              className="p-5 rounded bg-dark text-light shadow-lg"
              style={{ width: "35%" }}
            >
              {insideRegister ? (
                <h1 className="text-center mb-3">Register!!</h1>
              ) : (
                <h1 className="text-center mb-3">Login!!</h1>
              )}
              {insideRegister && (
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control text-light"
                    id="floatingName"
                    placeholder="name@example.com"
                    style={{
                      backgroundColor: "transparent",
                      borderColor: "transparent",
                      borderBottom: "1px solid white",
                    }}
                  />
                  <label className="d-flex justify-content-between align-items-center w-100">
                    User Name <i className="fa-regular fa-user"></i>
                  </label>
                </div>
              )}
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control text-light"
                  id="floatingEmail"
                  placeholder="name@example.com"
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "transparent",
                    borderBottom: "1px solid white",
                  }}
                />
                <label className="d-flex justify-content-between align-items-center w-100">
                  Email address <i className="fa-regular fa-envelope"></i>
                </label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control text-light"
                  id="floatingPassword"
                  placeholder="Password"
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "transparent",
                    borderBottom: "1px solid white",
                  }}
                />
                <label className="d-flex justify-content-between align-items-center w-100">
                  Password <i className="fa-solid fa-lock"></i>
                </label>
              </div>
              {insideRegister ? (
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control text-light"
                    id="floatingConfirmPassword"
                    placeholder="Password"
                    style={{
                      backgroundColor: "transparent",
                      borderColor: "transparent",
                      borderBottom: "1px solid white",
                    }}
                  />
                  <label className="d-flex justify-content-between align-items-center w-100">
                    Confirm Password <i className="fa-solid fa-lock"></i>
                  </label>
                </div>
              ) : (
                <div
                  style={{
                    marginTop: "10px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Form.Check label="Remember me" />
                </div>
              )}
              {insideRegister ? null : (
                <p className="text-center mt-3">Forgot password?</p>
              )}
              {insideRegister ? (
                <p>
                  Already have an account? Click here to{" "}
                  <Link to={"/login"} className="text-warning">
                    Login
                  </Link>
                </p>
              ) : (
                <p>
                  Don&apos;t have an account? Click here to{" "}
                  <Link to={"/register"} className="text-warning">
                    Register
                  </Link>
                </p>
              )}
              {insideRegister ? (
                <button
                  className="btn btn-light button mt-3"
                  style={{ width: "100%", borderRadius: "50px" }}
                >
                  REGISTER
                </button>
              ) : (
                <button
                  className="btn btn-light button"
                  style={{ width: "100%", borderRadius: "50px" }}
                >
                  LOGIN
                </button>
              )}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Login;
