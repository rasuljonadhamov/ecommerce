import { useState } from "react";
import "./SiginInForm.scss";

import Button from "../buttons/Button";
import FormInput from "../form-input/FormInput";

const defoultFormFields = {
  email: "",
  password: "",
};

function SignInForm() {
  const [formFields, setFormField] = useState(defoultFormFields);
  const { email, password } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormField({ ...formFields, [name]: value });
  };

  const resetForm = () => {
    setFormField(defoultFormFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(email, password);

      e.preventDefault();

      if (email.length < 4) {
        alert("Email should be at least 5 character");
        return;
      }

      if (password.length < 4) {
        alert("Pasword should be at least 5 character");
        return;
      }

      fetch("https://strapi-store-server.onrender.com/api/auth/local", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier: email,
          password: password,
        }),
      })
        .then((res) => {
          console.log(res);
          res.json();
        })
        .then((json) => {
          console.log(json);
        })
        .catch((err) => alert(err));

      resetForm();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Wrong Password");
          break;
        case "auth/invalid-credential":
          alert("Wrong Password");
          break;
        case "auth/user-not-found":
          alert("No user associated with this Email");
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sigin In with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          required
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          required
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
