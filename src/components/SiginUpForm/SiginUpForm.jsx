import { useContext, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Button from "../buttons/Button";
import FormInput from "../form-input/FormInput";
import { auth } from "../../Utilities/Firebase";
import { message } from "antd";
import { UserContext } from "../../Contexts/user.contexts";

const defoultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SignUpForm() {
  const [formFields, setFormField] = useState(defoultFormFields);
  const [errors, setErrors] = useState({});
  const { displayName, email, password, confirmPassword } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const handleChange = (e) => {
    console.log(formFields);
    const { name, value } = e.target;
    setFormField({ ...formFields, [name]: value });
  };

  const validateForm = () => {
    const validationErrors = {};

    if (!displayName) {
      validationErrors.displayName = "Display name is required";
    }

    if (!email) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Invalid email format";
    }

    if (password !== confirmPassword) {
      alert("Password does not match with Confirm password");
      return;
    }

    if (!confirmPassword) {
      validationErrors.confirmPassword = "Confirm password is required";
    } else if (password !== confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const resetForm = () => {
    setFormField(defoultFormFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return message.error("Pleace validete form correctly");
    }

    try {
      const registerUser = async () => {
        createUserWithEmailAndPassword(auth, email, password).then(
          (userCredential) => {
            console.log(userCredential);
            const user = userCredential.user;
            setCurrentUser(user);
            message.success("User sign up successfully");
            message.info("Pleace fill out sign in also");
            console.log(user);
          }
        );
      };

      registerUser();

      resetForm();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use");
      } else {
        message.info("Error uccured during sign up");
      }
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
