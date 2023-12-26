import { useNavigate } from "react-router-dom";
import "./SignInPage.scss";
import { useState } from "react";

const SignInPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (userEmail.length < 4) {
      alert("Email should be at least 5 character");
      return;
    }

    if (userPassword.length < 4) {
      alert("Pasword should be at least 5 character");
      return;
    }

    fetch("https://strapi-store-server.onrender.com/api/auth/local", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userEmail, userPassword),
    })
      .then((res) => {
        res.json();
      })
      .then((json) => {
        console.log(json);
        navigate("/");
      })
      .catch((err) => alert(err));
  };

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  function handleChange(e) {
    if (e.target.name === "email") {
      setUserEmail(e.target.value);
    } else {
      setUserPassword(e.target.value);
    }
  }

  return (
    <div className="signin-container">
      <form onSubmit={handleSubmit} className="signin-form">
        <h2>Sign In</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input onChange={handleChange} type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            onChange={handleChange}
            id="password"
            name="password"
          />
        </div>
        <div className="form-group">
          <button type="submit">Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default SignInPage;
