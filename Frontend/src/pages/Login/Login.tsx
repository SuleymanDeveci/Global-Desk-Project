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
        alert("Login successful!");
        navigate("/home");
      } else if (response.status === 401) {
        setError("Invalid credentials. Please try again.");
      }
    } catch (errorAPI) {
      setError("An error occurred. Please try again later.");
      console.log(errorAPI);
    }
  };

  return (
    <div className="main-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            placeholder="name@example.com"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setLoginButtonDisabled(false);
            }}
            className="input-field"
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setLoginButtonDisabled(false);
            }}
            className="input-field"
          />
        </div>
        <button
          type="submit"
          className="login-button"
          disabled={disableLoginButton}
        >
          Login
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
});

export default Login;
