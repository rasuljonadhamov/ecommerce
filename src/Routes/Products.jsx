import ProductListing from '../components/ProductListing/ProductListing'

const products = [
  {
    id: 1,
    name: "Product 1",
    price: "$19.99",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    name: "Product 2",
    price: "$24.99",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    name: "Product 3",
    price: "$14.99",
    image: "https://via.placeholder.com/300",
  },
];
const Products = () => {
  return (
    <div>
      <ProductListing products={products}/>
    </div>
  )
}

export default Products
