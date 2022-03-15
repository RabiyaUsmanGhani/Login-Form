import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { User } from "../../store/actions/login";
import MyModal from "../Modal";
import "./style.scss";
import logo from "../../../src/images/logo.png";

const LoginForm = ({ addUser }) => {
  const [modalShow, setModalShow] = useState(false);
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [errorText, setErroeText] = useState(false);

  const SubmitForm = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // For Password Reqx Validation {8,15} can replace with {10} but for response the pasword is given is 11 characters long that's why I am limited it to 8 to 15 characters.
    let pass =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    var mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    var phoneno = /^\d{11}$/;

    if (
      (inputs.email.match(mailformat) || inputs.email.match(phoneno)) &&
      inputs.password.match(pass) &&
      inputs.password.length >= 10
    ) {
      addUser(inputs);
      setTimeout(() => {
        setModalShow(true);
        setIsLoading(false);
        setErroeText(false);
      }, 2000);
    } else {
      setErroeText(true);
      setModalShow(false);
      setIsLoading(false);
    }
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs({ ...inputs, [name]: value });
  };

  return (
    <div className="background-div">
      <Container>
        <Row className="main-div">
          <Col md="7" lg="7" className="login-div">
            <Form className="form-div">
              <h1 className="heading">Login</h1>
              <Form.Group controlId="formBasicEmail" className="input-div">
                <Form.Label>Email or Phone No</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter email or phone no"
                  name="email"
                  value={inputs.email || ""}
                  onChange={handleChange}
                  className="input-field"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="input-div">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={inputs.password || ""}
                  onChange={handleChange}
                  minLength="10"
                  className="input-field"
                />
                <Form.Text className="text-muted">
                  The password should contain atleast 7 characters with one
                  uppercase, one lowercase, one numeral and one special
                  character.
                </Form.Text>
                {errorText && (
                  <Form.Text className="text-danger">
                    Kindly enter valid email address or password.
                  </Form.Text>
                )}
              </Form.Group>
              <div className="btn-div">
                {isLoading ? (
                  <Button variant="primary" disabled className="form-btn">
                    Loading
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={SubmitForm}
                    className="form-btn"
                  >
                    Submit
                  </Button>
                )}
              </div>
            </Form>
          </Col>
          <Col md="5" lg="5" className="logo-div">
            <img src={logo} alt="Unikrew" className="logo-img" />
            <h3 className="quote">Your Innovation Delivery Partner</h3>
          </Col>
        </Row>

        <MyModal show={modalShow} onHide={() => setModalShow(false)} />
      </Container>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (body) => {
      dispatch(User(body));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    userdata: state.login.userData,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
