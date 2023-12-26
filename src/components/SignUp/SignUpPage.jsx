import {  useNavigate } from "react-router-dom";
import "./SignUpPage.scss";
import { useState } from "react";

const defoultFormFields = {
  displayName: "",
  email: "",
  password: "",
};

const SignUpPage = () => {
  const [formFields, setFormField] = useState(defoultFormFields);
  const { displayName, email, password } = formFields;
  const navigate = useNavigate();

  const handleChange = (e) => {
    console.log(formFields);
    const { name, value } = e.target;
    setFormField({ ...formFields, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formFields);
    if (formFields.displayName.length <= 2) {
      alert("Username should be more than 2 character");
      return;
    }

    if (formFields.email.length <= 4) {
      alert("Email should be more than 4 character");
      return;
    }

    if (formFields.password.length <= 5) {
      alert("Password should be more than 5 character");
      return;
    }

    fetch("https://strapi-store-server.onrender.com/api/auth/local/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formFields),
    })
      .then((res) => {
        res.json();
      })
      .then((json) => {
        console.log(json);
        // localStorage.setItem("userEmail", json.email);
        // localStorage.setItem("userPassword", json.password);
        navigate("/sign-in");
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Don't have an account?</h2>
        <span>Sigin Up with your email and password</span>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            onChange={handleChange}
            type="text"
            id="username"
            name="displayName"
            value={displayName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            onChange={handleChange}
            type="email"
            id="email"
            name="email"
            value={email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            onChange={handleChange}
            type="password"
            id="password"
            name="password"
            value={password}
          />
        </div>
        <div className="form-group">
          <button type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
