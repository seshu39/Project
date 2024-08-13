import React, { useState } from "react";
import "./Forgotpassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-card">
        <h2>Forgot Your Password?</h2>
        {submitted ? (
          <div className="confirmation-message">
            <p>
              If an account with this email exists, a password reset link has been sent.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Enter your email address:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@domain.com"
                required
              />
            </div>
            <button type="submit" className="submit-btn">
              Reset Password
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
