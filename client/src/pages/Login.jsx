import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth"; // Ensure correct import

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { storeTokenInLs } = useAuth(); // Correct function name
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(user);

      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch");
      }

      const res_data = await response.json();
      console.log("Response From Server", res_data);

      // Store the token in local storage
      storeTokenInLs(res_data.token);
      setUser({
        email: "",
        password: "",
      });
      alert('Login Successfull!!!')
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container">
        <div className="image"></div>
        <div className="login-form-container">
          <h1>Login</h1>
          <br />
          <div className="login-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                />
                <br />
                <button type="submit" className="button button-submit">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
