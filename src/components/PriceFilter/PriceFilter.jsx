const PriceFilter = ({ priceQuery, setPriceQuery, handlePriceFilter }) => {
  return (
    <div className="search-wrapper">
      <label>Filter by Price: {priceQuery}$</label>
      <input
        type="range"
        min="0"
        max="1000"
        value={priceQuery}
        onChange={(e) => setPriceQuery(e.target.value)}
      />
      <button onClick={handlePriceFilter}>Apply</button>
    </div>
  );
};

export default PriceFilter;
