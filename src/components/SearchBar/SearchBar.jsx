import { Button, Input } from "antd";

const SearchBar = ({ searchQuery, setSearchQuery, handleSearch }) => {
  return (
    <div className="search-wrapper">
      <label>Search Product</label>

      <Input
        type="search"
        value={searchQuery}
        style={{ width: "200px", marginRight: 10 }}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button onClick={() => handleSearch(searchQuery)} type="primary">
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
