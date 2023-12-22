import "./SearchInput.scss";

const SearchInput = ({ value, onChange }) => {
  return (
    <input
      type="search"
      placeholder="Search products..."
      className="search-input"
      value={value}
      onChange={(e) => onChange(e)}
    />
  );
};

export default SearchInput;
