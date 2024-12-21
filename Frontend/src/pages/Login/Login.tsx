import "./Login.css";
import { useState } from "react";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // preventing page reload

    const emailRegex = /^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/;

    // Email validation
    if (!emailRegex.test(email)) {
      setError(
        "Invalid email format, only letters (a-z), numbers(0-9), and periods(.) are allowed."
      );
      return;
    }

    // Password check
    if (password.trim() === "") {
      setError("Password cannot be empty");
      return;
    }

    setError("");
    console.log("Valid login:", email, " ", password);

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
            onChange={(e) => setEmail(e.target.value)}
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
};

export default Login;
