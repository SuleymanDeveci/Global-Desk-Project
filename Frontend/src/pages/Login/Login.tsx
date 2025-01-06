import React from "react";
import { observer } from "mobx-react-lite";
import { loginStore } from "../../stores/loginStore.ts";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login: React.FC = observer(() => {
  const navigate = useNavigate();
  const {
    email,
    password,
    error,
    disableLoginButton,
    setEmail,
    setPassword,
    setError,
    setLoginButtonDisabled,
    validateForm,
  } = loginStore;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // preventing page reload

    // Validation
    if (!validateForm()) return;

    //Mock API request
    try {
      const response = await fetch("http://localhost:5050/api/Auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 200) {
        navigate("/home");
      } else if (response.status === 401) {
        setLoginButtonDisabled(true);
        setError("Invalid credentials. Please try again.");
      }
    } catch (errorAPI) {
      setError("An error occurred. Please try again later.");
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="main-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setLoginButtonDisabled(false);
            }}
            className="input-field-email"
          />
        </div>
        <div className="input-box">
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setLoginButtonDisabled(false);
            }}
            className="input-field-password"
          />
        </div>
        <div className="button-box">
          <button
            type="submit"
            className="login-button"
            disabled={disableLoginButton}
          >
            Sign In
          </button>
        </div>
      </form>
      <div className="error-box">{error && <p>{error}</p>}</div>
    </div>
  );
});

export default Login;
