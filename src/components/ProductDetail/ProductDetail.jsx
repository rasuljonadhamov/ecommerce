import "./ProductDetail.scss";

const ProductDetail = ({ product }) => {
  return (
    <div className="product-detail">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h2>{product.name}</h2>
        <p>Price: {product.price}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
