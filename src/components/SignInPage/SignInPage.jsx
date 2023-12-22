import "./SignInPage.scss"; // Import SCSS file for styling

const SignInPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="signin-container">
      <form onSubmit={handleSubmit} className="signin-form">
        <h2>Sign In</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <div className="form-group">
          <button type="submit">Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default SignInPage;
