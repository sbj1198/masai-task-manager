import React, { useState } from "react";
import "../styles/Signup.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/authReducer/action";

export const Signup = () => {
  const dispatch = useDispatch();
  const [signupDetails, setSignupDetails] = useState({
    email: "",
    uname: "",
    password: "",
    cpassword: "",
  });

  const signupInputHandler = (e) => {
    const { name, value } = e.target;
    setSignupDetails({
      ...signupDetails,
      [name]: value,
    });
  };

  const register = () => {
    dispatch(registerUser(signupDetails));
    setSignupDetails({
      email: "",
      uname: "",
      password: "",
      cpassword: "",
    });
  };

  return (
    <div className="signup">
      <div>
        <div>
          <div>Welcome !</div>
          <div>
            <h4>Sign up to</h4>
            <p>Lorem Ipsum is simply</p>
          </div>
        </div>
        <div className="signup-field">
          <div>
            <p>Email</p>
            <input
              value={signupDetails.email}
              name="email"
              type="email"
              placeholder="Enter your email"
              onChange={signupInputHandler}
            />
          </div>
          <div>
            <p>User name</p>
            <input
              value={signupDetails.uname}
              name="uname"
              type="text"
              placeholder="Enter your user name"
              onChange={signupInputHandler}
            />
          </div>
          <div>
            <p>Password</p>
            <input
              value={signupDetails.password}
              name="password"
              type="password"
              placeholder="Enter your Password"
              onChange={signupInputHandler}
            />
          </div>
          <div>
            <p>Confirm Password</p>
            <input
              value={signupDetails.cpassword}
              name="cpassword"
              type="password"
              placeholder="Confirm your Password"
              onChange={signupInputHandler}
            />
          </div>
          <div>
            <button onClick={register}>Register</button>
          </div>
          <div>
            <p>Already have an Account?</p>
            <p>
              <Link className="signup-field-link" to="/signin">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
