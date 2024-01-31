import { useState } from "react";

import Button from "../buttons/Button";
import FormInput from "../form-input/FormInput";

const defoultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SignUpForm() {
  const [formFields, setFormField] = useState(defoultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (e) => {
    console.log(formFields);
    const { name, value } = e.target;
    setFormField({ ...formFields, [name]: value });
  };

  const resetForm = () => {
    setFormField(defoultFormFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password does not match with Confirm password");
      return;
    }

    try {
      await registerUser();

      resetForm();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use");
      } else {
        console.error(error);
      }
    }
  };

  const registerUser = async () => {
    // const userData = {
    //   username: displayName,
    //   email: email,
    //   password: password,
    // };

    try {
      let raw = `{ "username":${displayName},"email":${email},"password":${password}}`;

      let requestOptions = {
        method: "POST",
        body: raw,
        redirect: "follow",
      };

      await fetch(
        "https://strapi-store-server.onrender.com/api/auth/local/register",
        requestOptions
      )
        .then((response) => console.log(response))
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));

      
    } catch (error) {
      console.error("Error registering user:", error);
      throw error;
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sigin Up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          required
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

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

        <FormInput
          label="Consfirm Password"
          required
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
}

export default SignUpForm;
