import SignInForm from "../components/SiginInForm/SiginInForm";
import SignUpForm from "../components/SiginUpForm/SiginUpForm";
import "./Authentication.scss";

function Authentication() {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
}

export default Authentication;
