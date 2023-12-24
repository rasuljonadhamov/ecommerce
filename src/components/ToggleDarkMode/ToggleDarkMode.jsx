import "./ToggleDarkMode.scss";

const ToggleDarkMode = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <button
      className={`ToggleDarkMode ${isDarkMode ? "dark-mode" : ""}`}
      onClick={toggleDarkMode}
    >
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ToggleDarkMode;
