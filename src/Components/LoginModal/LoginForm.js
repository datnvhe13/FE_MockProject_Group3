import React, { useState } from "react";
import {
  Button,
  Container,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import InputForm from "./InputForm";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { closeLoginForm } from "../../Redux/Reducer/loginModalSlice";
// import { closeCreateCustomerTestForm } from '../../Redux/Reducer/CustomerTestDriving/CreateNewCustomerTestFormReducer';

function LoginForm() {
  const formState = useSelector((state) => state.loginModalSlice.value);
  const dispatch = useDispatch();

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let handleLogin = () => {
    console.log("email : ", email);
    console.log("password : ", password);
  };

  return (
    <Container>
      <Modal isOpen={formState}>
        {/* <ModalHeader>LOGIN</ModalHeader> */}
        <ModalBody>
          {/* Input Form */}
          {/* <InputForm /> */}

          <form>
            <div class="d-flex align-items-center mb-3 pb-1">
              <i
                class="fas fa-cubes fa-2x me-3"
                style={{ color: "#ff6219" }}
              ></i>
              <span class="h1 fw-bold mb-0">Login</span>
            </div>

            <h5 class="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>
              Sign into your account
            </h5>

            <div class="form-outline mb-4">
              <input
                type="email"
                id="form2Example17"
                class="form-control form-control-lg"
                onChange={(event) => setEmail(event.target.value)}
              />
              <label class="form-label" for="form2Example17">
                Email address
              </label>
            </div>

            <div class="form-outline mb-4">
              <input
                type="password"
                id="form2Example27"
                class="form-control form-control-lg"
                onChange={(event) => setPassword(event.target.value)}
              />
              <label class="form-label" for="form2Example27">
                Password
              </label>
            </div>

            <div class="pt-1 mb-4">
              {/* <Link to="/homePage">
                        <button class="btn btn-dark btn-lg btn-block" type="button">Login</button>
                    </Link> */}
              {/* <Link to="/adminPage"> */}
              <button
                class="btn btn-dark btn-lg btn-block"
                type="button"
                onClick={() => {
                  handleLogin();
                }}
              >
                Login
              </button>
              {/* </Link> */}
            </div>

            <Link to="/forget">
              <a class="small text-muted" href="#!">
                Forgot password?
              </a>
            </Link>

            <p class="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
              Don't have an account?
              <Link to="/register">
                <a href="#!" style={{ color: "#393f81" }}>
                  Register here
                </a>
              </Link>
            </p>
            <a href="#!" class="small text-muted">
              Terms of use.
            </a>
            <a href="#!" class="small text-muted">
              Privacy policy
            </a>
          </form>
        </ModalBody>

        <ModalFooter>
          <Button
            color="danger"
            onClick={() => {
              dispatch(closeLoginForm());
            }}
          >
            Thoát
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
}

export default LoginForm;
