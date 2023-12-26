const SearchBar = ({ searchQuery, setSearchQuery, handleSearch }) => {
  return (
    <div className="search-wrapper">
      <label>Search Product</label>
      <input
        type="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={() => handleSearch(searchQuery)}>Search</button>
    </div>
  );
};

export default SearchBar;
