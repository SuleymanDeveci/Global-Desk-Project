import React from "react";
import { observer } from "mobx-react-lite";
import { loginStore } from "../../stores/loginStore.ts";
import "./Login.css";

const Login: React.FC = observer(() => {
  const {
    email,
    password,
    error,
    setEmail,
    setPassword,
    setError,
    validateForm,
  } = loginStore;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // preventing page reload

    // Validation
    if (!validateForm()) return;

    //Mock API request
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 200) {
        alert("Login successful!");
        // GO TO MAIN PAGE
      } else {
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
            }}
            className="input-field"
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
        </div>
        <button
          type="submit"
          className="login-button"
          disabled={!email || !password}
        >
          Login
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
});

export default Login;
