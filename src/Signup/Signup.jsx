import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import "./Signup.css"; // Make sure the CSS is imported

const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target["confirm-password"].value;

    if (password === confirmPassword) {
      try {
        await axios.post("http://localhost:100/login/log", { email, password });
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userEmail", email);

        toast.success("Sign up successful!", {
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
      } catch (error) {
        toast.error("Error during sign-up. Please try again later.", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } else {
      toast.error("Passwords do not match!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <>
      <div className="sign-body">
        <div className="signup_form">
          <form onSubmit={handleSubmit}>
            <h3>
              <span className="sign">Sign Up</span>
            </h3>

            <div className="input_boxx">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="input_boxx">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter email address"
                required
              />
            </div>

            <div className="password-container">
              <div className="input_boxx">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Create a password"
                  required
                />
              </div>

              <div className="input_boxx">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                  type="password"
                  id="confirm-password"
                  name="confirm-password"
                  placeholder="Confirm your password"
                  required
                />
              </div>
            </div>

            <button type="submit">Sign Up</button>

            <p className="sign_in">
              Already have an account?
              <span className="up">
                <Link to="/login">Log-in</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default SignUp;
