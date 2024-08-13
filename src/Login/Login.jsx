import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
import axios from "axios";
import ForgotPassword from "../Forgotpassword/Forgotpassword.jsx";

const Login = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:100/login")
      .then((response) => setUsers(response.data));
  }, []); // Add empty dependency array to prevent continuous API calls

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    // Filtering users who match both email and password
    let members = users.filter(
      (user) => user.email === email && user.password === password
    );

    if (members.length === 0) {
      toast.error("No user found!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", email);

      toast.success("Successfully logged-in!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        onClose: () => navigate("/"),
      });
    }
  };

  return (
    <>
      <div className="log-body">
        <div className="login_form">
          <form onSubmit={handleSubmit}>
            <h3>
              <span className="log-h3">LOG IN</span>
            </h3>

            <div className="input_box">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter email address"
                required
              />
            </div>

            <div className="input_box">
              <div className="password_title">
                <label htmlFor="password">Password</label>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowForgotPassword(true);
                  }}
                >
                  Forgot Password?
                </a>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
              />
            </div>

            <button type="submit">Log In</button>
            <p className="sign_up">
              Don't have an account?
              <span className="up">
                <Link to="/signup">Sign up</Link>
              </span>
            </p>
          </form>
        </div>
      </div>

      {showForgotPassword && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              className="close-modal"
              onClick={() => setShowForgotPassword(false)}
            >
              &times;
            </button>
            <ForgotPassword />
          </div>
        </div>
      )}

      <ToastContainer />
    </>
  );
};

export default Login;
