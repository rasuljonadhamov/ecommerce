import { Button } from "antd";

const PriceFilter = ({ priceQuery, setPriceQuery, handlePriceFilter }) => {
  return (
    <div className="search-wrapper">
      <label>Filter by Price: {priceQuery}$</label>
      <input
        type="range"
        min="0"
        max="1000"
        style={{ width: 180, marginRight: 10 }}
        value={priceQuery}
        onChange={(e) => setPriceQuery(e.target.value)}
      />
      <Button onClick={handlePriceFilter} type="primary">
        Apply
      </Button>
    </div>
  );
};

export default PriceFilter;
