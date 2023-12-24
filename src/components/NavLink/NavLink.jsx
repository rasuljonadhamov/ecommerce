import "./NavLink.scss";

const NavLink = ({ isDarkMode, children, ...props }) => {
  return (
    <a className={isDarkMode ? "NavLink dark-mode" : "NavLink"} {...props}>
      {children}
    </a>
  );
};

export default NavLink;
